'use client';

import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Get to know <span className="bg-gradient-to-r from-primary to-indigo-400 text-transparent bg-clip-text">Helix Processing</span>
          </h2>
          <p className="text-xl md:text-2xl font-medium text-gray-600">Raising the standard of care.</p>
        </div>
        
        <div className="md:grid md:grid-cols-2 gap-16 items-center">
          {/* Patient/people image in styled container */}
          <div className="bg-white rounded-lg overflow-hidden mb-10 md:mb-0 shadow-lg border border-gray-100">
            <div className="aspect-video w-full relative">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Image container */}
                <div className="w-full h-full flex flex-col">
                  {/* Placeholder for actual patient/people image - this would be replaced with a real image */}
                  <div className="relative flex-1 bg-gray-100 flex items-center justify-center group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-indigo-400/5"></div>
                    <div className="relative z-10 p-4 text-center">
                      <div className="flex justify-center">
                        {/* Multiple patient icons to represent people served */}
                        <div className="mx-2 h-20 w-20 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-primary/30">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div className="mx-2 h-20 w-20 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-indigo-400/30">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div className="mx-2 h-20 w-20 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-primary/30">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      </div>
                      <h3 className="mt-6 text-xl font-bold text-gray-800">Our Valued Patients</h3>
                      <p className="mt-2 text-gray-600">Providing exceptional care for those who matter most</p>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-white rounded-full p-2 shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              For over 5 years, Helix Processing has been a leading provider of AI-powered solutions and equipment tailored to meet the needs of businesses across various industries. We are a team of dynamic, customer-focused industry professionals, striving to create a positive experience for every client we serve.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our offshore customer support team is available 24/7 to provide assistance, ensuring seamless integration and operation of our AI solutions. We combine cutting-edge technology with exceptional service to deliver results that exceed expectations.
            </p>
            <Button 
              variant="outline" 
              className="group px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary/5 font-medium"
            >
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Button>
          </div>
        </div>
        
        <div className="mt-28 bg-gray-100 rounded-lg p-12">
          <h3 className="text-2xl font-bold text-center mb-8">Our Mission</h3>
          <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto font-medium text-gray-700">
            To leave a positive footprint by delivering quality AI products and services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;