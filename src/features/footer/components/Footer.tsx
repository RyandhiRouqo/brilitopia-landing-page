import Image from 'next/image';
import { Container } from '@/shared/ui/Container';
import { FooterLinks } from './FooterLinks';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-teal-200 to-teal-300 py-12 md:py-16">
      <Container>
        <div className="grid lg:grid-cols-[300px_1fr] gap-12">
          {/* Left Side - Logo & Description */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo-star.png"
                  alt="Brilitopia Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className='relative w-25'>
                <img src="images/logo-text.png" alt="" />
              </div>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-800 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          {/* Right Side - Links */}
          <FooterLinks />
        </div>

        {/* Bottom Bar - Copyright */}
        <div className="mt-12 pt-8 border-t border-teal-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-800">
              © {new Date().getFullYear()} Brilitopia. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-800 hover:text-gray-900 transition-colors"
                aria-label="Privacy Policy"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-gray-900 transition-colors"
                aria-label="Terms of Service"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}