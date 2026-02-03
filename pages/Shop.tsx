import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import Button from '../components/ui/Button';
import { PRODUCTS } from '../constants';

const Shop: React.FC = () => {
  return (
    <div className="min-h-screen bg-nexus-black pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-display font-bold text-white mb-4">OFFICIAL SHOP</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Gear up with official team merchandise, high-performance hardware, and digital collectibles.</p>
        </div>

        {/* Featured Item */}
        <div className="mb-20">
          <div className="bg-nexus-card border border-white/5 rounded-sm overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-nexus-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 md:p-12">
              <div className="order-2 md:order-1">
                <span className="inline-block bg-nexus-blue text-black font-bold px-3 py-1 text-sm uppercase mb-4">New Arrival</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">NEXUS PRO KIT 2024</h2>
                <p className="text-gray-400 mb-8 text-lg">The official jersey worn by our championship teams. Engineered for comfort and performance during marathon gaming sessions.</p>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-white">$89.99</span>
                  <Button icon={<ShoppingCart size={18} />}>Add to Cart</Button>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <img 
                  src="https://picsum.photos/600/600?random=99" 
                  alt="Featured Product" 
                  className="rounded-lg shadow-[0_0_50px_rgba(0,240,255,0.2)] transform group-hover:scale-105 transition-transform duration-500 max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-4 mb-10 overflow-x-auto pb-4">
          {['All Products', 'Apparel', 'Hardware', 'Digital', 'Accessories'].map((cat, idx) => (
            <button 
              key={cat}
              className={`whitespace-nowrap px-6 py-2 rounded-full border text-sm font-bold uppercase tracking-wider transition-all ${
                idx === 0 
                  ? 'bg-white text-black border-white' 
                  : 'bg-transparent text-gray-400 border-white/10 hover:border-white/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white rounded-sm overflow-hidden group hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500" 
                />
                {product.featured && (
                  <div className="absolute top-2 left-2">
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 uppercase">Hot</span>
                  </div>
                )}
              </div>
              <div className="p-6 bg-white border-t border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">{product.category}</span>
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-black mb-3 leading-tight group-hover:text-nexus-blueDim transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-black">${product.price}</span>
                  <button className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-nexus-blue hover:text-black transition-colors">
                    <ShoppingCart size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
