import Image from 'next/image';
import { Container } from '@/shared/ui/Container';

export function VideoDetailSection() {
  const features = ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'];

  return (
    <section className="relative bg-gradient-to-br from-purple-300 to-purple-400 py-16 md:py-24 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Video Display with Characters */}
          <div className="relative flex items-center justify-center order-2 lg:order-1">
            {/* Background Circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200/50 to-purple-300/50 rounded-full blur-3xl" />

            {/* Main Content Container */}
            <div className="relative w-full max-w-lg">
              {/* Phone Mockup */}
              <div className="relative h-[500px] flex items-center justify-center">
                <div className="relative w-72 h-[500px] z-20">
                  <Image
                    src="/images/products/video-mockup.png"
                    alt="Video App Mockup"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Character - Left (Yellow/Orange) */}
              <div className="absolute top-12 left-0 w-32 h-32 z-30">
                <Image
                  src="/images/characters/character-orange.png"
                  alt="Yellow Character"
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </div>

              {/* Character - Right (Pink) */}
              <div className="absolute bottom-12 right-0 w-32 h-32 z-30">
                <Image
                  src="/images/characters/character-pink.png"
                  alt="Pink Character"
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="relative z-10 space-y-8 order-1 lg:order-2">
            {/* Title Badge */}
            <div className="inline-block">
              <div className="bg-white/90 backdrop-blur-sm rounded-[3rem] px-8 py-4 shadow-lg">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                  Video Cerita
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
                <div key={index} className="inline-block">
                  <span className="text-lg md:text-xl font-bold text-gray-900">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Tonton Sekarang
            </button>
          </div>
        </div>
      </Container>

      {/* Decorative Wave - Top Right */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-bl-full translate-x-48 -translate-y-48" />
    </section>
  );
}