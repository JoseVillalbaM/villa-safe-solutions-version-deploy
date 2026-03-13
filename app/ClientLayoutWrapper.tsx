"use client";

import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase"; // Asegúrate de que esta ruta sea correcta
import { User } from '@/types/user'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
// Asumiendo rutas basadas en tu captura, ajusta si es necesario
import { ThemeProviderComponent } from "@/contexts/ThemeContext";
import{GlobalStyles} from './globalsStyled'; // O donde tengas tus GlobalStyles

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  // 1. ESTADO DEL USUARIO (Aquí es donde debe vivir)
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // Opcional: para evitar parpadeos

  // 2. EFECTO PARA ESCUCHAR LA SESIÓN
  useEffect(() => {
    // Esta función de Firebase se dispara automáticamente cuando te logueas o deslogueas
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // Transformamos el usuario de Firebase a TU tipo de usuario
        const appUser: User = {
          id: firebaseUser.uid,
          name: firebaseUser.displayName || "",
          email: firebaseUser.email || "",
          // Si tu tipo User tiene más campos obligatorios, añádelos aquí
        };
        setUser(appUser);
      } else {
        // Si no hay usuario en Firebase, ponemos null
        setUser(null);
      }
      setLoading(false);
    });

    // Limpiamos el observador cuando el componente se desmonta
    return () => unsubscribe();
  }, []);

  return (
    <LanguageProvider>
      <ThemeProviderComponent>
        {/* Estilos globales */}
        <GlobalStyles />

        
        <Header user={user} />

        <main style={{ flexGrow: 1, minHeight: "80vh" }}>
          {children}
        </main>

        <Footer />
      </ThemeProviderComponent>
    </LanguageProvider>
  );
}