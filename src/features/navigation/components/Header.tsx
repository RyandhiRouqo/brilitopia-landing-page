import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/shared/ui/Container';

export function Header() {
  const navLinks = [
    { href: '/', label: 'Beranda', active: true },
    { href: '/tentang', label: 'Tentang' },
    { href: '/produk', label: 'Produk' },
    { href: '/kontak', label: 'Kontak' },
  ];

  return (
    <header className="bg-white py-4 border-b border-gray-100">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-12 h-12">
              <Image
                src="/images/logo-star.png"
                alt="Brilitopia Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="relative w-40 h-10">
              <Image
                src="/images/logo-text.png"
                alt="Brilitopia"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  link.active
                    ? 'bg-teal-400 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Search Icon */}
          <button 
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Search"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
        </div>
      </Container>
    </header>
  );
}