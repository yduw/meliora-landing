'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="contact md:max-w-xs">
            <h3 className="text-xl font-bold mb-6">Corporate</h3>
            <p className="mb-2 text-gray-300">123 Tech Avenue,</p>
            <p className="mb-2 text-gray-300">San Francisco, CA 94107</p>
            <p className="mt-6">
              <Link href="/contact" className="text-primary hover:underline transition-colors">
                View our other offices & dispatch locations
              </Link>
            </p>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <p className="mb-3 text-gray-300">
              <span className="font-semibold">Of.</span> (877) 555-1234
            </p>
            <p className="mb-3 text-gray-300">
              <span className="font-semibold">Ph.</span> (415) 555-5678
            </p>
            <p className="mb-3 text-gray-300">
              <span className="font-semibold">Fx.</span> (415) 555-9012
            </p>
            <p className="mb-2">
              Email: <a href="mailto:info@helixprocessing.com" className="text-primary hover:underline transition-colors">info@helixprocessing.com</a>
            </p>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <Link href="/services" className="mb-3 text-gray-300 hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/resources" className="mb-3 text-gray-300 hover:text-primary transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="mb-3 text-gray-300 hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/contracts" className="mb-3 text-gray-300 hover:text-primary transition-colors">
              Customer Portal
            </Link>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6">Legal</h3>
            <Link href="/privacy" className="mb-3 text-gray-300 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="mb-3 text-gray-300 hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="mb-3 text-gray-300 hover:text-primary transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center justify-center mb-6 md:mb-0">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
              <div className="text-primary font-bold text-xl">H</div>
            </div>
            <p className="text-gray-400">© {new Date().getFullYear()} Helix Processing. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;