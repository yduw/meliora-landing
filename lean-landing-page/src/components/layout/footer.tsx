'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="about" className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="contact">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">Ready to transform your DME workflow?</p>
            <p className="mb-2">
              Email: <a href="mailto:info@lean-ai.com" className="underline hover:text-white transition-colors">info@lean-ai.com</a>
            </p>
            <p>
              <Link href="#book-demo" className="underline hover:text-white transition-colors">
                Schedule a Demo
              </Link>
            </p>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <Link href="#about" className="mb-2 hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="#customer-stories" className="mb-2 hover:text-white transition-colors">
              Customer Stories
            </Link>
            <Link href="/careers" className="mb-2 hover:text-white transition-colors">
              Careers
            </Link>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <Link href="/blog" className="mb-2 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/emr-guide" className="mb-2 hover:text-white transition-colors">
              EMR Resource Guide
            </Link>
            <Link href="/privacy" className="mb-2 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-primary-foreground/20 text-center">
          <p>© {new Date().getFullYear()} Lean AI, Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;