'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/layout/navbar'), { ssr: true });
const Footer = dynamic(() => import('@/components/layout/footer'), { ssr: true });


const ContactPage = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-xl text-white/90">Get in touch with our team</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="md:grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-800">Contact Info</h2>
              
              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Corporate</h3>
                <p className="mb-1 text-gray-700">123 Tech Avenue,</p>
                <p className="mb-6 text-gray-700">San Francisco, CA 94107</p>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-800">TELEPHONE</h3>
                <p className="mb-1 text-gray-700">
                  <span className="font-medium">Of.</span> (877) 555-1234
                </p>
                <p className="mb-1 text-gray-700">
                  <span className="font-medium">Ph.</span> (415) 555-5678
                </p>
                <p className="mb-6 text-gray-700">
                  <span className="font-medium">Fx.</span> (415) 555-9012
                </p>
                <p className="mb-6 text-gray-700">
                  <span className="font-medium">Email:</span> <a href="mailto:info@helixprocessing.com" className="text-blue-600 hover:underline">info@helixprocessing.com</a>
                </p>
              </div>
              
              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Business Hours</h3>
                <p className="mb-1 text-gray-700"><span className="font-medium">Monday - Friday:</span> 8:00 AM - 5:00 PM PT</p>
                <p className="mb-1 text-gray-700"><span className="font-medium">Saturday:</span> Closed</p>
                <p className="mb-6 text-gray-700"><span className="font-medium">Sunday:</span> Closed</p>
                <p className="text-gray-700">Support is available 24/7 through our customer portal</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                  </a>
                  <a href="#" className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                  <a href="#" className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="#" className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="mt-12 md:mt-0">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                
                <div>
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white py-3 px-8 rounded-full font-medium shadow-md"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Find Us</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="h-[400px] bg-gray-200 rounded-lg">
              {/* This would be replaced with an actual map */}
              <div className="h-full w-full flex items-center justify-center">
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-500">Interactive Map Would Appear Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-500 rounded-lg p-16 text-center shadow-2xl text-white overflow-hidden relative">
            {/* Background pattern/design element */}
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
                <Button 
                  className="bg-white text-blue-600 hover:bg-white/90 shadow-lg font-medium py-6 px-10 text-lg rounded-full transform transition-all active:scale-95"
                  size="lg"
                >
                  Send Message
                </Button>
                <Link href="/resources">
                  <Button 
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/60 font-medium py-6 px-10 text-lg rounded-full transform transition-all active:scale-95"
                    size="lg"
                  >
                    View Resources
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

export default ContactPage;