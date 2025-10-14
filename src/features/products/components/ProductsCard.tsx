import Image from 'next/image';
import { Product } from '../types/products.types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={`
      relative rounded-[3rem] p-8 
      bg-gradient-to-br ${product.bgColor}
      shadow-lg hover:shadow-xl transition-shadow duration-300
      flex flex-col items-center justify-center
      min-h-[400px]
    `}>
      {/* Product Image */}
      <div className="relative w-full h-64 mb-6">
        <Image
          src={product.image}
          alt={`${product.title} ${product.subtitle}`}
          fill
          className="object-contain drop-shadow-2xl"
        />
      </div>

      {/* Product Title */}
      <div className="text-center">
        <h3 className="text-white font-bold text-2xl mb-1">
          {product.title}
        </h3>
        <p className="text-white font-bold text-2xl">
          {product.subtitle}
        </p>
      </div>
    </div>
  );
}