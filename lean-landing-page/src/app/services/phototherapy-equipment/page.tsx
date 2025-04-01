'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/layout/navbar'), { ssr: true });
const Footer = dynamic(() => import('@/components/layout/footer'), { ssr: true });

const PhototherapyEquipmentPage = () => {
  const features = [
    {
      title: 'Advanced Light Technology',
      description: 'Our phototherapy equipment uses state-of-the-art light technology designed to deliver precise wavelengths for optimal treatment results.',
      icon: (
        <svg className="w-12 h-12 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Customizable Treatment Settings',
      description: 'Tailor treatment parameters to meet specific patient needs with adjustable intensity, duration, and coverage area settings.',
      icon: (
        <svg className="w-12 h-12 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Ergonomic Design',
      description: 'Our equipment is designed with both patient comfort and clinical efficiency in mind, with intuitive controls and adjustable components.',
      icon: (
        <svg className="w-12 h-12 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Safety Features',
      description: 'Built-in safeguards include automatic shutoff, exposure monitoring, and protective shields to ensure patient and operator safety.',
      icon: (
        <svg className="w-12 h-12 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Treatment Tracking',
      description: 'Digital tracking of treatment parameters, sessions, and patient response for thorough documentation and outcome analysis.',
      icon: (
        <svg className="w-12 h-12 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Integration Capabilities',
      description: 'Seamlessly connects with electronic health records and practice management systems for streamlined workflow and documentation.',
      icon: (
        <svg className="w-12 h-12 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Page Header Banner */}
        <section className="relative h-[350px] bg-blue-600 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-500/90 z-10"></div>
          <div className="absolute inset-0 z-0">
            {/* Background image would go here */}
            <div className="h-full w-full bg-blue-600"></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
          <div className="relative z-20 text-center text-white max-w-4xl px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Phototherapy Equipment</h1>
            <p className="text-xl text-white/90">State-of-the-art phototherapy solutions for optimal treatment outcomes</p>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-20 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                  <span className="text-blue-600">Advanced</span> Phototherapy Solutions
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Helix Processing offers cutting-edge phototherapy equipment designed to deliver precise light therapy for a variety of therapeutic applications. Our systems combine innovative technology with user-friendly design to provide reliable and effective treatment options.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Whether you're looking for full-body treatment cabins, targeted treatment panels, or portable units, our range of phototherapy equipment provides medical professionals with versatile options to meet diverse clinical needs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Precision Technology</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Clinical-Grade Quality</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">User-Friendly Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Comprehensive Support</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
                <div className="bg-blue-500 rounded-full p-8 text-white">
                  <svg className="w-48 h-48" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Types */}
        <section className="py-20 px-6 md:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-800">
                Our <span className="text-blue-600">Equipment</span> Range
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive phototherapy solutions for various clinical applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 mb-6 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Full-Body Cabins</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive treatment cabins for full-body phototherapy with 360° light coverage and adjustable intensity settings.
                </p>
                <Button className="text-blue-500 bg-transparent hover:bg-blue-50 p-0 h-auto font-medium">
                  View Details
                </Button>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 mb-6 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Panel Systems</h3>
                <p className="text-gray-600 mb-6">
                  Targeted treatment panels for localized therapy with adjustable positioning and multiple wavelength options.
                </p>
                <Button className="text-blue-500 bg-transparent hover:bg-blue-50 p-0 h-auto font-medium">
                  View Details
                </Button>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 mb-6 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Portable Units</h3>
                <p className="text-gray-600 mb-6">
                  Compact and lightweight devices for versatile application in various clinical settings or home treatment programs.
                </p>
                <Button className="text-blue-500 bg-transparent hover:bg-blue-50 p-0 h-auto font-medium">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-800">
                Key <span className="text-blue-600">Features</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our phototherapy equipment is designed with advanced technology and user experience in mind
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clinical Applications */}
        <section className="py-20 px-6 md:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-800">
                Clinical <span className="text-blue-600">Applications</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our phototherapy equipment supports a wide range of therapeutic applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Dermatological Conditions</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Psoriasis treatment with narrow-band UVB</li>
                  <li>Vitiligo management with targeted phototherapy</li>
                  <li>Eczema and atopic dermatitis therapy</li>
                  <li>Treatment of cutaneous T-cell lymphoma</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Neonatal Care</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Treatment of neonatal jaundice</li>
                  <li>Phototherapy for hyperbilirubinemia</li>
                  <li>LED technology for gentle and effective treatment</li>
                  <li>Adjustable intensity for personalized care</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Light Therapy</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Seasonal affective disorder (SAD) treatment</li>
                  <li>Sleep disorder management</li>
                  <li>Circadian rhythm regulation</li>
                  <li>Mood enhancement therapy</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Specialized Applications</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Wound healing acceleration</li>
                  <li>Pain management through photobiomodulation</li>
                  <li>Anti-inflammatory therapy</li>
                  <li>Research applications with customizable parameters</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-800">
                Related <span className="text-blue-600">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our other services that complement our phototherapy equipment
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg border border-gray-100 p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 mb-6 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Custom Equipment</h3>
                <p className="text-gray-600 mb-6">Tailored solutions designed to meet your specific clinical needs with customizable features.</p>
                <Link href="/services/custom-equipment" prefetch={true} scroll={true} passHref>
                  <div onClick={() => window.location.href = '/services/custom-equipment'} className="text-blue-500 font-medium hover:text-blue-600 flex items-center cursor-pointer">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </Link>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-100 p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 mb-6 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Equipment Leasing</h3>
                <p className="text-gray-600 mb-6">Flexible leasing options for our range of phototherapy equipment, making it accessible for practices of all sizes.</p>
                <Link href="/services/equipment-leasing" prefetch={true} scroll={true} passHref>
                  <div onClick={() => window.location.href = '/services/equipment-leasing'} className="text-blue-500 font-medium hover:text-blue-600 flex items-center cursor-pointer">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </Link>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-100 p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-indigo-100 w-16 h-16 mb-6 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Support & Maintenance</h3>
                <p className="text-gray-600 mb-6">Comprehensive support and maintenance services to ensure your equipment operates at peak performance.</p>
                <Link href="/services/support-and-maintenance" prefetch={true} scroll={true} passHref>
                  <div onClick={() => window.location.href = '/services/support-and-maintenance'} className="text-indigo-500 font-medium hover:text-indigo-600 flex items-center cursor-pointer">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </Link>
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
                  Ready to enhance your practice with advanced phototherapy?
                </h2>
                <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto">
                  Contact us today to discuss our phototherapy equipment options and find the perfect solution for your clinical needs.
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
                  <Link href="/services" prefetch={true} scroll={true} passHref>
                    <Button 
                      onClick={() => window.location.href = '/services'}
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/60 font-medium py-6 px-10 text-lg rounded-full"
                      size="lg"
                    >
                      View All Services
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

export default PhototherapyEquipmentPage;