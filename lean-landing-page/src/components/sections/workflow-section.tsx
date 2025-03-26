'use client';

import { Button } from '@/components/ui/button';

const WorkflowSection = () => {
  const steps = [
    {
      number: '1',
      title: 'Classify',
      description: 'Whether it\'s new or existing patient information, we classify and route documents appropriately.'
    },
    {
      number: '2',
      title: 'Intake',
      description: 'Extract patient demographics, insurance details, prescriptions, and diagnosis information automatically.'
    },
    {
      number: '3',
      title: 'Request Missing Information',
      description: 'Identify incomplete forms and automatically request additional documentation from patients or providers.'
    },
    {
      number: '4',
      title: 'Determine Eligibility',
      description: 'Verify insurance coverage and benefits with automated eligibility checks based on extracted information.'
    },
    {
      number: '5',
      title: 'Seek Prior Authorization',
      description: 'Generate and submit prior authorization requests with supporting documentation to payers.'
    },
    {
      number: '6',
      title: 'Approve',
      description: 'Once all documentation and approvals are in place, complete the intake process and approve the patient order.'
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Automate Your Workflows End-to-End
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Retrofit our intelligent automation to your existing stack and transform your entire patient journey:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-6 shadow-sm border border-border relative"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-medium mb-2 mt-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Learn More About Our Workflow
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;