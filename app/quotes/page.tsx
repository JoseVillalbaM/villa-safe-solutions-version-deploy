'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Nota: Se utiliza styled-components para mantener la coherencia con el diseño
 * de tu aplicación local. Se integra el useLanguage para el soporte multi-idioma.
 * Se ha oscurecido el encabezado y ampliado el tamaño del selector según lo solicitado.
 */

// --- Diccionario de Traducciones Locales (Sincronizado con LanguageContext) ---
const translations = {
  es: {
    quotes: {
      title: "Solicitar una Cotización",
      subtitle: "Describe tu proyecto y te brindaremos un presupuesto personalizado.",
      nameLabel: "Nombre Completo",
      emailLabel: "Correo Electrónico",
      serviceLabel: "Servicio de Interés",
      detailsLabel: "Detalles del Proyecto",
      placeholderName: "Tu nombre completo",
      placeholderEmail: "tu@email.com",
      placeholderService: "Selecciona un servicio...",
      placeholderDetails: "Ej: Necesito pintar una sala de 20m2, techos altos, color blanco...",
      buttonSubmit: "Enviar Solicitud",
      buttonSending: "Procesando...",
      successTitle: "¡Solicitud Enviada!",
      successMessage: "Hemos recibido tu solicitud. Un especialista de Villa Safe Solutions te contactará pronto.",
      buttonAnother: "Solicitar otra cotización",
      errorMsg: "⚠️ Ocurrió un error. Por favor intenta de nuevo."
    },
    servicesList: [
      { id: 'furniture-tv', name: "Muebles de TV" },
      { id: 'painting', name: "Pintura" },
      { id: 'flooring', name: "Pisos" },
      { id: 'cleaning', name: "Limpieza" },
      { id: 'general-work', name: "Trabajos Generales" },
      { id: 'other', name: "Otro / Consulta" }
    ]
  },
  en: {
    quotes: {
      title: "Request a Quote",
      subtitle: "Describe your project and we'll provide a personalized estimate.",
      nameLabel: "Full Name",
      emailLabel: "Email Address",
      serviceLabel: "Service of Interest",
      detailsLabel: "Project Details",
      placeholderName: "Your full name",
      placeholderEmail: "you@email.com",
      placeholderService: "Select a service...",
      placeholderDetails: "Ex: I need to paint a 20m2 room, high ceilings, premium white...",
      buttonSubmit: "Send Request",
      buttonSending: "Processing...",
      successTitle: "Request Sent!",
      successMessage: "We have received your request. A Villa Safe Solutions specialist will contact you soon.",
      buttonAnother: "Request another quote",
      errorMsg: "⚠️ An error occurred. Please try again."
    },
    servicesList: [
      { id: 'furniture-tv', name: "TV Furniture" },
      { id: 'painting', name: "Painting" },
      { id: 'flooring', name: "Flooring" },
      { id: 'cleaning', name: "Cleaning" },
      { id: 'general-work', name: "General Work" },
      { id: 'other', name: "Other / Inquiry" }
    ]
  }
};

// --- Componentes Estilizados (Styled Components) ---

const QuotesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 90vh;
  padding: 4rem 1.5rem;
  background-color: ${({ theme }) => theme?.colors?.secondaryBg || '#f1f5f9'};
`;

const CardStyled = styled.div`
  background: ${({ theme }) => theme?.colors?.bg || '#ffffff'};
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme?.colors?.borders?.secondary || '#e2e8f0'};
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  width: 100%;
  max-width: 600px;
`;

const CardHeaderStyled = styled.div`
  padding: 3.5rem 2rem 2.5rem;
  background: #0f172a; // Fondo oscuro Slate 900 original
  color: white;
  text-align: center;
  border-bottom: 5px solid ${({ theme }) => theme?.colors?.palette?.skyBlue || '#38bdf8'};
`;

const CardTitleStyled = styled.h2`
  margin: 0;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.5px;
`;

const CardContentStyled = styled.div`
  padding: 3rem 2.5rem;
`;

const FormGrid = styled.div`
  display: grid;
  gap: 1.75rem;
`;

const LabelStyled = styled.label`
  display: block;
  margin-bottom: 0.65rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme?.colors?.textPrimary || '#334155'};
`;

const InputStyled = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme?.colors?.borders?.primary || '#cbd5e1'};
  background: ${({ theme }) => theme?.colors?.bg || '#ffffff'};
  color: ${({ theme }) => theme?.colors?.textPrimary || '#0f172a'};
  font-size: 1rem;
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme?.colors?.primary || '#1e3a8a'};
    box-shadow: 0 0 0 4px rgba(30, 58, 138, 0.1);
  }
`;

const SelectStyled = styled.select`
  width: 100%;
  padding: 1.1rem; // Selector más grande solicitado
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme?.colors?.borders?.primary || '#cbd5e1'};
  background: ${({ theme }) => theme?.colors?.bg || '#ffffff'};
  color: ${({ theme }) => theme?.colors?.textPrimary || '#0f172a'};
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1.2rem center;
  background-size: 1.2rem;
  transition: all 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme?.colors?.primary || '#1e3a8a'};
    box-shadow: 0 0 0 4px rgba(30, 58, 138, 0.1);
  }
`;

const TextAreaStyled = styled.textarea`
  width: 100%;
  padding: 1.1rem;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme?.colors?.borders?.primary || '#cbd5e1'};
  background: transparent;
  color: ${({ theme }) => theme?.colors?.textPrimary || '#0f172a'};
  font-size: 1rem;
  line-height: 1.6;
  min-height: 160px;
  outline: none;
  resize: vertical;
  transition: all 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme?.colors?.primary || '#1e3a8a'};
    box-shadow: 0 0 0 4px rgba(30, 58, 138, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const ButtonStyled = styled.button<{ $primary?: boolean }>`
  background: ${({ $primary, theme }) => $primary 
    ? `linear-gradient(135deg, ${theme?.colors?.palette?.skyBlue || '#38bdf8'}, ${theme?.colors?.palette?.emeraldGreen || '#10b981'})` 
    : 'transparent'};
  color: white;
  border: none;
  padding: 1.2rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  &:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    filter: brightness(1.1);
  }

  &:active {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessOverlay = styled.div`
  text-align: center;
  padding: 1rem 0;

  span {
    font-size: 5rem;
    display: block;
    margin-bottom: 2rem;
  }

  p {
    color: ${({ theme }) => theme?.colors?.textSecondary || '#64748b'};
    font-size: 1.15rem;
    line-height: 1.8;
    margin-bottom: 2.5rem;
  }
`;

const ErrorMsg = styled.p`
  background: #fee2e2;
  color: #b91c1c;
  padding: 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid #fecaca;
`;

// --- Componente de Página ---

export default function QuotesPage() {
  const { language } = useLanguage();
  const currentLang = (language === 'es' || language === 'en') ? language : 'es';
  const t = translations[currentLang];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    details: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/send-booking-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName: formData.name,
          clientEmail: formData.email,
          service: formData.service,
          details: formData.details,
          type: 'Solicitud de Cotización'
        }),
      });

      if (!response.ok) throw new Error('API Error');

      setStatus('success');
      setFormData({ name: '', email: '', service: '', details: '' });
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <QuotesContainer>
      <CardStyled>
        <CardHeaderStyled>
          <CardTitleStyled>
            {status === 'success' ? t.quotes.successTitle : t.quotes.title}
          </CardTitleStyled>
          {status !== 'success' && (
            <p style={{ marginTop: '1rem', opacity: 0.9, fontSize: '0.95rem' }}>
              {t.quotes.subtitle}
            </p>
          )}
        </CardHeaderStyled>

        <CardContentStyled>
          {status === 'success' ? (
            <SuccessOverlay>
              <span>📩</span>
              <p>{t.quotes.successMessage}</p>
              <ButtonStyled $primary onClick={() => setStatus('idle')}>
                {t.quotes.buttonAnother}
              </ButtonStyled>
            </SuccessOverlay>
          ) : (
            <form onSubmit={handleSubmit}>
              <FormGrid>
                <div>
                  <LabelStyled htmlFor="name">{t.quotes.nameLabel}</LabelStyled>
                  <InputStyled
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder={t.quotes.placeholderName}
                  />
                </div>

                <div>
                  <LabelStyled htmlFor="email">{t.quotes.emailLabel}</LabelStyled>
                  <InputStyled
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder={t.quotes.placeholderEmail}
                  />
                </div>

                <div>
                  <LabelStyled htmlFor="service">{t.quotes.serviceLabel}</LabelStyled>
                  <SelectStyled
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="">{t.quotes.placeholderService}</option>
                    {t.servicesList.map(s => (
                      <option key={s.id} value={s.name}>{s.name}</option>
                    ))}
                  </SelectStyled>
                </div>

                <div>
                  <LabelStyled htmlFor="details">{t.quotes.detailsLabel}</LabelStyled>
                  <TextAreaStyled
                    id="details"
                    required
                    value={formData.details}
                    onChange={(e) => setFormData({...formData, details: e.target.value})}
                    placeholder={t.quotes.placeholderDetails}
                  />
                </div>

                {status === 'error' && <ErrorMsg>{t.quotes.errorMsg}</ErrorMsg>}

                <ButtonStyled 
                  type="submit" 
                  $primary 
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? t.quotes.buttonSending : t.quotes.buttonSubmit}
                </ButtonStyled>
              </FormGrid>
            </form>
          )}
        </CardContentStyled>
      </CardStyled>
    </QuotesContainer>
  );
}