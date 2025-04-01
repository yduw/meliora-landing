'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
// Image will be used for actual images in production

import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/layout/navbar'), { ssr: true });
const Footer = dynamic(() => import('@/components/layout/footer'), { ssr: true });

const ServicesOverviewPage = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24">
      {/* Page Header Banner */}
      <section className="relative h-[300px] bg-blue-600 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-500/90 z-10"></div>
        <div className="absolute inset-0 z-0">
          {/* Background image would go here */}
          <div className="h-full w-full bg-blue-600"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
        <div className="relative z-20 text-center text-white max-w-4xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-white/90">Comprehensive solutions tailored to your needs</p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-800">
              <span className="text-blue-600">Our</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive solutions tailored to your specific needs
            </p>
          </div>
          
          <div className="mb-20">
            <p className="text-lg text-center leading-relaxed max-w-4xl mx-auto text-gray-700">
              Helix Processing is the premier provider for AI-powered solutions and equipment. With complete product selection and a superior commitment to customer service, Helix Processing can supply customers with all types of equipment and solutions for a variety of needs. We work hand-in-hand with businesses to determine requirements that help us identify the right products for your individual needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100 text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">AI Customer Support</h3>
              <p className="text-gray-600 mb-6">Our offshore AI customer support team provides 24/7 assistance for all your needs.</p>
              <Link href="/services#customer-support" prefetch={true} scroll={true} passHref>
                <div onClick={() => window.location.href = '/services#customer-support'} className="text-blue-500 font-medium hover:text-blue-600 flex items-center justify-center cursor-pointer">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
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
              <Link href="/services#phototherapy" prefetch={true} scroll={true} passHref>
                <div onClick={() => window.location.href = '/services#phototherapy'} className="text-blue-500 font-medium hover:text-blue-600 flex items-center justify-center cursor-pointer">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
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
              <Link href="/services#solutions" prefetch={true} scroll={true} passHref>
                <div onClick={() => window.location.href = '/services#solutions'} className="text-indigo-500 font-medium hover:text-indigo-600 flex items-center justify-center cursor-pointer">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/services" prefetch={true} scroll={true} passHref>
              <Button 
                onClick={() => window.location.href = '/services'}
                className="bg-gradient-to-r from-blue-600 to-indigo-400 hover:from-blue-700 hover:to-indigo-500 text-white px-8 py-3 rounded-full"
              >
                View Detailed Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-500 rounded-lg p-16 text-center shadow-2xl text-white overflow-hidden relative">
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
                <Link href="/contact" prefetch={true} scroll={true} passHref>
                  <Button 
                    onClick={() => window.location.href = '/contact'}
                    className="bg-white text-blue-600 hover:bg-white/90 shadow-lg font-medium py-6 px-10 text-lg rounded-full"
                    size="lg"
                  >
                    Contact Us
                  </Button>
                </Link>
                <Link href="/contracts" prefetch={true} scroll={true} passHref>
                  <Button 
                    onClick={() => window.location.href = '/contracts'}
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/60 font-medium py-6 px-10 text-lg rounded-full"
                    size="lg"
                  >
                    Customer Portal
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
};

export default ServicesOverviewPage;