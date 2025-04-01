'use client';

import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section id="resources" className="py-28 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-primary to-indigo-400 rounded-lg p-16 text-center shadow-2xl text-white overflow-hidden relative">
          {/* Background pattern/design element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-16 -mb-16"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto">
              Contact us today to learn more about our equipment and services tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                className="bg-white text-primary hover:bg-white/90 shadow-lg font-medium py-6 px-10 text-lg rounded-full"
                size="lg"
              >
                Contact Us
              </Button>
              <Button 
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/60 font-medium py-6 px-10 text-lg rounded-full"
                size="lg"
                onClick={() => window.location.href='/contracts'}
              >
                Customer Portal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;