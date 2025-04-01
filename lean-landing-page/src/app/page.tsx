'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
// Image may be used in the future for actual images
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/layout/navbar'), { ssr: true });
const Footer = dynamic(() => import('@/components/layout/footer'), { ssr: true });

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 px-6 md:px-12 overflow-hidden">
          {/* Background gradient blob */}
          <div className="absolute top-1/3 right-10 w-[40vw] h-[40vw] bg-gradient-to-br from-blue-700/20 to-indigo-400/20 rounded-full blur-3xl -z-10 opacity-70"></div>
          
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-tight">
                  Making your needs <br />
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-400 text-transparent bg-clip-text">our priority.</span>
                </h1>
                <p className="text-xl md:text-2xl mb-10 text-gray-600 max-w-xl mx-auto md:mx-0">
                  Providing cutting-edge AI solutions and equipment with a focus on customer service excellence
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link href="/services" prefetch={true} scroll={true} passHref>
                    <Button 
                      variant="cta" 
                      size="lg" 
                      onClick={() => window.location.href = '/services'}
                      className="bg-gradient-to-r from-blue-600 to-indigo-400 hover:from-blue-700 hover:to-indigo-500 py-6 px-8 text-lg rounded-full"
                    >
                      Our Services
                    </Button>
                  </Link>
                  <Link href="/contracts" prefetch={true} scroll={true} passHref>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      onClick={() => window.location.href = '/contracts'}
                      className="py-6 px-8 text-lg rounded-full border-2"
                    >
                      Customer Portal
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="hidden md:flex justify-center items-center">
                {/* Patient image in a styled container */}
                <div className="relative w-full max-w-md rounded-xl border border-white/20 shadow-2xl overflow-hidden group">
                  <div className="relative aspect-[4/3] bg-gradient-to-r from-blue-600/10 to-indigo-400/10">
                    {/* This is a placeholder for an actual image of patients/people */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-400/20 group-hover:opacity-0 transition-opacity duration-300">
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
                    <div className="absolute top-2 right-2 bg-blue-600/80 text-white text-xs px-2 py-1 rounded-full z-10">
                      Our Patients
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-20 px-6 md:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-blue-500">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive solutions tailored to your specific needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100 text-center">
                <div className="bg-blue-100 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">AI Customer Support</h3>
                <p className="text-gray-600 mb-6">Our offshore AI customer support team provides 24/7 assistance for all your needs.</p>
                <Link 
                  href="/services" 
                  className="text-blue-500 font-medium hover:text-blue-600 flex items-center justify-center"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100 text-center">
                <div className="bg-blue-100 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Phototherapy Equipment</h3>
                <p className="text-gray-600 mb-6">State-of-the-art phototherapy equipment designed with precision for optimal results.</p>
                <Link 
                  href="/resources/phototherapy-guide" 
                  className="text-blue-500 font-medium hover:text-blue-600 flex items-center justify-center"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100 text-center">
                <div className="bg-indigo-100 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">AI-Powered Solutions</h3>
                <p className="text-gray-600 mb-6">Cutting-edge AI technology integrated with your business processes for optimal efficiency.</p>
                <Link 
                  href="/services" 
                  className="text-indigo-500 font-medium hover:text-indigo-600 flex items-center justify-center"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/services">
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-indigo-400 hover:from-blue-700 hover:to-indigo-500 text-white px-8 py-3 rounded-full"
                >
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Us Section */}
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
            
            <div className="md:grid md:grid-cols-2 gap-16 items-center">
              <div className="bg-white rounded-lg overflow-hidden mb-10 md:mb-0 shadow-lg border border-gray-100">
                <div className="aspect-video w-full relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Image container */}
                    <div className="w-full h-full flex flex-col">
                      {/* Placeholder for actual patient/people image - this would be replaced with a real image */}
                      <div className="relative flex-1 bg-gray-100 flex items-center justify-center group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-400/5"></div>
                        <div className="relative z-10 p-4 text-center">
                          <div className="flex justify-center">
                            {/* Multiple patient icons to represent people served */}
                            <div className="mx-2 h-16 w-16 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-blue-500/30">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                            <div className="mx-2 h-16 w-16 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-indigo-400/30">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <div className="mx-2 h-16 w-16 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-blue-500/30">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                          </div>
                          <h3 className="mt-6 text-lg font-bold text-gray-800">Our Team</h3>
                          <p className="mt-2 text-gray-600">Dedicated professionals committed to your care</p>
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
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our offshore customer support team is available 24/7 to provide assistance, ensuring seamless integration and operation of our AI solutions. We combine cutting-edge technology with exceptional service to deliver results that exceed expectations.
                </p>
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Our Mission</h3>
                  <p className="text-gray-700 italic">
                    "To leave a positive footprint by delivering quality AI products and services."
                  </p>
                </div>
                <Link href="/about">
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white px-8 py-3 rounded-full"
                  >
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-6 md:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose <span className="text-blue-600">Helix Processing</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We positively impact businesses with our exceptional service
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 text-center">
                <div className="bg-blue-100 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">Quality Products</h3>
                <p className="text-gray-600">We deliver superior quality equipment and AI solutions that meet the highest industry standards.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 text-center">
                <div className="bg-indigo-100 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">Customer-Focused</h3>
                <p className="text-gray-600">Our priority is understanding and fulfilling your unique business needs with personalized solutions.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 text-center">
                <div className="bg-indigo-100 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">24/7 Support</h3>
                <p className="text-gray-600">Our dedicated offshore support team is available around the clock to assist with any issues or inquiries.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 text-center">
                <div className="bg-blue-100 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">Innovative Technology</h3>
                <p className="text-gray-600">We continuously evolve our AI technology to provide cutting-edge solutions for modern business challenges.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-6 md:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-500 rounded-lg p-16 text-center shadow-2xl text-white overflow-hidden relative">
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
                  <Link href="/contact">
                    <Button 
                      className="bg-white text-blue-600 hover:bg-white/90 shadow-lg font-medium py-6 px-10 text-lg rounded-full"
                      size="lg"
                    >
                      Contact Us
                    </Button>
                  </Link>
                  <Link href="/resources">
                    <Button 
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/60 font-medium py-6 px-10 text-lg rounded-full"
                      size="lg"
                    >
                      View Resources
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}