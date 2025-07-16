import React from 'react';
import { ExternalLink, Users, MapPin, Briefcase, Palette } from 'lucide-react';

const ProductShowcase = () => {
  const products = [
    {
      name: 'Socrate',
      icon: MapPin,
      description: 'The AI-powered topic teaching companion that guides you to the right answer, without giving it away..',
      image: 'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: ['On-Demand Topic Exploration', 'Real-time Voice Conversation', 'Engaging & Modern User Interface'],
      url: 'https://socratic.modelinfer.tech',
      color: 'from-teal-500 to-teal-600'
    },
    {
      name: 'Hello World',
      icon: Palette,
      description: 'Transform your creative ideas into stunning visual content with AI-assisted design tools.',
      image: 'public/helloworldicon.png',
      features: ['Code Demonstrations', 'Multi-Language Support', 'No-Setup Playground'],
      url: 'https://helloworld.modelinfer.tech',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Home Soldier',
      icon: Briefcase,
      description: 'Launch your business ideas with AI-generated business plans, strategies, and market analysis.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Gamified Chore System', 'AI-Powered Interaction'],
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      name: 'Following',
      icon: Users,
      description: 'Build and manage online communities with intelligent moderation and engagement tools.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Smart Moderation', 'Engagement Analytics', 'Member Matching'],
      url: 'https://following.modelinfer.tech',
      color: 'from-blue-500 to-blue-600'
    }
  ];

  return (
    <section id="products" className="py-20 bg-[#101010]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            See What <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600">'Vibe Coding'</span> Can Build
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our proven products built entirely through natural language prompts and AI intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div key={index} className="group bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-700">
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute top-4 left-4 p-3 bg-gradient-to-r ${product.color} rounded-xl`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{product.name}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{product.description}</p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex} 
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a href={product.url} target="_blank" rel="noopener noreferrer" className={`w-full bg-gradient-to-r ${product.color} text-white py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center group`}>
                    Try {product.name} Now!
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;