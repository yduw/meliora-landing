'use client';

import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Lean AI's automation has completely transformed our workflow. We're now processing new patients in a fraction of the time it used to take, which has been a game-changer for our team.",
      author: "Darius Reid",
      position: "EVP of Sales, Total Medical Supply",
      company: "Total Medical Supply",
      companyDesc: "Provider of high-quality medical supplies to doctors and patients in 48 states.",
      avatar: (
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
          DR
        </div>
      ),
      logo: (
        <div className="h-10 w-32 rounded-md bg-primary/10 flex items-center justify-center">
          <span className="text-sm font-semibold text-primary">TMS</span>
        </div>
      )
    },
    {
      quote: "At my former company, we would manually take information off faxes, then type it in and use RPA to put it in the EMR system. Lean AI was that... times ten.",
      author: "Rob Bovee",
      position: "VP Operations, SleepMed",
      company: "SleepMed",
      companyDesc: "Leading provider of sleep disorder diagnostic and treatment services.",
      avatar: (
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
          RB
        </div>
      ),
      logo: (
        <div className="h-10 w-32 rounded-md bg-blue-50 flex items-center justify-center">
          <span className="text-sm font-semibold text-blue-600">SleepMed</span>
        </div>
      )
    },
    {
      quote: "This technology is a godsend. I will never go back. Over my dead body.",
      author: "Mike Austin",
      position: "President, Quality DME",
      company: "Quality DME",
      companyDesc: "Full-service DME provider specializing in respiratory and mobility equipment.",
      avatar: (
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl">
          MA
        </div>
      ),
      logo: (
        <div className="h-10 w-32 rounded-md bg-green-50 flex items-center justify-center">
          <span className="text-sm font-semibold text-green-600">Quality DME</span>
        </div>
      )
    }
  ];

  return (
    <section id="customer-stories" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Customer Stories
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Learn how these healthcare businesses transformed their operations with Lean AI:
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl shadow-sm p-8 border border-border flex flex-col"
            >
              <div className="flex-1">
                <blockquote className="text-lg italic mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center mb-6">
                  {testimonial.avatar}
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-border pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium">{testimonial.company}</h4>
                  {testimonial.logo}
                </div>
                <p className="text-sm text-muted-foreground mb-4">{testimonial.companyDesc}</p>
                <Button variant="outline" size="sm" className="w-full">
                  Read Case Study
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;