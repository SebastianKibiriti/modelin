import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-teal-500 via-purple-500 to-teal-500 bg-[length:200%_200%] animate-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See what's Possible
          </h2>
          
          {/* Description */}
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Join the revolution where ideas become reality through the power of natural language and AI intelligence. 
            Your next breakthrough is just a conversation away.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center group">
              Explore Our Portfolio
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-all">
              Start Building Now
            </button>
          </div>

          {/* Additional info */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 text-white/80">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Open for any vibe coding gigs.
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Fast deployment
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              24/7 AI assistance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;