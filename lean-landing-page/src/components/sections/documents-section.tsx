'use client';

import React, { useState } from 'react';

const DocumentsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const documents = [
    {
      title: 'Patient Intake Forms',
      description: 'Extract patient demographics, insurance information, and medical history with high accuracy.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: 'Physician Referrals',
      description: 'Capture prescriber details, diagnosis codes, prescribed equipment, and therapy requirements.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: 'Certificates of Medical Necessity',
      description: 'Automatically process CMNs for oxygen, CPAP, hospital beds, and other DME equipment.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Insurance Cards',
      description: 'Extract member IDs, group numbers, plan information, and coverage details from insurance cards.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      title: 'Explanation of Benefits',
      description: 'Process EOB documents to update patient accounts and reconcile payments.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: 'Prior Authorization Forms',
      description: 'Extract required documentation for prior authorization submissions to payers.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
      )
    },
    {
      title: 'Sleep Study Reports',
      description: 'Process polysomnography reports for CPAP and BiPAP therapy qualifications.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: 'Proof of Delivery',
      description: 'Validate delivery confirmations for billing and compliance documentation.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-secondary/10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-primary to-indigo-400 text-transparent bg-clip-text">All-in-One</span> Intelligent Automation
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          HelixVision™ can extract structured data from virtually any healthcare document
        </p>
        
        <div className="flex flex-wrap justify-center items-start gap-6">
          {documents.map((doc, index) => (
            <div 
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className={`w-48 h-48 flex flex-col items-center justify-center p-6 transition-all duration-300 cursor-pointer
                  ${hoveredIndex === index ? 'scale-110 z-10' : 'scale-100 z-0'}
                  ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-50' : 'opacity-100'}`}
              >
                <div 
                  className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 transition-all duration-300
                    ${hoveredIndex === index 
                      ? 'bg-gradient-to-r from-primary to-indigo-400 text-white' 
                      : 'bg-white/80 text-primary shadow-md'}`}
                >
                  {doc.icon}
                </div>
                <h3 className="text-sm font-medium text-center">{doc.title}</h3>
                
                <div 
                  className={`absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20
                    transition-all duration-300 
                    ${hoveredIndex === index ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'}`}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-indigo-400 text-white">
                      {doc.icon}
                    </div>
                    <h3 className="font-medium mb-2 text-foreground">{doc.title}</h3>
                    <p className="text-xs text-muted-foreground">{doc.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;