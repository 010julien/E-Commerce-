import React from 'react';
import ProductCard from './ProductCard';
import { ArrowRight } from 'lucide-react';

const ProductSection = ({ title, products, showViewAll = true, featured = false }) => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
          {showViewAll && (
            <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors">
              <span>Voir tout</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          featured 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
        }`}>
          {products.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              featured={featured && index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
