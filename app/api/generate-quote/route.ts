import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// ─── Types ────────────────────────────────────────────────────────────────────

type TvInstallationType = 'standard' | 'modern' | 'luxury';
type WallType           = 'drywall' | 'concrete' | 'brick';
type TvSize             = 'up-to-55' | '56-to-75' | '76-plus';
type RoomSize           = 'small' | 'medium' | 'large';
type PaintGrade         = 'standard' | 'premium' | 'ultra';
type WallCondition      = 'good' | 'minor-repairs' | 'major-repairs';

interface TvAddons {
  ledLighting:    boolean;
  marblePanel:    boolean;
  accordionPanels:boolean;
}

interface TvInstallationDetails {
  installationType: TvInstallationType;
  tvSize:           TvSize;
  wallType:         WallType;
  numberOfDevices:  string;
  wallWidth:        number | null;
  wallHeight:       number | null;
  wallAreaSqft:     number | null;
  addons:           TvAddons;
}

interface PaintingDetails {
  numberOfRooms:   string;
  roomSize:        RoomSize;
  wallCondition:   WallCondition;
  paintGrade:      PaintGrade;
  includeCeilings: boolean;
}

interface QuoteRequest {
  clientName:      string;
  clientEmail:     string;
  service:         'tv-installation' | 'painting';
  language:        'en' | 'es';
  tvDetails?:      TvInstallationDetails;
  paintingDetails?: PaintingDetails;
}

// ─── Quote Calculators ────────────────────────────────────────────────────────

function calculateTvQuote(
  details: TvInstallationDetails
): { min: number; max: number; breakdown: string[] } {
  // Base prices per installation tier (labor + hardware + cable management)
  const bases: Record<TvInstallationType, [number, number]> = {
    standard: [ 800, 1300],
    modern:   [1700, 3000],
    luxury:   [2200, 4000],
  };

  let [min, max] = bases[details.installationType];
  const breakdown: string[] = [];

  const typeLabel: Record<TvInstallationType, string> = {
    standard: 'Standard Installation (mount + cable management)',
    modern:   'Modern Installation (concealed cables, clean finish)',
    luxury:   'Luxury Installation (in-wall wiring, premium hardware)',
  };
  breakdown.push(`${typeLabel[details.installationType]}: $${min.toLocaleString()}–$${max.toLocaleString()}`);

  // TV size surcharge
  if (details.tvSize === '56-to-75') {
    min += 30; max += 60;
    breakdown.push('TV 56–75″ size surcharge: +$30–$60');
  } else if (details.tvSize === '76-plus') {
    min += 50; max += 100;
    breakdown.push('TV 76″+ size surcharge: +$50–$100');
  }

  // Wall type surcharge
  if (details.wallType === 'concrete') {
    min += 40; max += 80;
    breakdown.push('Concrete wall drilling: +$40–$80');
  } else if (details.wallType === 'brick') {
    min += 40; max += 80;
    breakdown.push('Brick wall drilling: +$40–$80');
  }

  // Additional devices
  const extraDevices = Math.max(0, parseInt(details.numberOfDevices, 10) - 1);
  if (extraDevices > 0) {
    const dMin = extraDevices * 15;
    const dMax = extraDevices * 25;
    min += dMin; max += dMax;
    breakdown.push(`${extraDevices} additional device(s) wiring: +$${dMin}–$${dMax}`);
  }

  // Wall area — extra labor for larger surfaces
  const area = details.wallAreaSqft;
  if (area && area > 0) {
    if (area > 100 && area <= 180) {
      min += 30; max += 60;
      breakdown.push(`Large wall area (${area} sq ft): +$30–$60 labor`);
    } else if (area > 180) {
      min += 60; max += 120;
      breakdown.push(`Extra-large wall area (${area} sq ft): +$60–$120 labor`);
    }
  }

  // ── Premium Add-ons ──────────────────────────────────────────────────────

  if (details.addons.ledLighting) {
    const ledMin = 80;
    const ledMax = ledMin + Math.round((area || 0) * 0.4) + 100;
    min += ledMin; max += ledMax;
    breakdown.push(`Ambient LED lighting system: +$${ledMin}–$${ledMax}`);
  }

  if (details.addons.marblePanel) {
    // $80 flat add-on (decorative marble accent panel, client-selected size)
    const mFlat = 80;
    min += mFlat; max += mFlat + 40;
    breakdown.push(`Decorative marble panel installation: +$${mFlat}–$${mFlat + 40}`);
  }

  if (details.addons.accordionPanels) {
    if (area && area > 0) {
      // $18/sq ft flat rate (material + labor)
      const pCost = Math.round(area * 18);
      min += pCost; max += pCost + Math.round(pCost * 0.15);
      breakdown.push(`Accordion decorative panels (${area} sq ft × $18/sq ft): +$${pCost.toLocaleString()}–$${(pCost + Math.round(pCost * 0.15)).toLocaleString()}`);
    } else {
      min += 180; max += 350;
      breakdown.push('Accordion decorative panels (area TBD, estimated): +$180–$350');
    }
  }

  // ── 60% First-Installation Discount ─────────────────────────────────────
  const subtotalMin = min;
  const subtotalMax = max;
  min = Math.round(min * 0.40);
  max = Math.round(max * 0.40);
  breakdown.push(`🏷️ 60% first-installation discount: −$${(subtotalMin - min).toLocaleString()}–$${(subtotalMax - max).toLocaleString()}`);

  return { min, max, breakdown };
}

function calculatePaintingQuote(
  details: PaintingDetails
): { min: number; max: number; breakdown: string[] } {
  const roomBases: Record<RoomSize, [number, number]> = {
    small:  [180,  320],
    medium: [320,  550],
    large:  [550,  950],
  };

  const rooms = Math.max(1, parseInt(details.numberOfRooms, 10) || 1);
  let [min, max] = roomBases[details.roomSize];
  const breakdown: string[] = [];

  const sizeLabel: Record<RoomSize, string> = {
    small:  'Small room (<150 sq ft)',
    medium: 'Medium room (150–300 sq ft)',
    large:  'Large room (300–500 sq ft)',
  };
  breakdown.push(`${sizeLabel[details.roomSize]} base: $${min}–$${max}`);

  if (rooms > 1) {
    const extra    = rooms - 1;
    const extraMin = Math.round(min * extra * 0.9);
    const extraMax = Math.round(max * extra * 0.9);
    min += extraMin; max += extraMax;
    breakdown.push(`${extra} additional room(s) (10% multi-room discount): +$${extraMin}–$${extraMax}`);
  }

  if (details.wallCondition === 'minor-repairs') {
    const rMin = rooms * 60; const rMax = rooms * 100;
    min += rMin; max += rMax;
    breakdown.push(`Minor wall repairs (${rooms} room(s)): +$${rMin}–$${rMax}`);
  } else if (details.wallCondition === 'major-repairs') {
    const rMin = rooms * 150; const rMax = rooms * 250;
    min += rMin; max += rMax;
    breakdown.push(`Major wall repairs/prep (${rooms} room(s)): +$${rMin}–$${rMax}`);
  }

  if (details.paintGrade === 'premium') {
    min = Math.round(min * 1.15); max = Math.round(max * 1.15);
    breakdown.push('Premium paint grade: +15%');
  } else if (details.paintGrade === 'ultra') {
    min = Math.round(min * 1.28); max = Math.round(max * 1.28);
    breakdown.push('Ultra-premium paint grade: +28%');
  }

  if (details.includeCeilings) {
    const cMin = rooms * 80; const cMax = rooms * 150;
    min += cMin; max += cMax;
    breakdown.push(`Ceiling painting (${rooms} room(s)): +$${cMin}–$${cMax}`);
  }

  return { min, max, breakdown };
}

// ─── Email Template ───────────────────────────────────────────────────────────

function buildQuoteEmail(params: {
  clientName:      string;
  serviceLine:     string;
  quoteMin:        number;
  quoteMax:        number;
  breakdown:       string[];
  language:        'en' | 'es';
  tvDetails?:      TvInstallationDetails;
  paintingDetails?: PaintingDetails;
}): string {
  const { clientName, serviceLine, quoteMin, quoteMax, breakdown, language, tvDetails, paintingDetails } = params;
  const isEs = language === 'es';

  // Build detail table rows
  let detailRows = '';

  if (tvDetails) {
    const typeMap: Record<TvInstallationType, string> = {
      standard: 'Standard', modern: 'Modern', luxury: 'Luxury'
    };
    const tvMap: Record<string, string> = {
      'up-to-55': 'Up to 55″',
      '56-to-75': '56–75″',
      '76-plus':  '76″ or larger',
    };
    const wallMap: Record<string, string> = {
      drywall: 'Drywall', concrete: 'Concrete', brick: 'Brick'
    };

    const rows: [string, string][] = [
      [isEs ? 'Tipo de Instalación'    : 'Installation Type',    typeMap[tvDetails.installationType]],
      [isEs ? 'Tamaño del TV'          : 'TV Size',              tvMap[tvDetails.tvSize]],
      [isEs ? 'Tipo de Pared'          : 'Wall Type',            wallMap[tvDetails.wallType]],
      [isEs ? 'Dispositivos Conectados': 'Connected Devices',    tvDetails.numberOfDevices],
    ];

    if (tvDetails.wallWidth && tvDetails.wallHeight) {
      rows.push([
        isEs ? 'Dimensiones de Pared' : 'Wall Dimensions',
        `${tvDetails.wallWidth} ft × ${tvDetails.wallHeight} ft${tvDetails.wallAreaSqft ? ` (${tvDetails.wallAreaSqft} sq ft)` : ''}`,
      ]);
    }

    // List selected add-ons
    const addonNames: Record<keyof TvAddons, string> = {
      ledLighting:    isEs ? 'Iluminación LED'  : 'LED Lighting',
      marblePanel:    isEs ? 'Panel de Mármol'  : 'Marble Panel',
      accordionPanels:isEs ? 'Paneles Acordeón' : 'Accordion Panels',
    };
    const selectedAddons = (Object.keys(tvDetails.addons) as Array<keyof TvAddons>)
      .filter(k => tvDetails.addons[k])
      .map(k => addonNames[k]);

    if (selectedAddons.length > 0) {
      rows.push([
        isEs ? 'Opciones Premium' : 'Premium Add-ons',
        selectedAddons.join(', '),
      ]);
    }

    detailRows = rows.map(([k, v]) => `
      <tr>
        <td style="padding:8px 0;color:#64748b;font-size:14px;width:48%;border-bottom:1px solid #f1f5f9;">${k}</td>
        <td style="padding:8px 0;color:#0f172a;font-size:14px;font-weight:600;border-bottom:1px solid #f1f5f9;">${v}</td>
      </tr>`).join('');

  } else if (paintingDetails) {
    const sizeMap: Record<RoomSize, string> = {
      small:  isEs ? 'Pequeño' : 'Small',
      medium: isEs ? 'Mediano' : 'Medium',
      large:  isEs ? 'Grande'  : 'Large',
    };
    const condMap: Record<WallCondition, string> = {
      good:            isEs ? 'Buen estado'          : 'Good condition',
      'minor-repairs': isEs ? 'Reparaciones menores' : 'Minor repairs',
      'major-repairs': isEs ? 'Reparaciones mayores' : 'Major repairs',
    };
    const gradeMap: Record<PaintGrade, string> = {
      standard: 'Standard',
      premium:  'Premium',
      ultra:    'Ultra Premium',
    };
    const rows: [string, string][] = [
      [isEs ? 'Habitaciones'        : 'Rooms',             paintingDetails.numberOfRooms],
      [isEs ? 'Tamaño de Habitación': 'Room Size',         sizeMap[paintingDetails.roomSize]],
      [isEs ? 'Estado de Paredes'   : 'Wall Condition',    condMap[paintingDetails.wallCondition]],
      [isEs ? 'Calidad de Pintura'  : 'Paint Grade',       gradeMap[paintingDetails.paintGrade]],
      [isEs ? 'Incluye Techos'      : 'Includes Ceilings', paintingDetails.includeCeilings ? (isEs ? 'Sí' : 'Yes') : (isEs ? 'No' : 'No')],
    ];
    detailRows = rows.map(([k, v]) => `
      <tr>
        <td style="padding:8px 0;color:#64748b;font-size:14px;width:48%;border-bottom:1px solid #f1f5f9;">${k}</td>
        <td style="padding:8px 0;color:#0f172a;font-size:14px;font-weight:600;border-bottom:1px solid #f1f5f9;">${v}</td>
      </tr>`).join('');
  }

  const breakdownItems = breakdown.map(item =>
    `<li style="padding:7px 0;color:#475569;font-size:14px;list-style:none;border-bottom:1px solid #f8fafc;">
       <span style="color:#38bdf8;margin-right:8px;">›</span>${item}
     </li>`
  ).join('');

  return `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>${isEs ? 'Tu Cotización' : 'Your Quote'} – Villa Safe Solutions</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',system-ui,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 16px;">
  <tr><td align="center">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">

    <!-- HEADER -->
    <tr><td style="background:#0f172a;border-radius:20px 20px 0 0;padding:40px 40px 32px;text-align:center;">
      <p style="margin:0 0 6px;color:#38bdf8;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;">
        Villa Safe Solutions
      </p>
      <h1 style="margin:0;color:#fff;font-size:26px;font-weight:800;letter-spacing:-0.5px;">
        ${isEs ? 'Tu Cotización Personalizada' : 'Your Personalized Quote'}
      </h1>
      <div style="margin:18px auto 0;width:50px;height:3px;background:linear-gradient(90deg,#38bdf8,#10b981);border-radius:2px;"></div>
    </td></tr>

    <!-- BODY -->
    <tr><td style="background:#fff;padding:40px;">

      <p style="margin:0 0 18px;font-size:18px;color:#0f172a;font-weight:600;">
        ${isEs ? `Hola, ${clientName}` : `Hello, ${clientName}`},
      </p>
      <p style="margin:0 0 30px;font-size:15px;color:#475569;line-height:1.7;">
        ${isEs
          ? 'Gracias por contactar a <strong>Villa Safe Solutions</strong>. A continuación encontrarás tu cotización detallada:'
          : 'Thank you for contacting <strong>Villa Safe Solutions</strong>. Below is your detailed quote:'}
      </p>

      <!-- Service -->
      <p style="margin:0 0 8px;font-size:11px;font-weight:700;color:#94a3b8;letter-spacing:2px;text-transform:uppercase;">
        ${isEs ? 'Servicio Solicitado' : 'Requested Service'}
      </p>
      <p style="margin:0 0 24px;font-size:16px;font-weight:700;color:#0f172a;">${serviceLine}</p>

      <!-- Detail table -->
      ${detailRows ? `
      <table width="100%" cellpadding="0" cellspacing="0"
        style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:28px;">
        <tbody>${detailRows}</tbody>
      </table>` : ''}

      <!-- Quote range -->
      <div style="background:linear-gradient(135deg,#0f172a,#1e3a8a);border-radius:16px;padding:32px;text-align:center;margin-bottom:28px;">
        <p style="margin:0 0 8px;font-size:11px;font-weight:700;color:#38bdf8;letter-spacing:3px;text-transform:uppercase;">
          ${isEs ? 'Rango Estimado' : 'Estimated Range'}
        </p>
        <p style="margin:0;font-size:44px;font-weight:900;color:#fff;letter-spacing:-1px;">
          $${quoteMin.toLocaleString()} – $${quoteMax.toLocaleString()}
        </p>
        <p style="margin:12px 0 0;font-size:12px;color:#94a3b8;">
          ${isEs ? 'Cotización válida por 30 días' : 'Quote valid for 30 days'}
        </p>
      </div>

      <!-- Breakdown -->
      <p style="margin:0 0 10px;font-size:11px;font-weight:700;color:#334155;letter-spacing:2px;text-transform:uppercase;">
        ${isEs ? 'Desglose de Costos' : 'Cost Breakdown'}
      </p>
      <ul style="margin:0 0 28px;padding:0;">${breakdownItems}</ul>

      <!-- Disclaimer -->
      <div style="background:#fef3c7;border:1px solid #fcd34d;border-radius:12px;padding:20px;margin-bottom:28px;">
        <p style="margin:0 0 5px;font-size:13px;font-weight:700;color:#92400e;">
          ${isEs ? '⚠️ Nota Importante' : '⚠️ Important Note'}
        </p>
        <p style="margin:0;font-size:14px;color:#78350f;line-height:1.6;">
          ${isEs
            ? 'Este es un estimado preliminar. El precio final puede variar según la inspección en sitio. Nuestro equipo te contactará para coordinar una visita y confirmar los detalles.'
            : 'This is a preliminary estimate. The final price may vary based on an on-site inspection. Our team will contact you to schedule a visit and confirm all details.'}
        </p>
      </div>

      <p style="margin:0;font-size:14px;color:#64748b;line-height:1.7;text-align:center;">
        ${isEs
          ? '¿Tienes preguntas? Responde a este correo directamente.'
          : 'Have questions? Reply to this email directly.'}
      </p>

    </td></tr>

    <!-- FOOTER -->
    <tr><td style="background:#0f172a;border-radius:0 0 20px 20px;padding:24px 40px;text-align:center;">
      <p style="margin:0;font-size:12px;color:#475569;">
        © ${new Date().getFullYear()} Villa Safe Solutions · All rights reserved
      </p>
    </td></tr>

  </table>
  </td></tr>
</table>
</body>
</html>`;
}

// ─── Route Handler ────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const body: QuoteRequest = await request.json();
    const { clientName, clientEmail, service, language, tvDetails, paintingDetails } = body;

    if (!clientName || !clientEmail || !service) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    let quoteResult: { min: number; max: number; breakdown: string[] };
    let serviceLine: string;

    if (service === 'tv-installation' && tvDetails) {
      quoteResult = calculateTvQuote(tvDetails);
      const typeLabel: Record<string, string> = {
        standard: 'Standard', modern: 'Modern', luxury: 'Luxury',
      };
      serviceLine = language === 'es'
        ? `Instalación de Mueble de TV – ${typeLabel[tvDetails.installationType]}`
        : `TV Entertainment Furniture Installation – ${typeLabel[tvDetails.installationType]}`;
    } else if (service === 'painting' && paintingDetails) {
      quoteResult = calculatePaintingQuote(paintingDetails);
      serviceLine = language === 'es' ? 'Servicio de Pintura' : 'Painting Service';
    } else {
      return NextResponse.json({ error: 'Invalid service or missing details.' }, { status: 400 });
    }

    const html = buildQuoteEmail({
      clientName,
      serviceLine,
      quoteMin: quoteResult.min,
      quoteMax: quoteResult.max,
      breakdown: quoteResult.breakdown,
      language,
      tvDetails,
      paintingDetails,
    });

    const subjectClient = language === 'es'
      ? 'Tu Cotización – Villa Safe Solutions'
      : 'Your Quote – Villa Safe Solutions';

    // Send to client
    await resend.emails.send({
      from:    'Villa Safe Solutions <quotes@villasafesolutions.com>',
      to:      clientEmail,
      subject: subjectClient,
      html,
    });

    // Internal notification
    await resend.emails.send({
      from:    'Villa Safe Solutions <noreply@villasafesolutions.com>',
      to:      process.env.BUSINESS_EMAIL || 'info@villasafesolutions.com',
      subject: `New Quote – ${clientName} | ${serviceLine}`,
      html: `
        <p><strong>Client:</strong> ${clientName} (${clientEmail})</p>
        <p><strong>Service:</strong> ${serviceLine}</p>
        <p><strong>Estimated Range:</strong> $${quoteResult.min.toLocaleString()} – $${quoteResult.max.toLocaleString()}</p>
        <p><strong>Breakdown:</strong></p>
        <ul>${quoteResult.breakdown.map(b => `<li>${b}</li>`).join('')}</ul>
        ${tvDetails?.wallAreaSqft ? `<p><strong>Wall Area:</strong> ${tvDetails.wallAreaSqft} sq ft (${tvDetails.wallWidth} ft × ${tvDetails.wallHeight} ft)</p>` : ''}
        ${tvDetails?.addons ? `<p><strong>Add-ons:</strong> ${Object.entries(tvDetails.addons).filter(([,v]) => v).map(([k]) => k).join(', ') || 'None'}</p>` : ''}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[generate-quote]', error);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}