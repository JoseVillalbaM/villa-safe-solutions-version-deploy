import { AuthProvider } from '@/contexts/Auth.Context';
import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyles } from '@/app/globalsStyled';
import ClientLayoutWrapper from '@/app/ClientLayoutWrapper';

// Metadatos (puedes personalizarlos)
export const metadata: Metadata = {
  title: 'Villa Safe Solutions Pro',
  description: 'Professional Services',
  icons: {
  icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
 },
};

// Este es el Root Layout, es un Componente de Servidor
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {/* ClientLayoutWrapper contiene ahora la lógica de tu App.tsx */}

           <AuthProvider>
            <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
          </AuthProvider>
          
          
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

