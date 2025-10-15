import { Product } from '../types/products.types';

export const products: Product[] = [
  {
    id: 'book-1',
    title: 'Buku Cerita',
    subtitle: 'Anak Edukatif',
    type: 'book',
    image: '/images/products/book-mockup.png',
    bgColor: 'from-cyan-300 to-cyan-400'
  },
  {
    id: 'video-1',
    title: 'Video Cerita',
    subtitle: 'Anak Edukatif',
    type: 'video',
    image: '/images/products/video-mockup.png',
    bgColor: 'from-purple-300 to-purple-400'
  }
];