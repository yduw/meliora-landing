'use client';

import { Button } from '@/components/ui/button';

const WhyChooseUsSection = () => {
  const reasons = [
    {
      title: "Quality Products",
      description: "We deliver superior quality equipment and AI solutions that meet the highest industry standards.",
      icon: (
        <svg className="w-12 h-12 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Customer-Focused",
      description: "Our priority is understanding and fulfilling your unique business needs with personalized solutions.",
      icon: (
        <svg className="w-12 h-12 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "24/7 Support",
      description: "Our dedicated offshore support team is available around the clock to assist with any issues or inquiries.",
      icon: (
        <svg className="w-12 h-12 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Innovative Technology",
      description: "We continuously evolve our AI technology to provide cutting-edge solutions for modern business challenges.",
      icon: (
        <svg className="w-12 h-12 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  return (
    <section id="why-us" className="py-28 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Why choose <span className="bg-gradient-to-r from-primary to-indigo-400 text-transparent bg-clip-text">Helix Processing</span>?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            We positively impact businesses.
          </p>
        </div>
        
        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto mb-10">
            {/* Placeholder for patient/customer satisfaction image */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="rounded-full overflow-hidden border-4 border-primary/20 shadow-lg mx-auto w-48 h-48">
                <div className="w-full h-full bg-gradient-to-r from-gray-200 to-gray-100 flex items-center justify-center">
                  {/* This would be replaced with a real image of happy patients/customers */}
                  <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-primary/50" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <div className="absolute bottom-0 right-0">
                      <div className="bg-primary text-white rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-lg text-center md:text-left leading-relaxed text-gray-700 md:w-2/3">
              Our customers are our priority. We strive to provide the best quality of products and customer service for your business needs, while meeting and exceeding the industry standards of excellence. We foster an environment of trust for our clients, positively impacting their operations with our caring and compassionate service.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-8 shadow-md flex items-start gap-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0 bg-white rounded-full p-3 shadow-sm">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-28 bg-gradient-to-r from-primary to-indigo-400 rounded-lg p-12 text-white text-center shadow-xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Ready to experience the Helix Processing difference?</h3>
            <p className="text-xl mb-8 text-white/90">
              Discover how our solutions and equipment can transform your business operations.
            </p>
            <Button 
              variant="cta" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 py-6 px-10 text-lg rounded-full shadow-md group"
            >
              Contact Us
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;