

export interface SliderImage {
  url: string;
  title: string;
  description: string;
}



// Exporta el array de imágenes
export const sliderServicesImages: SliderImage[] = [
  {
    url: 'assets/ai-images/painting.png', // Compatibilidad con Next.js
    title: 'Painting Services',
    description: 'Professional painting for homes and businesses',
  },
  {
    url: 'assets/ai-images/logoSlider.png',
    title: 'Cleaning Services',
    description: 'Deep cleaning and maintenance',
  },
  {
    url: 'assets/ai-images/wall-stand-tv.jpeg',
    title: 'Remodeling',
    description: 'Complete renovation solutions',
  },
  {
    url: 'assets/ai-images/logoSlider.png',
    title: 'TV Installation',
    description: 'Professional TV mounting and setup',
  },
];