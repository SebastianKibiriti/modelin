import React from 'react';
import { Zap, Code2, Rocket, BarChart3 } from 'lucide-react';

const Difference = () => {
  const features = [
    {
      icon: Zap,
      title: 'LLM Precision',
      description: 'Advanced language models understand your exact requirements and translate them into perfect solutions.',
      color: 'text-yellow-500'
    },
    {
      icon: Code2,
      title: 'True No-Code Experience',
      description: 'Zero technical knowledge required. Express your ideas naturally and watch them come to life.',
      color: 'text-teal-500'
    },
    {
      icon: Rocket,
      title: 'Rapid Deployment',
      description: 'From concept to live product in minutes, not months. Accelerate your innovation cycle.',
      color: 'text-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Infinite Scalability',
      description: 'Built for growth with AI-powered optimization that scales automatically with your success.',
      color: 'text-emerald-500'
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-[#101010]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why ModelInfer? <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600">My Vision, AI Intelligence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Testing the future of development where creativity meets artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gray-900 border border-gray-700 rounded-2xl shadow-lg flex items-center justify-center mx-auto group-hover:shadow-xl transition-shadow">
                    <IconComponent className={`h-10 w-10 ${feature.color}`} />
                  </div>
                  <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-teal-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gray-900 border border-gray-700 rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-teal-500 mb-2">10x</div>
              <div className="text-gray-300">Faster Development</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-500 mb-2">0</div>
              <div className="text-gray-300">Code Lines Required</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-500 mb-2">99%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Igniting;