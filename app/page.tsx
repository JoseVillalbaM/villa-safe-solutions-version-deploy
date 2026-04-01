'use client'; 

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import { ArrowRight, Star, MessageSquare, LogIn, X, Loader2, Trash2 } from 'lucide-react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth, db, storage } from '@/lib/firebase';
import { 
  collection, addDoc, deleteDoc, 
  doc, query, orderBy, onSnapshot 
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { ButtonStyled } from '@/components/ui/ButtonStyled';
import { useLanguage } from '@/contexts/LanguageContext';
import SliderGallery from '@/components/SliderGallery';

// ─── Admin ────────────────────────────────────────────────────────────────────
const ADMIN_EMAIL = 'info@villasafesolutions.com';

// ─── Animaciones ──────────────────────────────────────────────────────────────
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// ─── Tipos ────────────────────────────────────────────────────────────────────
interface Review {
  id: string;
  userName: string;
  userEmail: string;
  rating: number;
  comment: string;
  date: string;
  userPhoto?: string;
  images?: string[];
}

// ─── Estilos ──────────────────────────────────────────────────────────────────
const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bg};
`;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.bg};

  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`;

const HeroContainer = styled(SectionContainer)`
  background-image: linear-gradient(rgba(0,0,0,0.35),rgba(0,0,0,0.65)), url('/assets/ai-images/logo-villa-safe.JPG');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 60vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 20rem;
  line-height: 1.0;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.palette.skyBlue},
    ${({ theme }) => theme.colors.palette.emeraldGreen},
    ${({ theme }) => theme.colors.palette.sunYellow}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 20px ${({ theme }) => theme.colors.palette.skyBlue}40);

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.125rem;
  color: white;
  margin-top: 1.5rem;
  max-width: 600px;
  line-height: 1.6;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2.5rem;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.palette.skyBlue},
    ${({ theme }) => theme.colors.palette.emeraldGreen}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto 3rem auto;
  line-height: 1.6;
`;

const ServicesSection = styled(SectionContainer)`
  background-color: ${({ theme }) => theme.colors.secondaryBg};
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: start;
  margin-top: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactInfo = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: 1rem;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.palette.skyBlue},
      ${({ theme }) => theme.colors.palette.emeraldGreen}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  p {
    font-size: 1rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 1rem;
  }
`;

const BusinessCardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.secondaryBg}80,
    ${({ theme }) => theme.colors.secondaryBg}40
  );
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.borders.primary}30;
  box-shadow:
    0 8px 32px rgba(59, 130, 246, 0.15),
    0 0 40px ${({ theme }) => theme.colors.palette.skyBlue}20,
    inset 0 1px 1px ${({ theme }) => theme.colors.palette.skyBlue}20;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow:
      0 12px 48px rgba(59, 130, 246, 0.25),
      0 0 60px ${({ theme }) => theme.colors.palette.skyBlue}30,
      inset 0 1px 1px ${({ theme }) => theme.colors.palette.skyBlue}30;
  }
`;

const BusinessCardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin: 0;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.palette.skyBlue},
    ${({ theme }) => theme.colors.palette.emeraldGreen},
    ${({ theme }) => theme.colors.palette.sunYellow}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 10px ${({ theme }) => theme.colors.palette.skyBlue}30);
`;

const BusinessCardImageContainer = styled.div`
  width: 100%;
  max-width: 400px;
  aspect-ratio: 16 / 9;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  border: 2px solid transparent;
  background: linear-gradient(
      ${({ theme }) => theme.colors.secondaryBg},
      ${({ theme }) => theme.colors.secondaryBg}
    ) padding-box,
    linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.palette.skyBlue},
      ${({ theme }) => theme.colors.palette.emeraldGreen},
      ${({ theme }) => theme.colors.palette.sunYellow}
    ) border-box;
  box-shadow:
    0 4px 20px rgba(59, 130, 246, 0.2),
    0 0 30px ${({ theme }) => theme.colors.palette.skyBlue}15;

  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    display: block;
  }

  &:hover img, &:hover video {
    transform: scale(1.05);
  }
`;

const OpenCardButton = styled.button`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.palette.deepBlue} 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: ${({ theme }) => theme.colors.glowShadows.blue};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(59, 130, 246, 0.4);
  }
  &:active {
    transform: translateY(0);
  }
`;

// ─── Reviews ──────────────────────────────────────────────────────────────────
const ReviewsSection = styled(SectionContainer)`
  background-color: ${({ theme }) => theme.colors.secondaryBg};
`;

const ReviewsContainer = styled.div`
  max-height: 600px;
  overflow-y: auto;
  padding-right: 0.5rem;
  margin-top: 2rem;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.secondaryBg};
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    
    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
    }
  }
  
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.primary} ${({ theme }) => theme.colors.secondaryBg};
`;

const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ReviewCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid transparent;
  background-origin: border-box;
  background-clip: padding-box, border-box;
  background-image:
    linear-gradient(
      ${({ theme }) => theme.colors.bg},
      ${({ theme }) => theme.colors.bg}
    ),
    linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.palette.skyBlue}40,
      ${({ theme }) => theme.colors.palette.emeraldGreen}40
    );
  box-shadow:
    0 8px 32px rgba(59, 130, 246, 0.1),
    0 0 40px ${({ theme }) => theme.colors.palette.skyBlue}10,
    inset 0 1px 1px ${({ theme }) => theme.colors.palette.skyBlue}10;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow:
      0 12px 48px rgba(59, 130, 246, 0.2),
      0 0 60px ${({ theme }) => theme.colors.palette.skyBlue}20,
      inset 0 1px 1px ${({ theme }) => theme.colors.palette.skyBlue}20;
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const UserAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.palette.skyBlue},
    ${({ theme }) => theme.colors.palette.emeraldGreen}
  );
  box-shadow:
    0 4px 15px ${({ theme }) => theme.colors.palette.skyBlue}30,
    0 0 20px ${({ theme }) => theme.colors.palette.skyBlue}20;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 600;
  font-size: 1.25rem;
`;

const UserInfo = styled.div`
  flex: 1;
`;

const UserName = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
`;

const ReviewDate = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const RatingContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  margin: 0.5rem 0;
`;

const StarIcon = styled(Star)<{ $filled: boolean }>`
  width: 18px;
  height: 18px;
  fill: ${({ $filled, theme }) =>
    $filled ? theme.colors.palette.sunYellow : 'transparent'};
  stroke: ${({ theme }) => theme.colors.palette.sunYellow};
  filter: ${({ $filled }) =>
    $filled ? 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.4))' : 'none'};
`;

const ReviewComment = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;

const ReviewImagesContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`;

const ReviewImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.colors.borders.secondary};
  
  &:hover {
    transform: scale(1.05);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const DeleteButton = styled.button`
  align-self: flex-end;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.palette.skyBlue}40;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 0.35rem 0.75rem;
  border-radius: 8px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:hover {
    background: rgba(239, 68, 68, 0.15);
    border-color: #ef4444;
    color: #ef4444;
  }
`;

const ReviewFormContainer = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  border-radius: 20px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.bg}80,
    ${({ theme }) => theme.colors.bg}40
  );
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.borders.primary}30;
  box-shadow:
    0 8px 32px rgba(59, 130, 246, 0.15),
    0 0 40px ${({ theme }) => theme.colors.palette.skyBlue}20;
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.palette.skyBlue},
    ${({ theme }) => theme.colors.palette.emeraldGreen}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Input = styled.input`
  padding: 0.875rem 1rem;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.borders.secondary};
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.palette.skyBlue};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.palette.skyBlue}20;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TextArea = styled.textarea`
  padding: 0.875rem 1rem;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.borders.secondary};
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
    opacity: 1;
  }
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.palette.skyBlue};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.palette.skyBlue}20;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const RatingSelector = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const FileInput = styled.input`
  padding: 0.875rem;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.borders.secondary};
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.9rem;
  cursor: pointer;
  
  &::file-selector-button {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    margin-right: 1rem;
    transition: all 0.3s ease;
    
    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
    }
  }
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    
    &::file-selector-button {
      padding: 0.4rem 0.8rem;
      font-size: 0.8rem;
    }
  }
`;

const ImagesPreviewContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const PreviewImage = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

const RemoveImageButton = styled.button`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ef4444;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
    background: #dc2626;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  svg {
    width: 48px;
    height: 48px;
    margin: 0 auto 1rem;
    opacity: 0.5;
  }
`;

const LoginRequiredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 3rem 2rem;
  text-align: center;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.bg}60,
    ${({ theme }) => theme.colors.bg}30
  );
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.borders.primary}30;
  box-shadow:
    0 8px 32px rgba(59, 130, 246, 0.15),
    0 0 40px ${({ theme }) => theme.colors.palette.skyBlue}20;
`;

const LoginIcon = styled(LogIn)`
  width: 64px;
  height: 64px;
  color: ${({ theme }) => theme.colors.palette.skyBlue};
  filter: drop-shadow(0 0 20px ${({ theme }) => theme.colors.palette.skyBlue}40);
`;

const LoginMessage = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 500px;
  line-height: 1.6;
`;

const ImageModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
`;

const ModalImage = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
`;

const UploadProgressContainer = styled.div`
  margin-top: 0.5rem;
`;

const ProgressBar = styled.div`
  height: 4px;
  background: #333;
  border-radius: 2px;
  overflow: hidden;
`;

const ProgressFill = styled.div<{ $width: number }>`
  width: ${({ $width }) => $width}%;
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
  transition: width 0.3s ease;
`;

const ProgressText = styled.p`
  font-size: 0.75rem;
  margin-top: 0.25rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const SpinnerIcon = styled(Loader2)`
  animation: ${spin} 1s linear infinite;
  margin-right: 8px;
`;

const SelectedImagesInfo = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 0.5rem;
`;

// ─── Componente Principal ─────────────────────────────────────────────────────
export default function HomePage() {
  const [user, setUser] = useState<User | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '', images: [] as File[] });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [uploadingImages, setUploadingImages] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { t, language } = useLanguage();

  // Auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Reseñas en tiempo real desde Firestore
  useEffect(() => {
    const q = query(collection(db, 'reviews'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data()
      })) as Review[];
      setReviews(data);
    });
    return () => unsubscribe();
  }, []);

  // Función para mostrar alertas traducidas
  const showAlert = (messageKey: string, isError: boolean = false) => {
    const message = t(messageKey as any);
    if (isError) {
      alert(message);
    } else {
      alert(message);
    }
  };

  // Función para subir imágenes a Firebase Storage
  const uploadImages = async (files: File[]): Promise<string[]> => {
    const uploadedUrls: string[] = [];
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      try {
        if (!user?.uid) {
          throw new Error('Usuario no autenticado');
        }
        
        const timestamp = Date.now();
        const randomString = Math.random().toString(36).substring(2, 15);
        const safeFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
        const filePath = `reviews/${user.uid}/${timestamp}_${randomString}_${safeFileName}`;
        
        const storageRef = ref(storage, filePath);
        const snapshot = await uploadBytes(storageRef, file);
        const downloadUrl = await getDownloadURL(snapshot.ref);
        uploadedUrls.push(downloadUrl);
        
        setUploadProgress(((i + 1) / files.length) * 100);
      } catch (error) {
        console.error('Error uploading image:', error);
        throw new Error(`Error al subir la imagen ${file.name}`);
      }
    }
    
    return uploadedUrls;
  };

  // Enviar reseña
  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      showAlert('home.reviews.loginRequired', true);
      return;
    }
    if (!newReview.comment.trim()) {
      alert(language === 'es' ? 'Por favor completa el comentario' : 'Please complete the comment');
      return;
    }
    
    try {
      setUploadingImages(true);
      setUploadProgress(0);
      
      let imageUrls: string[] = [];
      if (newReview.images.length > 0) {
        imageUrls = await uploadImages(newReview.images);
      }

      await addDoc(collection(db, 'reviews'), {
        userName: user.displayName || user.email?.split('@')[0] || (language === 'es' ? 'Usuario' : 'User'),
        userEmail: user.email || '',
        rating: newReview.rating,
        comment: newReview.comment,
        date: new Date().toLocaleDateString(
          language === 'es' ? 'es-ES' : 'en-US',
          { year: 'numeric', month: 'long', day: 'numeric' }
        ),
        userPhoto: user.photoURL || null,
        createdAt: new Date(),
        images: imageUrls,
      });
      
      setNewReview({ rating: 5, comment: '', images: [] });
      showAlert('home.reviews.successMessage', false);
    } catch (error) {
      console.error('Error al guardar reseña:', error);
      showAlert('home.reviews.errorMessage', true);
    } finally {
      setUploadingImages(false);
      setUploadProgress(0);
    }
  };

  // Manejar selección de imágenes desde el dispositivo
  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const maxSize = 5 * 1024 * 1024;
    const validFiles = files.filter(file => file.size <= maxSize);
    
    if (validFiles.length !== files.length) {
      showAlert('home.reviews.maxSizeAlert', true);
    }
    
    if (newReview.images.length + validFiles.length > 5) {
      showAlert('home.reviews.maxImagesAlert', true);
      return;
    }
    
    setNewReview({ ...newReview, images: [...newReview.images, ...validFiles] });
  };

  // Eliminar imagen de la lista antes de subir
  const removeImage = (index: number) => {
    const newImages = [...newReview.images];
    newImages.splice(index, 1);
    setNewReview({ ...newReview, images: newImages });
  };

  // Eliminar reseña completa
  const handleDeleteReview = async (reviewId: string, imageUrls?: string[]) => {
    const confirmed = confirm(t('home.reviews.deleteConfirm'));
    if (!confirmed) return;

    try {
      if (imageUrls && imageUrls.length > 0) {
        for (const url of imageUrls) {
          try {
            const decodedUrl = decodeURIComponent(url);
            const pathMatch = decodedUrl.match(/\/o\/(.+?)\?/);
            if (pathMatch && pathMatch[1]) {
              const filePath = pathMatch[1];
              const fileRef = ref(storage, filePath);
              await deleteObject(fileRef);
            }
          } catch (error) {
            console.error('Error deleting image:', error);
          }
        }
      }
      
      await deleteDoc(doc(db, 'reviews', reviewId));
      showAlert('home.reviews.deleteSuccess', false);
    } catch (error) {
      console.error('Error al eliminar reseña:', error);
      alert(language === 'es' ? 'No se pudo eliminar la reseña.' : 'Could not delete review.');
    }
  };

  const allReviews = reviews;

  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroContainer>
        <HeroTitle>{t('home.hero.title')}</HeroTitle>
        <HeroSubtitle>{t('home.hero.subtitle')}</HeroSubtitle>
        <ButtonRow>
          <Link href={user ? '/quotes' : '/login'}>
            <ButtonStyled $primary>
              {t('home.hero.quoteButton')}
              <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </ButtonStyled>
          </Link>
          <Link href="/contact">
            <ButtonStyled>{t('home.hero.contactButton')}</ButtonStyled>
          </Link>
        </ButtonRow>
      </HeroContainer>

      {/* Services Section */}
      <ServicesSection>
        <SectionTitle>{t('home.services.title')}</SectionTitle>
        <SectionSubtitle>{t('home.services.subtitle')}</SectionSubtitle>
        <SliderGallery />
      </ServicesSection>

      {/* Contact Section */}
      <SectionContainer>
        <SectionTitle>{t('home.contact.title')}</SectionTitle>
        <SectionSubtitle>{t('home.contact.subtitle')}</SectionSubtitle>
        <ContactGrid>
          <ContactInfo>
            <h3>{t('home.contact.qualityTitle')}</h3>
            <p>{t('home.contact.description')}</p>
            <p>{t('home.contact.contactText')}</p>
            <Link href="/contact" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
              <ButtonStyled $primary>{t('home.contact.formButton')}</ButtonStyled>
            </Link>
          </ContactInfo>

          <BusinessCardSection>
            <BusinessCardTitle>{t('home.contact.businessCardTitle')}</BusinessCardTitle>
            <BusinessCardImageContainer>
              <video autoPlay loop muted playsInline width="100%" height="100%">
                <source src="/assets/videos/intro-card.mp4" type="video/mp4" />
              </video>
            </BusinessCardImageContainer>
            <Link href="/digital-card">
              <OpenCardButton>{t('home.hero.digitalCardButton')}</OpenCardButton>
            </Link>
          </BusinessCardSection>
        </ContactGrid>
      </SectionContainer>

      {/* Reviews Section */}
      <ReviewsSection>
        <SectionTitle>{t('home.reviews.title')}</SectionTitle>
        <SectionSubtitle>{t('home.reviews.subtitle')}</SectionSubtitle>

        <ReviewsContainer>
          {allReviews.length > 0 ? (
            <ReviewsGrid>
              {allReviews.map((review) => (
                <ReviewCard key={review.id}>
                  <ReviewHeader>
                    <UserAvatar>
                      {review.userName.charAt(0).toUpperCase()}
                    </UserAvatar>
                    <UserInfo>
                      <UserName>{review.userName}</UserName>
                      <ReviewDate>{review.date}</ReviewDate>
                    </UserInfo>
                  </ReviewHeader>

                  <RatingContainer>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} $filled={star <= review.rating} />
                    ))}
                  </RatingContainer>

                  <ReviewComment>{review.comment}</ReviewComment>

                  {review.images && review.images.length > 0 && (
                    <ReviewImagesContainer>
                      {review.images.map((img, idx) => (
                        <ReviewImage
                          key={idx}
                          src={img}
                          alt={`Review image ${idx + 1}`}
                          onClick={() => setSelectedImage(img)}
                          onError={(e) => {
                            console.error('Error loading image:', img);
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      ))}
                    </ReviewImagesContainer>
                  )}

                  {user &&
                    (user.email === ADMIN_EMAIL || user.email === review.userEmail) && (
                      <DeleteButton onClick={() => handleDeleteReview(review.id, review.images)}>
                        <Trash2 size={14} />
                        {language === 'es' ? 'Eliminar reseña' : 'Delete review'}
                      </DeleteButton>
                    )}
                </ReviewCard>
              ))}
            </ReviewsGrid>
          ) : (
            <EmptyState>
              <MessageSquare />
              <p>{t('home.reviews.emptyState')}</p>
            </EmptyState>
          )}
        </ReviewsContainer>

        <ReviewFormContainer>
          <FormTitle>{t('home.reviews.formTitle')}</FormTitle>

          {user ? (
            <Form onSubmit={handleSubmitReview}>
              <FormGroup>
                <Label>{t('home.reviews.nameLabel')}</Label>
                <Input
                  type="text"
                  value={user.displayName || user.email || ''}
                  disabled
                />
              </FormGroup>

              <FormGroup>
                <Label>{t('home.reviews.ratingLabel')}</Label>
                <RatingSelector>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      $filled={star <= newReview.rating}
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      style={{ cursor: 'pointer' }}
                    />
                  ))}
                </RatingSelector>
              </FormGroup>

              <FormGroup>
                <Label>{t('home.reviews.commentLabel')}</Label>
                <TextArea
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  placeholder={t('home.reviews.commentPlaceholder')}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>{t('home.reviews.uploadLabel')}</Label>
                <FileInput
                  type="file"
                  accept="image/jpeg, image/png, image/jpg, image/webp"
                  multiple
                  onChange={handleImageSelect}
                  disabled={uploadingImages}
                />
                <p style={{ fontSize: '0.75rem', color: '#888', marginTop: '0.25rem' }}>
                  {t('home.reviews.uploadHint')}
                </p>
                
                {newReview.images.length > 0 && (
                  <>
                    <ImagesPreviewContainer>
                      {newReview.images.map((file, idx) => (
                        <PreviewImage key={idx}>
                          <img 
                            src={URL.createObjectURL(file)} 
                            alt={`Preview ${idx}`}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                          <RemoveImageButton 
                            onClick={() => removeImage(idx)}
                            type="button"
                          >
                            <X size={14} />
                          </RemoveImageButton>
                        </PreviewImage>
                      ))}
                    </ImagesPreviewContainer>
                    <SelectedImagesInfo>
                      ✅ {newReview.images.length} {t('home.reviews.imagesSelected')}
                    </SelectedImagesInfo>
                  </>
                )}

                {uploadingImages && (
                  <UploadProgressContainer>
                    <ProgressBar>
                      <ProgressFill $width={uploadProgress} />
                    </ProgressBar>
                    <ProgressText>
                      {t('home.reviews.uploading')} {Math.round(uploadProgress)}%
                    </ProgressText>
                  </UploadProgressContainer>
                )}
              </FormGroup>

              <ButtonStyled $primary type="submit" disabled={uploadingImages}>
                {uploadingImages ? (
                  <>
                    <SpinnerIcon size={18} />
                    {t('home.reviews.uploading')}
                  </>
                ) : (
                  t('home.reviews.submitButton')
                )}
              </ButtonStyled>
            </Form>
          ) : (
            <LoginRequiredContainer>
              <LoginIcon />
              <div>
                <FormTitle>{t('home.reviews.loginRequired')}</FormTitle>
                <LoginMessage>{t('home.reviews.loginMessage')}</LoginMessage>
              </div>
              <Link href="/login">
                <ButtonStyled $primary>
                  <LogIn size={18} style={{ marginRight: '8px' }} />
                  {t('home.reviews.loginButton')}
                </ButtonStyled>
              </Link>
            </LoginRequiredContainer>
          )}
        </ReviewFormContainer>
      </ReviewsSection>

      {selectedImage && (
        <ImageModal onClick={() => setSelectedImage(null)}>
          <ModalImage src={selectedImage} alt="Imagen ampliada" />
        </ImageModal>
      )}
    </PageContainer>
  );
}