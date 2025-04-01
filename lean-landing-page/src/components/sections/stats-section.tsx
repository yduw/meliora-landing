'use client';

import AnimatedCounter from "../ui/animated-counter";

const StatsSection = () => {
  const stats = [
    {
      number: '90%',
      label: 'Reduction in Manual Data Entry'
    },
    {
      number: '98%',
      label: 'Fewer First-Time Denials'
    },
    {
      number: '10x',
      label: 'Faster Patient Intake'
    },
    {
      number: '99.5%',
      label: 'Extraction Accuracy'
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-primary/90 to-indigo-400/90 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Genuine Results From Our Customers
        </h2>
        <p className="text-xl text-center mb-12 text-white/90 max-w-3xl mx-auto">
          Clients using Helix Processing solutions have achieved remarkable improvements in their operations:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center group hover:bg-white/15 transition-colors border border-white/20"
            >
              <div className="text-3xl md:text-5xl font-bold mb-2">
                <AnimatedCounter value={stat.number} duration={1500 + (index * 200)} />
              </div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
          <blockquote className="text-xl italic mb-6">
            &ldquo;Before Helix Processing, we could only work at the speed of our manpower. Their AI solutions have allowed us to expedite patient access 
            to care and reallocate staff to patient-facing tasks. The results have been transformative for our business.&rdquo;
          </blockquote>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full mr-4 flex items-center justify-center text-white font-bold">
              MJ
            </div>
            <div>
              <p className="font-semibold">Michael Johnson</p>
              <p className="text-white/70 text-sm">Operations Director, MediCare DME</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;