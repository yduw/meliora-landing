'use client';

import { Button } from '@/components/ui/button';
import { useState, useRef, useEffect } from 'react';

const WorkflowSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );
    
    const currentRef = timelineRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  // Auto-advance through steps when in view
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isInView, steps.length]);

  const steps = [
    {
      number: '1',
      title: 'Classify',
      description: 'Whether it\'s new or existing patient information, we classify and route documents appropriately.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      number: '2',
      title: 'Intake',
      description: 'Extract patient demographics, insurance details, prescriptions, and diagnosis information automatically.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      number: '3',
      title: 'Request Missing Information',
      description: 'Identify incomplete forms and automatically request additional documentation from patients or providers.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: '4',
      title: 'Determine Eligibility',
      description: 'Verify insurance coverage and benefits with automated eligibility checks based on extracted information.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      number: '5',
      title: 'Seek Prior Authorization',
      description: 'Generate and submit prior authorization requests with supporting documentation to payers.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: '6',
      title: 'Approve',
      description: 'Once all documentation and approvals are in place, complete the intake process and approve the patient order.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-white/80 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Automate Your Workflows <span className="bg-gradient-to-r from-primary to-indigo-400 text-transparent bg-clip-text">End-to-End</span>
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          Retrofit our intelligent automation to your existing stack and transform your entire patient journey
        </p>
        
        <div 
          ref={timelineRef}
          className="relative flex flex-col items-center"
        >
          {/* Timeline line */}
          <div className="absolute h-full w-1 bg-gradient-to-b from-white via-primary/50 to-indigo-400/50 left-1/2 transform -translate-x-1/2"></div>
          
          {/* Steps */}
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} w-full items-center mb-16 last:mb-0`}
            >
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16'}`}>
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    activeStep === index 
                      ? 'opacity-100 translate-y-0' 
                      : index < activeStep 
                        ? 'opacity-60 -translate-y-2' 
                        : 'opacity-40 translate-y-2'
                  }`}
                >
                  <h3 className={`text-2xl font-bold mb-2 ${
                    activeStep === index 
                      ? 'bg-gradient-to-r from-primary to-indigo-400 text-transparent bg-clip-text' 
                      : ''
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
              
              {/* Circle */}
              <div className="w-2/12 flex justify-center z-20">
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                    activeStep === index 
                      ? 'bg-gradient-to-r from-primary to-indigo-400 text-white scale-110 shadow-lg' 
                      : index < activeStep 
                        ? 'bg-primary/70 text-white' 
                        : 'bg-white text-gray-500 border border-gray-200'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {step.icon}
                </div>
              </div>
              
              {/* Spacer */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="bg-white/80 hover:bg-white">
            Learn More About Our Workflow
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;