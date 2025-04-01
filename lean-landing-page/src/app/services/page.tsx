'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
// Image will be used for actual images in production

import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/layout/navbar'), { ssr: true });
const Footer = dynamic(() => import('@/components/layout/footer'), { ssr: true });

const ServicesPage = () => {
  const services = [
    {
      title: 'AI Customer Support',
      description: 'Our offshore AI customer support team provides 24/7 assistance for all your needs, ensuring prompt and efficient service.',
      icon: (
        <svg className="w-16 h-16 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
      color: 'blue'
    },
    {
      title: 'Phototherapy Equipment',
      description: 'State-of-the-art phototherapy equipment designed with precision to deliver optimal results for various treatment needs.',
      icon: (
        <svg className="w-16 h-16 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'blue'
    },
    {
      title: 'Custom Equipment',
      description: 'Tailored solutions designed to meet your specific needs with customizable features and configurations.',
      icon: (
        <svg className="w-16 h-16 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: 'indigo'
    },
    {
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge AI technology integrated with your business processes to optimize operations and enhance efficiency.',
      icon: (
        <svg className="w-16 h-16 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      color: 'indigo'
    },
    {
      title: 'Equipment Leasing',
      description: 'Flexible leasing options for our range of equipment, making it accessible for businesses of all sizes.',
      icon: (
        <svg className="w-16 h-16 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'blue'
    },
    {
      title: 'Support & Maintenance',
      description: 'Comprehensive support and maintenance services to ensure your equipment operates at peak performance.',
      icon: (
        <svg className="w-16 h-16 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'indigo'
    }
  ];

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

      {/* Services Introduction */}
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
            <div id="customer-support" className="bg-white rounded-lg p-8 shadow-md border border-gray-100 text-center scroll-mt-28">
              <div className="bg-blue-100 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">AI Customer Support</h3>
              <p className="text-gray-600 mb-6">Our offshore AI customer support team provides 24/7 assistance for all your needs.</p>
              <a href="#customer-support" className="text-blue-500 font-medium hover:text-blue-600 flex items-center justify-center">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            
            <div id="phototherapy" className="bg-white rounded-lg p-8 shadow-md border border-gray-100 text-center scroll-mt-28">
              <div className="bg-blue-100 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Phototherapy Equipment</h3>
              <p className="text-gray-600 mb-6">State-of-the-art phototherapy equipment designed with precision for optimal results.</p>
              <a href="#phototherapy" className="text-blue-500 font-medium hover:text-blue-600 flex items-center justify-center">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            
            <div id="solutions" className="bg-white rounded-lg p-8 shadow-md border border-gray-100 text-center scroll-mt-28">
              <div className="bg-indigo-100 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">AI-Powered Solutions</h3>
              <p className="text-gray-600 mb-6">Cutting-edge AI technology integrated with your business processes for optimal efficiency.</p>
              <a href="#solutions" className="text-indigo-500 font-medium hover:text-indigo-600 flex items-center justify-center">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div id="all-services" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {services.map((service, index) => {
              // Create ID for each service section
              const serviceId = service.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
              // Map the service titles to the navbar anchor IDs
              const serviceIdMap: Record<string, string> = {
                'ai-customer-support': 'customer-support',
                'phototherapy-equipment': 'phototherapy',
                'ai-powered-solutions': 'solutions',
                'equipment-leasing': 'leasing'
              };
              const anchorId = serviceIdMap[serviceId] || serviceId;
              // Use these classes in a future update
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const bgColorClass = `bg-${service.color}-50`;
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const borderColorClass = `border-${service.color}-100`;
              
              return (
                <div 
                  id={anchorId}
                  key={index} 
                  className={`bg-white rounded-lg p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow scroll-mt-28`}
                >
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link 
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    prefetch={true} scroll={true} passHref
                    className={`inline-flex items-center text-${service.color}-500 font-medium hover:text-${service.color}-600 transition-colors group`}
                  >
                    <span onClick={() => window.location.href = `/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="transform transition-all group-active:scale-95">Learn More</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-800">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we deliver exceptional service every time
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Consultation</h3>
              <p className="text-gray-600">We start by understanding your specific needs and requirements.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Solution Design</h3>
              <p className="text-gray-600">Our experts design a tailored solution to address your challenges.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 text-white rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Implementation</h3>
              <p className="text-gray-600">We carefully implement the solution with minimal disruption.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Ongoing Support</h3>
              <p className="text-gray-600">Our 24/7 support team ensures continued success and satisfaction.</p>
            </div>
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
                <Link href="/contact">
                  <Button 
                    className="bg-white text-blue-600 hover:bg-white/90 shadow-lg font-medium py-6 px-10 text-lg rounded-full"
                    size="lg"
                  >
                    Contact Us
                  </Button>
                </Link>
                <Link href="/contracts">
                  <Button 
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

export default ServicesPage;