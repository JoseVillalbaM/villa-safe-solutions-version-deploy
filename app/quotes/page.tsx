

'use client';

import { useState } from 'react';
import styled from 'styled-components';

// Importar los componentes de UI que ya creamos
import {ButtonStyled} from '@/components/ui/ButtonStyled';
import InputStyled from '@/components/ui/InputStyled';
import LabelStyled from '@/components/ui/LabelStyled';
import { 
  CardStyled, 
  CardHeaderStyled, 
  CardTitleStyled, 
  CardContentStyled, 
  CardFooterStyled 
} from '@/components/ui/CardStyled';

// --- Estilos locales para esta página ---
const QuotesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start; // Alinea arriba
  min-height: 80vh;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.secondaryBg}; // Un fondo suave
`;

const FormGrid = styled.div`
  display: grid;
  gap: 1rem;
`;

const TextAreaStyled = styled.textarea`
  display: flex;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.borders};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.375rem;
  min-height: 100px;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    border-color: #2563EB; // blue-600
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
  }

  &::placeholder {
    color: #9CA3AF; // gray-400
  }
`;

// --- Componente de Página de Cotizaciones ---
export default function QuotesPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría tu lógica para enviar la cotización (ej. a Firebase)
    console.log({ name, email, service, details });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <QuotesContainer>
        <CardStyled style={{ width: '100%', maxWidth: '500px' }}>
          <CardHeaderStyled>
            <CardTitleStyled>¡Gracias!</CardTitleStyled>
          </CardHeaderStyled>
          <CardContentStyled>
            <p>Hemos recibido tu solicitud de cotización. Te contactaremos pronto.</p>
            <ButtonStyled $primary style={{marginTop: '1rem'}} onClick={() => setSubmitted(false)}>
              Solicitar otra cotización
            </ButtonStyled>
          </CardContentStyled>
        </CardStyled>
      </QuotesContainer>
    );
  }

  return (
    <QuotesContainer>
      <CardStyled style={{ width: '100%', maxWidth: '500px' }}>
        <CardHeaderStyled>
          <CardTitleStyled>Solicitar una Cotización</CardTitleStyled>
        </CardHeaderStyled>
        <CardContentStyled>
          <form onSubmit={handleSubmit}>
            <FormGrid>
              <div>
                <LabelStyled htmlFor="name">Nombre</LabelStyled>
                <InputStyled
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <LabelStyled htmlFor="email">Email</LabelStyled>
                <InputStyled
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div>
                <LabelStyled htmlFor="service">Servicio de Interés</LabelStyled>
                {/* Aquí podrías usar un <select> estilizado, 
                  pero un Input es más simple por ahora. 
                */}
                <InputStyled
                  id="service"
                  type="text"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  placeholder="Ej: Pintura, Limpieza..."
                  required
                />
              </div>
              <div>
                <LabelStyled htmlFor="details">Detalles del Proyecto</LabelStyled>
                <TextAreaStyled
                  id="details"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Describe lo que necesitas..."
                  required
                />
              </div>
              <ButtonStyled type="submit" $primary style={{ width: '100%', marginTop: '1rem' }}>
                Enviar Solicitud
              </ButtonStyled>
            </FormGrid>
          </form>
        </CardContentStyled>
      </CardStyled>
    </QuotesContainer>
  );
}

