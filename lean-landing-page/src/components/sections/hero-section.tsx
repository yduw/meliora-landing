import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-10 px-6 md:px-12 bg-gradient-to-br from-background to-secondary/10">
      <div className="max-w-5xl mx-auto text-center md:text-left grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
            AI-powered DME workflows that <span className="text-primary">scale with you</span>
          </h1>
          <p className="text-xl mb-8 text-muted-foreground max-w-xl">
            <span className="font-semibold">LeanVision™</span> is our proprietary vision language model trained on millions of DME documents – 
            <span className="italic block mt-2 text-primary font-medium">Retrofit to any stack, transform your operations</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button variant="cta" size="lg">
              Book a Demo
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
        <div className="hidden md:block bg-muted/30 rounded-xl border border-border p-8 shadow-lg">
          <div className="aspect-square max-w-sm mx-auto bg-card p-4 rounded-lg shadow-sm flex flex-col">
            <div className="w-full h-24 bg-muted rounded-md mb-4"></div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-primary mr-3"></div>
              <div>
                <div className="w-32 h-3 bg-muted rounded-full"></div>
                <div className="w-20 h-2 bg-muted/60 mt-2 rounded-full"></div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <div className="w-full h-3 bg-muted rounded-full"></div>
              <div className="w-5/6 h-3 bg-muted rounded-full"></div>
              <div className="w-4/6 h-3 bg-muted rounded-full"></div>
            </div>
            <div className="mt-4 flex justify-between">
              <div className="w-20 h-8 bg-primary rounded-md"></div>
              <div className="w-20 h-8 bg-muted rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;