'use client';

// Page uses these components internally through other components
// or may need them in the future as the page is developed further

import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/layout/navbar'), { ssr: true });
const Footer = dynamic(() => import('@/components/layout/footer'), { ssr: true });

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24">
      {/* Page Header Banner */}
      <section className="relative h-[300px] bg-blue-600 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/90 to-indigo-600/90 z-10"></div>
        <div className="absolute inset-0 z-0">
          {/* Background image would go here */}
          <div className="h-full w-full bg-blue-600"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
        <div className="relative z-20 text-center text-white max-w-4xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-white/90">Get to know Helix Processing</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-blue-600">Helix Processing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Raising the standard of care through innovation and excellence
            </p>
          </div>

          <div className="md:grid md:grid-cols-2 gap-16 items-center mb-16">
            {/* Patient/people image in styled container */}
            <div className="bg-white rounded-lg overflow-hidden mb-10 md:mb-0 shadow-lg border border-gray-100">
              <div className="aspect-video w-full relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Image container */}
                  <div className="w-full h-full flex flex-col">
                    {/* Placeholder for actual patient/people image - this would be replaced with a real image */}
                    <div className="relative flex-1 bg-gray-100 flex items-center justify-center group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-400/5"></div>
                      <div className="relative z-10 p-4 text-center">
                        <div className="flex justify-center">
                          {/* Multiple patient icons to represent people served */}
                          <div className="mx-2 h-20 w-20 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-blue-500/30">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div className="mx-2 h-20 w-20 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-indigo-400/30">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <div className="mx-2 h-20 w-20 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-blue-500/30">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                        </div>
                        <h3 className="mt-6 text-xl font-bold text-gray-800">Our Valued Patients</h3>
                        <p className="mt-2 text-gray-600">Providing exceptional care for those who matter most</p>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <div className="bg-white rounded-full p-2 shadow-md">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For over 5 years, Helix Processing has been a leading provider of AI-powered solutions and equipment tailored to meet the needs of businesses across various industries. We are a team of dynamic, customer-focused industry professionals, striving to create a positive experience for every client we serve.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our offshore customer support team is available 24/7 to provide assistance, ensuring seamless integration and operation of our AI solutions. We combine cutting-edge technology with exceptional service to deliver results that exceed expectations.
              </p>
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Our Mission</h3>
                <p className="text-gray-700 italic">
                  &ldquo;To leave a positive footprint by delivering quality AI products and services.&rdquo;
                </p>
              </div>
            </div>
          </div>
          
          <div id="mission" className="mt-16 bg-blue-50 rounded-lg p-12 scroll-mt-28">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Our Mission</h3>
            <p className="text-xl text-center max-w-3xl mx-auto font-medium text-gray-700">
              To leave a positive footprint by delivering quality AI products and services.
            </p>
          </div>
          
          <div id="team" className="mt-20 scroll-mt-28">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
                <div className="h-48 bg-gray-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-800">Alex Johnson</h3>
                  <p className="text-blue-600 mb-3">Chief Executive Officer</p>
                  <p className="text-gray-600">With over 15 years of experience in the industry, Alex leads our team with vision and strategic direction.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
                <div className="h-48 bg-gray-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-800">Sarah Chen</h3>
                  <p className="text-blue-600 mb-3">Chief Technology Officer</p>
                  <p className="text-gray-600">Sarah drives our technology innovations, ensuring we stay at the cutting edge of AI solutions.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
                <div className="h-48 bg-gray-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-800">Michael Rodriguez</h3>
                  <p className="text-blue-600 mb-3">Customer Success Director</p>
                  <p className="text-gray-600">Michael ensures our customers receive exceptional support and achieve their business goals.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div id="values" className="mt-20 scroll-mt-28">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100 text-center">
                <div className="bg-blue-100 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Excellence</h3>
                <p className="text-gray-600">We strive for excellence in every solution we provide, ensuring the highest quality standards are met.</p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100 text-center">
                <div className="bg-indigo-100 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Customer Focus</h3>
                <p className="text-gray-600">We place our customers at the center of everything we do, ensuring their needs are met with care and attention.</p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100 text-center">
                <div className="bg-green-100 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Innovation</h3>
                <p className="text-gray-600">We continuously innovate to provide cutting-edge solutions that address complex challenges efficiently.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
      <Footer />
    </>
  );
};

export default AboutPage;