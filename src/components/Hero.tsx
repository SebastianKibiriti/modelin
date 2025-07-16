import React from 'react';
import { ArrowRight, Brain, Code, Sparkles } from 'lucide-react';
import { Squares } from './ui/squares-background';

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 pb-16 overflow-hidden">
      <Squares
        className="absolute inset-0"
        direction="diagonal"
        speed={0.2}
        squareSize={30}
        borderColor="#0d2d2d" // A dark teal for the grid lines
        hoverFillColor="#2c1a3a" // A dark purple for the hover effect
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content */}
          <div className="max-w-xl lg:max-w-none">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-center lg:text-left">
              See What's Possible :{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600">
                Vibe Coding Everywhere!
              </span>{' '}
              
            </h1>
            <p className="mt-6 text-xl text-gray-300 leading-relaxed">
              All products are made in mere days. Just your vision, powered by intelligent models. 
              Discover the ideas materialised by AI-driven development.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center group">
                Explore Our Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-purple-500 text-purple-400 hover:bg-purple-900/20 px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="mt-12 lg:mt-0 relative hidden lg:block">
            <div className="relative">
              {/* Main illustration container */}
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-700">
                <div className="grid grid-cols-2 gap-4">
                  {/* AI Brain */}
                  <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transform rotate-2 hover:rotate-0 transition-transform border border-gray-700">
                    <Brain className="h-12 w-12 text-purple-500 mb-4" />
                    <h3 className="font-semibold text-white">AI Intelligence</h3>
                    <p className="text-sm text-gray-300 mt-2">Natural language processing</p>
                  </div>
                  
                  {/* Code Generation */}
                  <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transform -rotate-2 hover:rotate-0 transition-transform border border-gray-700">
                    <Code className="h-12 w-12 text-teal-500 mb-4" />
                    <h3 className="font-semibold text-white">Smart Coding</h3>
                    <p className="text-sm text-gray-300 mt-2">Automated development</p>
                  </div>
                  
                  {/* Magic Results */}
                  <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transform rotate-1 hover:rotate-0 transition-transform col-span-2 border border-gray-700">
                    <Sparkles className="h-12 w-12 text-yellow-500 mb-4" />
                    <h3 className="font-semibold text-white">Instant Results</h3>
                    <p className="text-sm text-gray-300 mt-2">From idea to reality in minutes</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full opacity-80 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
