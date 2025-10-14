import Image from 'next/image';
import { Container } from '@/shared/ui/Container';
import { FeatureItem } from './FeatureItem';

export function BookDetailSection() {
  const features = ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'];

  return (
    <section className="relative bg-gradient-to-br from-teal-300 to-teal-400 py-16 md:py-24 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="relative z-10 space-y-8">
            {/* Title Badge */}
            <div className="inline-block">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl px-8 py-4 shadow-lg">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                  Buku Cerita
                </h2>
                <p className="text-2xl md:text-3xl font-black text-gray-900">
                  Anak Edukatif
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-900 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing eli
            </p>

            {/* Features List */}
            <div className="flex flex-wrap gap-4">
              {features.map((feature, index) => (
                <FeatureItem key={index} text={feature} />
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Beli Sekarang
            </button>
          </div>

          {/* Right Side - Book Display with Characters */}
          <div className="relative flex items-center justify-center">
            {/* Background Circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-200/50 to-teal-300/50 rounded-full blur-3xl" />

            {/* Main Content Container */}
            <div className="relative w-full max-w-lg">
              {/* Book Images */}
              <div className="relative h-[400px] flex items-center justify-center">
                {/* Book 1 (Left) - Dark Cover */}
                <div className="absolute left-8 z-10 w-48 h-64 shadow-2xl rounded-r-lg overflow-hidden transform -rotate-3">
                  <Image
                    src="/images/books/book-cover-dark.png"
                    alt="Book Dark Cover"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Book 2 (Right) - Colorful Cover */}
                <div className="absolute right-8 z-20 w-48 h-64 shadow-2xl rounded-lg overflow-hidden transform rotate-3">
                  <Image
                    src="/images/books/book-cover-color.png"
                    alt="Book Color Cover"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Character - Left (Yellow/Orange) */}
              <div className="absolute bottom-0 left-0 w-32 h-32 z-30">
                <Image
                  src="/images/characters/character-orange.png"
                  alt="Orange Character"
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </div>

              {/* Character - Right (Pink) */}
              <div className="absolute bottom-0 right-0 w-32 h-32 z-30">
                <Image
                  src="/images/characters/character-pink.png"
                  alt="Pink Character"
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Decorative Wave - Top Left */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-br-full -translate-x-48 -translate-y-48" />
    </section>
  );
}