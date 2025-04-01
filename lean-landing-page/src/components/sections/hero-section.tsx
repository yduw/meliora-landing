'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center pt-32 pb-16 px-6 md:px-12 overflow-hidden">
      {/* Background gradient blob */}
      <div className="absolute top-1/3 right-10 w-[40vw] h-[40vw] bg-gradient-to-br from-primary/20 to-indigo-400/20 rounded-full blur-3xl -z-10 opacity-70"></div>
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-tight">
              Making your needs <br />
              <span className="bg-gradient-to-r from-primary to-indigo-400 text-transparent bg-clip-text">our priority.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-muted-foreground max-w-xl mx-auto md:mx-0">
              Providing cutting-edge AI solutions and equipment with a focus on customer service excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                variant="cta" 
                size="lg" 
                className="bg-gradient-to-r from-primary to-indigo-400 hover:from-primary/90 hover:to-indigo-400/90 py-6 px-8 text-lg rounded-full"
              >
                Learn More
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => window.location.href='/contracts'} 
                className="py-6 px-8 text-lg rounded-full border-2"
              >
                Customer Portal
              </Button>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center items-center">
            {/* Patient image in a styled container */}
            <div className="relative w-full max-w-md rounded-xl border border-white/20 shadow-2xl overflow-hidden group">
              <div className="relative aspect-[4/3] bg-gradient-to-r from-primary/10 to-indigo-400/10">
                {/* This is a placeholder for an actual image of patients/people */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-indigo-400/20 group-hover:opacity-0 transition-opacity duration-300">
                  <div className="h-full w-full flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="mx-auto h-48 w-48 overflow-hidden rounded-full border-4 border-white/50 shadow-lg mb-4">
                        {/* Placeholder for patient image */}
                        <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-white text-lg font-medium">These are the people that our mission is about</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-primary/80 text-white text-xs px-2 py-1 rounded-full z-10">
                  Our Patients
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;