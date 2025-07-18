import React from 'react';
import { Zap, Mail, Phone, MapPin, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">ModelInfer</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Empowering creators to transform ideas into reality through the magic of AI-driven development. 
              No coding required, just pure innovation.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/directors_comp" className="text-gray-500 hover:text-teal-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://github.com/SebastianKibiriti" className="text-gray-500 hover:text-teal-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-teal-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#products" className="hover:text-teal-400 transition-colors">Products</a></li>
              <li><a href="#solutions" className="hover:text-teal-400 transition-colors">Solutions</a></li>
              <li><a href="#about" className="hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Resources</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-teal-400" />
                <span className="text-sm">skibiriti163@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-teal-400" />
                <span className="text-sm"></span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-teal-400" />
                <span className="text-sm">South Africa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            ModelInfer. Made with Bolt.new
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;