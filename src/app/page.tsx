import { Header } from '@/features/navigation';
import { HeroSection } from '@/features/hero';
import { ProductsSection } from '@/features/products';
import { BookDetailSection } from '@/features/books';
import { VideoDetailSection } from '@/features/videos';
import { Footer } from '@/features/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <BookDetailSection />
        <VideoDetailSection />
      </main>
      <Footer />
    </div>
  );
}