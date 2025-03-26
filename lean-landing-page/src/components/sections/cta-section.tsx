import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section id="book-demo" className="py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary/90 to-primary rounded-2xl p-10 text-center shadow-xl text-primary-foreground">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Power Up Your DME Practice
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
          Ready to do more with less? Retrofit our AI solution to your existing stack in days, not months.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-white text-primary hover:bg-white/90 shadow-lg font-medium"
            size="lg"
          >
            Book a Demo
          </Button>
          <Button 
            className="bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/20 font-medium"
            size="lg"
          >
            Request Information
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;