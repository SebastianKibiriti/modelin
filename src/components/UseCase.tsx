import React from 'react';
import { Lightbulb, Code, Sparkles } from 'lucide-react';

const UseCase = () => {
  return (
    <section id="about" className="py-20 bg-[#101010]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Igniting Possibilities: The <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600">"Vibe Code"</span> Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ignite Your Ideas: The Unbound Potential of Vibe Coding.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 shadow-lg border border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Visual Elements */}
              <div className="flex justify-center">
                <div className="w-24 h-24 bg-gradient-to-r from-teal-400 to-teal-500 rounded-2xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform">
                  <Lightbulb className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform">
                  <Code className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-24 h-24 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-2xl flex items-center justify-center transform rotate-2 hover:rotate-0 transition-transform">
                  <Sparkles className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-8 text-center">
              <p className="text-lg text-gray-300 leading-relaxed">
                Imagine building an AI assistant for your passion project, a smart tool to automate your daily tasks, or an interactive experience that connects people in new ways – all with the power of your words.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                ModelInfer's launched projects are just the beginning. They demonstrate how natural language can command complex logic, transforming abstract concepts into functional realities across diverse fields.
              </p>
              
              <p className="text-lg text-gray-100 leading-relaxed font-semibold">
                What kind of innovative solution could you envision? The only limit is your imagination, not your coding skills.
              </p>
            </div>

            {/* Floating Animation Elements */}
            <div className="relative mt-12">
              <div className="absolute top-0 left-1/4 w-4 h-4 bg-teal-400 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute top-8 right-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-pulse delay-500"></div>
              <div className="absolute bottom-0 left-1/2 w-5 h-5 bg-emerald-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCase;