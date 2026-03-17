'use client';

import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useLanguage } from '@/contexts/LanguageContext';

// ─── Translations ─────────────────────────────────────────────────────────────

const translations = {
  es: {
    title: 'Solicitar Cotización',
    subtitle: 'Completa los detalles y recibirás tu cotización personalizada en tu correo.',
    nameLabel: 'Nombre Completo',
    emailLabel: 'Correo Electrónico',
    serviceLabel: 'Servicio de Interés',
    placeholderName: 'Tu nombre completo',
    placeholderEmail: 'tu@email.com',
    placeholderService: 'Selecciona un servicio...',
    buttonSubmit: 'Generar Cotización',
    buttonSending: 'Procesando...',
    successTitle: '¡Cotización Enviada!',
    successMessage: 'Revisa tu correo electrónico. Hemos enviado tu cotización personalizada con el desglose de costos detallado.',
    buttonAnother: 'Nueva Cotización',
    errorMsg: '⚠️ Ocurrió un error. Por favor intenta de nuevo.',
    services: {
      tvInstallation: 'Instalación de Mueble de TV',
      painting: 'Pintura',
    },
    tvTypeLabel: 'Tipo de Instalación',
    tvTypes: {
      standard: 'Standard – Montaje básico con gestión de cables',
      modern:   'Modern – Cables ocultos, acabado limpio',
      luxury:   'Luxury – Cableado en pared, hardware premium',
    },
    tvSizeLabel: 'Tamaño del Televisor',
    tvSizes: {
      'up-to-55': 'Hasta 55 pulgadas',
      '56-to-75': '56 – 75 pulgadas',
      '76-plus':  '76 pulgadas o más',
    },
    wallTypeLabel: 'Tipo de Pared',
    wallTypes: {
      drywall:  'Drywall (pared seca)',
      concrete: 'Concreto',
      brick:    'Ladrillo',
    },
    devicesLabel: 'Número de Dispositivos a Conectar',
    wallDimsLabel:        'Medidas de la Pared',
    wallDimsNote:         'Ingresa las dimensiones del área donde se instalará el sistema (en pies)',
    wallWidthLabel:       'Ancho (ft)',
    wallHeightLabel:      'Alto (ft)',
    wallWidthPlaceholder: 'Ej: 12',
    wallHeightPlaceholder:'Ej: 9',
    sqftLabel:            'Área calculada',
    addonsLabel: 'Opciones Premium',
    addonsNote:  'Selecciona los elementos adicionales que deseas incluir en tu instalación',
    addonLabels: {
      ledLighting:       'Iluminación LED Ambiental',
      marblePanel:       'Panel de Mármol Decorativo',
      accordionPanels:   'Paneles Tipo Acordeón',
    },
    addonDescs: {
      ledLighting:       'Tiras LED retroiluminadas sincronizadas con el área de entretenimiento',
      marblePanel:       'Panel decorativo de mármol como fondo del TV (cliente selecciona tamaño)',
      accordionPanels:   'Paneles decorativos plegables que enmarcan el área de entretenimiento',
    },
    addonPriceHints: {
      ledLighting:       'desde $80',
      marblePanel:       '$80 fijo',
      accordionPanels:   '$18/sq ft',
    },
    roomsLabel:        'Número de Habitaciones',
    roomSizeLabel:     'Tamaño Promedio de Habitación',
    roomSizes: {
      small:  'Pequeña (menos de 15 m²)',
      medium: 'Mediana (15 – 28 m²)',
      large:  'Grande (28 – 46 m²)',
    },
    wallConditionLabel: 'Estado Actual de las Paredes',
    wallConditions: {
      good:            'Buen estado',
      'minor-repairs': 'Reparaciones menores (grietas pequeñas)',
      'major-repairs': 'Reparaciones mayores (huecos, daños)',
    },
    paintGradeLabel: 'Calidad de Pintura',
    paintGrades: {
      standard: 'Standard',
      premium:  'Premium (+15%)',
      ultra:    'Ultra Premium (+28%)',
    },
    includeCeilingsLabel: 'Incluir Techos',
    includeCeilingsYes:   'Sí, incluir techos',
    includeCeilingsNo:    'Solo paredes',
    sectionInfo:    'Información de Contacto',
    sectionService: 'Detalles del Servicio',
    sectionWall:    'Dimensiones de la Pared',
    sectionAddons:  'Personalización Premium',
  },
  en: {
    title: 'Request a Quote',
    subtitle: 'Fill in the details and receive your personalized quote directly to your email.',
    nameLabel: 'Full Name',
    emailLabel: 'Email Address',
    serviceLabel: 'Service of Interest',
    placeholderName: 'Your full name',
    placeholderEmail: 'you@email.com',
    placeholderService: 'Select a service...',
    buttonSubmit: 'Generate Quote',
    buttonSending: 'Processing...',
    successTitle: 'Quote Sent!',
    successMessage: "Check your inbox. We've sent your personalized quote with a full cost breakdown.",
    buttonAnother: 'New Quote',
    errorMsg: '⚠️ An error occurred. Please try again.',
    services: {
      tvInstallation: 'TV Entertainment Furniture Installation',
      painting: 'Painting',
    },
    tvTypeLabel: 'Installation Type',
    tvTypes: {
      standard: 'Standard – Basic mount with cable management',
      modern:   'Modern – Concealed cables, clean finish',
      luxury:   'Luxury – In-wall wiring, premium hardware',
    },
    tvSizeLabel: 'Television Size',
    tvSizes: {
      'up-to-55': 'Up to 55 inches',
      '56-to-75': '56 – 75 inches',
      '76-plus':  '76 inches or larger',
    },
    wallTypeLabel: 'Wall Type',
    wallTypes: {
      drywall:  'Drywall',
      concrete: 'Concrete',
      brick:    'Brick',
    },
    devicesLabel: 'Number of Devices to Connect',
    wallDimsLabel:        'Wall Dimensions',
    wallDimsNote:         'Enter the dimensions of the installation wall area (in feet)',
    wallWidthLabel:       'Width (ft)',
    wallHeightLabel:      'Height (ft)',
    wallWidthPlaceholder: 'e.g. 12',
    wallHeightPlaceholder:'e.g. 9',
    sqftLabel:            'Calculated area',
    addonsLabel: 'Premium Options',
    addonsNote:  'Select the additional elements you want to include in your installation',
    addonLabels: {
      ledLighting:       'Ambient LED Lighting',
      marblePanel:       'Decorative Marble Panel',
      accordionPanels:   'Accordion-Style Panels',
    },
    addonDescs: {
      ledLighting:       'Backlit LED strips synchronized with the entertainment area',
      marblePanel:       'Decorative marble panel as TV backdrop (client selects size)',
      accordionPanels:   'Decorative folding panels framing the entertainment wall',
    },
    addonPriceHints: {
      ledLighting:       'from $80',
      marblePanel:       '$80 flat',
      accordionPanels:   '$18/sq ft',
    },
    roomsLabel:        'Number of Rooms',
    roomSizeLabel:     'Average Room Size',
    roomSizes: {
      small:  'Small (under 150 sq ft)',
      medium: 'Medium (150 – 300 sq ft)',
      large:  'Large (300 – 500 sq ft)',
    },
    wallConditionLabel: 'Current Wall Condition',
    wallConditions: {
      good:            'Good condition',
      'minor-repairs': 'Minor repairs (small cracks)',
      'major-repairs': 'Major repairs (holes, damage)',
    },
    paintGradeLabel: 'Paint Grade',
    paintGrades: {
      standard: 'Standard',
      premium:  'Premium (+15%)',
      ultra:    'Ultra Premium (+28%)',
    },
    includeCeilingsLabel: 'Include Ceilings',
    includeCeilingsYes:   'Yes, include ceilings',
    includeCeilingsNo:    'Walls only',
    sectionInfo:    'Contact Information',
    sectionService: 'Service Details',
    sectionWall:    'Wall Dimensions',
    sectionAddons:  'Premium Customization',
  },
};

// ─── Types ────────────────────────────────────────────────────────────────────

type Service = 'tv-installation' | 'painting' | '';
type TvType  = 'standard' | 'modern' | 'luxury';

interface TvAddons {
  ledLighting:    boolean;
  marblePanel:    boolean;
  accordionPanels:boolean;
}

// ─── Styled Components ────────────────────────────────────────────────────────

const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme?.colors?.secondaryBg || '#f1f5f9'};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 4rem 1.5rem 6rem;
`;

const Card = styled.div`
  width: 100%;
  max-width: 660px;
  background: ${({ theme }) => theme?.colors?.bg || '#ffffff'};
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme?.colors?.borders?.secondary || '#e2e8f0'};
  box-shadow: 0 25px 60px -12px rgba(0, 0, 0, 0.18);
  overflow: hidden;
`;

const CardHeader = styled.div`
  padding: 3.5rem 2.5rem 2.5rem;
  background: #0f172a;
  color: white;
  text-align: center;
  border-bottom: 4px solid #38bdf8;
`;

const CardTitle = styled.h1`
  margin: 0 0 0.75rem;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.5px;
`;

const CardSubtitle = styled.p`
  margin: 0;
  font-size: 0.95rem;
  opacity: 0.8;
  line-height: 1.6;
`;

const CardBody = styled.div`
  padding: 3rem 2.5rem;
`;

const FieldGroup = styled.div`
  display: grid;
  gap: 1.75rem;
`;

const Field = styled.div``;

const SectionDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.25rem;
`;

const SectionLine = styled.div`
  flex: 1;
  height: 1px;
  background: #e2e8f0;
`;

const SectionTag = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #94a3b8;
  white-space: nowrap;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.6rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme?.colors?.textPrimary || '#334155'};
`;

const HintText = styled.p`
  margin: -0.3rem 0 0.75rem;
  font-size: 0.8rem;
  color: #94a3b8;
  line-height: 1.5;
`;

const baseInput = css`
  width: 100%;
  padding: 1rem 1.1rem;
  border-radius: 12px;
  border: 1.5px solid #e2e8f0;
  background: ${({ theme }: any) => theme?.colors?.bg || '#ffffff'};
  color: ${({ theme }: any) => theme?.colors?.textPrimary || '#0f172a'};
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-sizing: border-box;

  &:focus {
    border-color: #38bdf8;
    box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.12);
  }
  &::placeholder { color: #94a3b8; }
`;

const Input = styled.input`${baseInput}`;

const Select = styled.select`
  ${baseInput}
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1.1rem center;
  background-size: 1.1rem;
  padding-right: 3rem;
`;

/* Wall dimension inputs */
const DimRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const DimField = styled.div`
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.82rem;
    font-weight: 600;
    color: #64748b;
  }
`;

const AreaBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin-top: 0.8rem;
  padding: 0.4rem 0.9rem;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 8px;
  font-size: 0.82rem;
  font-weight: 600;
  color: #15803d;
`;

/* Radio cards for TV type */
const OptionCards = styled.div`
  display: grid;
  gap: 0.75rem;
`;

const OptionCard = styled.label<{ $selected: boolean; $accent?: string }>`
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
  padding: 1.1rem 1.25rem;
  border-radius: 14px;
  border: 2px solid ${({ $selected, $accent }) => $selected ? ($accent || '#38bdf8') : '#e2e8f0'};
  background: ${({ $selected, $accent }) => $selected ? `${$accent || '#38bdf8'}0d` : 'transparent'};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: ${({ $accent }) => $accent || '#38bdf8'};
    background: ${({ $accent }) => `${$accent || '#38bdf8'}08`};
  }

  input[type="radio"] {
    margin-top: 2px;
    accent-color: ${({ $accent }) => $accent || '#38bdf8'};
    flex-shrink: 0;
  }
`;

const OptionCardText = styled.div`
  font-size: 0.93rem;
  color: ${({ theme }) => theme?.colors?.textPrimary || '#0f172a'};
  line-height: 1.4;
`;

const OptionBadge = styled.span<{ $color: string }>`
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({ $color }) => $color};
  background: ${({ $color }) => `${$color}18`};
  border-radius: 6px;
  padding: 2px 8px;
  margin-right: 0.4rem;
`;

/* Checkbox add-on cards */
const AddonGrid = styled.div`
  display: grid;
  gap: 0.75rem;
`;

const AddonCard = styled.label<{ $selected: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.1rem 1.25rem;
  border-radius: 14px;
  border: 2px solid ${({ $selected }) => $selected ? '#b45309' : '#e2e8f0'};
  background: ${({ $selected }) => $selected ? '#fef3c70a' : 'transparent'};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #d97706;
    background: #fef3c705;
  }

  input[type="checkbox"] {
    margin-top: 3px;
    width: 16px;
    height: 16px;
    accent-color: #b45309;
    flex-shrink: 0;
    cursor: pointer;
  }
`;

const AddonContent = styled.div`flex: 1;`;

const AddonTitle = styled.div`
  font-size: 0.93rem;
  font-weight: 700;
  color: ${({ theme }) => theme?.colors?.textPrimary || '#0f172a'};
  display: flex;
  align-items: center;
  gap: 0.45rem;
  flex-wrap: wrap;
  margin-bottom: 0.25rem;
`;

const AddonDesc = styled.div`
  font-size: 0.82rem;
  color: #64748b;
  line-height: 1.4;
`;

const AddonPriceTag = styled.span`
  font-size: 0.72rem;
  color: #b45309;
  font-weight: 700;
  background: #fef3c7;
  border: 1px solid #fde68a;
  border-radius: 6px;
  padding: 1px 7px;
`;

/* Yes/No toggle */
const ToggleRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
`;

const ToggleOption = styled.label<{ $selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem;
  border-radius: 12px;
  border: 2px solid ${({ $selected }) => $selected ? '#38bdf8' : '#e2e8f0'};
  background: ${({ $selected }) => $selected ? 'rgba(56,189,248,0.07)' : 'transparent'};
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ $selected }) => $selected ? '#0284c7' : '#64748b'};
  cursor: pointer;
  transition: all 0.2s;
  input { display: none; }
  &:hover { border-color: #38bdf8; }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1.2rem;
  border: none;
  border-radius: 14px;
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  background: linear-gradient(135deg, #38bdf8, #10b981);
  color: white;
  letter-spacing: 0.3px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(56,189,248,0.28);
    filter: brightness(1.08);
  }
  &:active { transform: translateY(0); }
  &:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
`;

const SuccessWrap = styled.div`
  text-align: center;
  padding: 1rem 0;

  .icon { font-size: 4.5rem; display: block; margin-bottom: 1.5rem; }
  h2 {
    margin: 0 0 1rem;
    font-size: 1.6rem;
    font-weight: 800;
    color: ${({ theme }) => theme?.colors?.textPrimary || '#0f172a'};
  }
  p {
    color: ${({ theme }) => theme?.colors?.textSecondary || '#64748b'};
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 2rem;
  }
`;

const ErrorBanner = styled.p`
  margin: 0;
  padding: 1rem 1.25rem;
  background: #fee2e2;
  color: #b91c1c;
  border: 1px solid #fecaca;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 500;
`;

// ─── Helpers ──────────────────────────────────────────────────────────────────

const ADDON_ICONS: Record<keyof TvAddons, string> = {
  ledLighting:    '💡',
  marblePanel:    '🪨',
  accordionPanels:'🪗',
};

const Divider = ({ label }: { label: string }) => (
  <SectionDivider>
    <SectionLine />
    <SectionTag>{label}</SectionTag>
    <SectionLine />
  </SectionDivider>
);

// ─── Component ────────────────────────────────────────────────────────────────

export default function QuotesPage() {
  const { language } = useLanguage();
  const lang = (language === 'es' || language === 'en') ? language : 'es';
  const t = translations[lang];

  const [service, setService] = useState<Service>('');
  const [status, setStatus]   = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Common
  const [name, setName]   = useState('');
  const [email, setEmail] = useState('');

  // TV Installation
  const [tvType,     setTvType]     = useState<TvType>('standard');
  const [tvSize,     setTvSize]     = useState('up-to-55');
  const [wallType,   setWallType]   = useState('drywall');
  const [numDevices, setNumDevices] = useState('1');
  const [wallWidth,  setWallWidth]  = useState('');
  const [wallHeight, setWallHeight] = useState('');
  const [addons, setAddons] = useState<TvAddons>({
    ledLighting:    false,
    marblePanel:    false,
    accordionPanels:false,
  });

  // Painting
  const [numRooms,        setNumRooms]        = useState('1');
  const [roomSize,        setRoomSize]        = useState('medium');
  const [wallCondition,   setWallCondition]   = useState('good');
  const [paintGrade,      setPaintGrade]      = useState('standard');
  const [includeCeilings, setIncludeCeilings] = useState(false);

  const wallArea = wallWidth && wallHeight
    ? Math.round(parseFloat(wallWidth) * parseFloat(wallHeight) * 10) / 10
    : null;

  const tvTypeConfig: Record<TvType, { badge: string; color: string }> = {
    standard: { badge: 'Standard', color: '#64748b' },
    modern:   { badge: 'Modern',   color: '#0284c7' },
    luxury:   { badge: 'Luxury',   color: '#b45309' },
  };

  const toggleAddon = (key: keyof TvAddons) =>
    setAddons(prev => ({ ...prev, [key]: !prev[key] }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const payload: Record<string, unknown> = {
      clientName: name,
      clientEmail: email,
      service,
      language: lang,
    };

    if (service === 'tv-installation') {
      payload.tvDetails = {
        installationType: tvType,
        tvSize,
        wallType,
        numberOfDevices: numDevices,
        wallWidth:    wallWidth  || null,
        wallHeight:   wallHeight || null,
        wallAreaSqft: wallArea   || null,
        addons,
      };
    } else if (service === 'painting') {
      payload.paintingDetails = {
        numberOfRooms: numRooms,
        roomSize,
        wallCondition,
        paintGrade,
        includeCeilings,
      };
    }

    try {
      const res = await fetch('/api/generate-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('API error');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const reset = () => {
    setStatus('idle'); setService('');
    setName(''); setEmail('');
    setTvType('standard'); setTvSize('up-to-55'); setWallType('drywall'); setNumDevices('1');
    setWallWidth(''); setWallHeight('');
    setAddons({ ledLighting: false, marblePanel: false, accordionPanels: false });
    setNumRooms('1'); setRoomSize('medium'); setWallCondition('good');
    setPaintGrade('standard'); setIncludeCeilings(false);
  };

  return (
    <PageWrapper>
      <Card>
        <CardHeader>
          <CardTitle>{status === 'success' ? t.successTitle : t.title}</CardTitle>
          {status !== 'success' && <CardSubtitle>{t.subtitle}</CardSubtitle>}
        </CardHeader>

        <CardBody>
          {status === 'success' ? (
            <SuccessWrap>
              <span className="icon">📩</span>
              <h2>{t.successTitle}</h2>
              <p>{t.successMessage}</p>
              <SubmitButton onClick={reset}>{t.buttonAnother}</SubmitButton>
            </SuccessWrap>
          ) : (
            <form onSubmit={handleSubmit}>
              <FieldGroup>

                {/* ── Contact Info ── */}
                <Divider label={t.sectionInfo} />

                <Field>
                  <Label htmlFor="name">{t.nameLabel}</Label>
                  <Input id="name" required value={name}
                    placeholder={t.placeholderName}
                    onChange={e => setName(e.target.value)} />
                </Field>

                <Field>
                  <Label htmlFor="email">{t.emailLabel}</Label>
                  <Input id="email" type="email" required value={email}
                    placeholder={t.placeholderEmail}
                    onChange={e => setEmail(e.target.value)} />
                </Field>

                <Field>
                  <Label htmlFor="service">{t.serviceLabel}</Label>
                  <Select id="service" required value={service}
                    onChange={e => setService(e.target.value as Service)}>
                    <option value="">{t.placeholderService}</option>
                    <option value="tv-installation">{t.services.tvInstallation}</option>
                    <option value="painting">{t.services.painting}</option>
                  </Select>
                </Field>

                {/* ══════════════════════════════════════════
                    TV INSTALLATION
                ══════════════════════════════════════════ */}
                {service === 'tv-installation' && (
                  <>
                    <Divider label={t.sectionService} />

                    {/* Installation type */}
                    <Field>
                      <Label>{t.tvTypeLabel}</Label>
                      <OptionCards>
                        {(Object.keys(tvTypeConfig) as TvType[]).map(type => (
                          <OptionCard key={type}
                            $selected={tvType === type}
                            $accent={tvTypeConfig[type].color}>
                            <input type="radio" name="tvType" value={type}
                              checked={tvType === type}
                              onChange={() => setTvType(type)} />
                            <OptionCardText>
                              <OptionBadge $color={tvTypeConfig[type].color}>
                                {tvTypeConfig[type].badge}
                              </OptionBadge>
                              {t.tvTypes[type].split('–').slice(1).join('–').trim()}
                            </OptionCardText>
                          </OptionCard>
                        ))}
                      </OptionCards>
                    </Field>

                    {/* TV size */}
                    <Field>
                      <Label htmlFor="tvSize">{t.tvSizeLabel}</Label>
                      <Select id="tvSize" value={tvSize} onChange={e => setTvSize(e.target.value)}>
                        {Object.entries(t.tvSizes).map(([val, label]) => (
                          <option key={val} value={val}>{label}</option>
                        ))}
                      </Select>
                    </Field>

                    {/* Wall type */}
                    <Field>
                      <Label htmlFor="wallType">{t.wallTypeLabel}</Label>
                      <Select id="wallType" value={wallType} onChange={e => setWallType(e.target.value)}>
                        {Object.entries(t.wallTypes).map(([val, label]) => (
                          <option key={val} value={val}>{label}</option>
                        ))}
                      </Select>
                    </Field>

                    {/* Devices */}
                    <Field>
                      <Label htmlFor="numDevices">{t.devicesLabel}</Label>
                      <Select id="numDevices" value={numDevices} onChange={e => setNumDevices(e.target.value)}>
                        {['1','2','3','4','5','6+'].map(n => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </Select>
                    </Field>

                    {/* ── Wall Dimensions ── */}
                    <Divider label={t.sectionWall} />

                    <Field>
                      <Label>{t.wallDimsLabel}</Label>
                      <HintText>{t.wallDimsNote}</HintText>
                      <DimRow>
                        <DimField>
                          <label htmlFor="wallWidth">{t.wallWidthLabel}</label>
                          <Input id="wallWidth" type="number"
                            min="1" max="100" step="0.1"
                            value={wallWidth}
                            placeholder={t.wallWidthPlaceholder}
                            onChange={e => setWallWidth(e.target.value)} />
                        </DimField>
                        <DimField>
                          <label htmlFor="wallHeight">{t.wallHeightLabel}</label>
                          <Input id="wallHeight" type="number"
                            min="1" max="30" step="0.1"
                            value={wallHeight}
                            placeholder={t.wallHeightPlaceholder}
                            onChange={e => setWallHeight(e.target.value)} />
                        </DimField>
                      </DimRow>
                      {wallArea !== null && wallArea > 0 && (
                        <AreaBadge>
                          📐 {t.sqftLabel}: <strong>{wallArea} sq ft</strong>
                        </AreaBadge>
                      )}
                    </Field>

                    {/* ── Premium Add-ons ── */}
                    <Divider label={t.sectionAddons} />

                    <Field>
                      <Label>{t.addonsLabel}</Label>
                      <HintText>{t.addonsNote}</HintText>
                      <AddonGrid>
                        {(Object.keys(addons) as Array<keyof TvAddons>).map(key => (
                          <AddonCard key={key} $selected={addons[key]}>
                            <input type="checkbox"
                              checked={addons[key]}
                              onChange={() => toggleAddon(key)} />
                            <AddonContent>
                              <AddonTitle>
                                {ADDON_ICONS[key]} {t.addonLabels[key]}
                                <AddonPriceTag>{t.addonPriceHints[key]}</AddonPriceTag>
                              </AddonTitle>
                              <AddonDesc>{t.addonDescs[key]}</AddonDesc>
                            </AddonContent>
                          </AddonCard>
                        ))}
                      </AddonGrid>
                    </Field>
                  </>
                )}

                {/* ══════════════════════════════════════════
                    PAINTING
                ══════════════════════════════════════════ */}
                {service === 'painting' && (
                  <>
                    <Divider label={t.sectionService} />

                    <Field>
                      <Label htmlFor="numRooms">{t.roomsLabel}</Label>
                      <Select id="numRooms" value={numRooms} onChange={e => setNumRooms(e.target.value)}>
                        {['1','2','3','4','5','6','7','8+'].map(n => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </Select>
                    </Field>

                    <Field>
                      <Label htmlFor="roomSize">{t.roomSizeLabel}</Label>
                      <Select id="roomSize" value={roomSize} onChange={e => setRoomSize(e.target.value)}>
                        {Object.entries(t.roomSizes).map(([val, label]) => (
                          <option key={val} value={val}>{label}</option>
                        ))}
                      </Select>
                    </Field>

                    <Field>
                      <Label htmlFor="wallCondition">{t.wallConditionLabel}</Label>
                      <Select id="wallCondition" value={wallCondition} onChange={e => setWallCondition(e.target.value)}>
                        {Object.entries(t.wallConditions).map(([val, label]) => (
                          <option key={val} value={val}>{label}</option>
                        ))}
                      </Select>
                    </Field>

                    <Field>
                      <Label>{t.paintGradeLabel}</Label>
                      <OptionCards>
                        {(Object.keys(t.paintGrades) as Array<keyof typeof t.paintGrades>).map(grade => (
                          <OptionCard key={grade} $selected={paintGrade === grade} $accent="#10b981">
                            <input type="radio" name="paintGrade" value={grade}
                              checked={paintGrade === grade}
                              onChange={() => setPaintGrade(grade)} />
                            <OptionCardText>{t.paintGrades[grade]}</OptionCardText>
                          </OptionCard>
                        ))}
                      </OptionCards>
                    </Field>

                    <Field>
                      <Label>{t.includeCeilingsLabel}</Label>
                      <ToggleRow>
                        <ToggleOption $selected={includeCeilings}>
                          <input type="radio" name="ceilings"
                            checked={includeCeilings} onChange={() => setIncludeCeilings(true)} />
                          ✓ {t.includeCeilingsYes}
                        </ToggleOption>
                        <ToggleOption $selected={!includeCeilings}>
                          <input type="radio" name="ceilings"
                            checked={!includeCeilings} onChange={() => setIncludeCeilings(false)} />
                          {t.includeCeilingsNo}
                        </ToggleOption>
                      </ToggleRow>
                    </Field>
                  </>
                )}

                {status === 'error' && <ErrorBanner>{t.errorMsg}</ErrorBanner>}

                {service && (
                  <SubmitButton type="submit" disabled={status === 'submitting'}>
                    {status === 'submitting' ? t.buttonSending : t.buttonSubmit}
                  </SubmitButton>
                )}
              </FieldGroup>
            </form>
          )}
        </CardBody>
      </Card>
    </PageWrapper>
  );
}