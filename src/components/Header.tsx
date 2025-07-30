import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#101010]/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg">
              <Zap className="h-6 w-6 text-blue" />
            </div>
            <span className="text-xl font-bold text-white">ModelInfer</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-teal-400 transition-colors">Home</a>
            <a href="#products" className="text-gray-300 hover:text-teal-400 transition-colors">Products</a>
            <a href="#solutions" className="text-gray-300 hover:text-teal-400 transition-colors">Solutions</a>
            <a href="#about" className="text-gray-300 hover:text-teal-400 transition-colors">About</a>
            <a href="#contact" className="text-gray-300 hover:text-teal-400 transition-colors">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a href="#products" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-medium transition-all transform hover:scale-105">
              Discover
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-teal-400 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-300 hover:text-teal-400 transition-colors">Home</a>
              <a href="#products" className="text-gray-300 hover:text-teal-400 transition-colors">Products</a>
              <a href="#solutions" className="text-gray-300 hover:text-teal-400 transition-colors">Solutions</a>
              <a href="#about" className="text-gray-300 hover:text-teal-400 transition-colors">About</a>
              <a href="#contact" className="text-gray-300 hover:text-teal-400 transition-colors">Contact</a>
              <a href="#products" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-medium transition-all w-full">
                Discover
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;