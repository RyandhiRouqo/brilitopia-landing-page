import { Container } from '@/shared/ui/Container';
import { ProductCard } from './ProductsCard';
import { products } from '../data/products.data';

export function ProductsSection() {
  return (
    <section className="bg-gradient-to-b from-yellow-100 to-yellow-200 py-16 md:py-24">
      <Container>
        <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-start">
          {/* Left Side - Title & Description */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              PRODUK
            </h2>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing eli
            </p>
          </div>

          {/* Right Side - Product Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}