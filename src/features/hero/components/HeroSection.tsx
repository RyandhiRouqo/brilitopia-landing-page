import Image from 'next/image';
import { Container } from '@/shared/ui/Container';
import { StarBadge } from './StarBadge';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-white to-purple-50 py-16 md:py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Small Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Selamat datang di...
            </h2>

            {/* Large Brilitopia Logo Text */}
            <div className="relative w-full max-w-lg">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black">
               <img src="/images/logo-text.png" alt="" />
              </h1>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-md">
              Kami percaya setiap anak belajar paling baik lewat imajinasi dan cerita. Brilitopia hadir untuk membuat belajar terasa seperti bermain.
            </p>
          </div>

          
          <div className="flex items-center justify-center">
            <img src="images/logo-star.png" alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
}