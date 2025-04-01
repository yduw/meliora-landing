'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/layout/navbar'), { ssr: true });
const Footer = dynamic(() => import('@/components/layout/footer'), { ssr: true });


const ResourcesPage = () => {
  const resources = [
    {
      title: 'Phototherapy Guide',
      description: 'Comprehensive guide to understanding phototherapy equipment and its applications.',
      icon: (
        <svg className="w-10 h-10 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      type: 'Guide',
      category: 'Equipment'
    },
    {
      title: 'PAP Therapy',
      description: 'Learn about Positive Airway Pressure therapy and treatment options.',
      icon: (
        <svg className="w-10 h-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      type: 'Video',
      category: 'Therapy'
    },
    {
      title: 'AI Support System Manual',
      description: 'Technical documentation for our AI customer support platform.',
      icon: (
        <svg className="w-10 h-10 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      type: 'Manual',
      category: 'Support'
    },
    {
      title: 'Equipment Maintenance Tips',
      description: 'Best practices for maintaining and extending the life of your equipment.',
      icon: (
        <svg className="w-10 h-10 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      type: 'Guide',
      category: 'Maintenance'
    },
    {
      title: 'Customer Support FAQ',
      description: 'Frequently asked questions about our customer support services.',
      icon: (
        <svg className="w-10 h-10 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      type: 'FAQ',
      category: 'Support'
    },
    {
      title: 'Equipment Setup Guide',
      description: 'Step-by-step instructions for setting up your new equipment.',
      icon: (
        <svg className="w-10 h-10 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      type: 'Guide',
      category: 'Equipment'
    }
  ];

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
          <p className="text-xl text-white/90">Helpful guides and information</p>
        </div>
      </section>

      {/* Resources Introduction */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-800">
              Knowledge <span className="text-blue-600">Center</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access guides, manuals, and videos to help you get the most out of our products and services.
            </p>
          </div>

          {/* Resource Categories */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Resource Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="bg-blue-100 text-blue-600 hover:bg-blue-200 py-3 px-6 rounded-full font-medium">Equipment</button>
              <button className="bg-green-100 text-green-600 hover:bg-green-200 py-3 px-6 rounded-full font-medium">Therapy</button>
              <button className="bg-purple-100 text-purple-600 hover:bg-purple-200 py-3 px-6 rounded-full font-medium">Support</button>
              <button className="bg-orange-100 text-orange-600 hover:bg-orange-200 py-3 px-6 rounded-full font-medium">Maintenance</button>
            </div>
          </div>

          {/* Featured Resources */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Featured Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-yellow-50 rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-yellow-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="p-6">
                  <span className="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">Equipment</span>
                  <h3 className="text-xl font-bold mt-3 mb-2 text-gray-800">Phototherapy Guide</h3>
                  <p className="text-gray-600 mb-4">Comprehensive guide to understanding phototherapy equipment and its applications.</p>
                  <Link href="/resources/phototherapy-guide" className="text-yellow-600 font-medium hover:text-yellow-700 flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <svg className="w-20 h-20 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="p-6">
                  <span className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">Therapy</span>
                  <h3 className="text-xl font-bold mt-3 mb-2 text-gray-800">PAP Therapy</h3>
                  <p className="text-gray-600 mb-4">Learn about Positive Airway Pressure therapy and treatment options.</p>
                  <Link href="/resources/pap-therapy" className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
                    Watch Video
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-purple-100 flex items-center justify-center">
                  <svg className="w-20 h-20 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <span className="bg-purple-200 text-purple-800 text-xs px-2 py-1 rounded-full font-medium">Support</span>
                  <h3 className="text-xl font-bold mt-3 mb-2 text-gray-800">AI Support System Manual</h3>
                  <p className="text-gray-600 mb-4">Technical documentation for our AI customer support platform.</p>
                  <Link href="/resources/ai-support-manual" className="text-purple-600 font-medium hover:text-purple-700 flex items-center">
                    Download PDF
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* All Resources */}
          <div id="guides" className="scroll-mt-28">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">All Resources</h3>
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Resource
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {resources.map((resource, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            {resource.icon}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{resource.title}</div>
                            <div className="text-sm text-gray-500">{resource.description}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                          {resource.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {resource.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a href={`/resources/${resource.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-indigo-600 hover:text-indigo-900">
                          View
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 md:px-12 bg-white scroll-mt-28">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-gray-800">How do I get started with your services?</h3>
              <p className="text-gray-600">Getting started is easy! Simply contact our team through the contact page, and we'll schedule a consultation to understand your needs and recommend the best solutions.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-gray-800">What types of equipment do you offer?</h3>
              <p className="text-gray-600">We offer a wide range of equipment including phototherapy devices, AI-powered support systems, and custom solutions tailored to your specific requirements.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-gray-800">How does your customer support work?</h3>
              <p className="text-gray-600">Our customer support team is available 24/7 through multiple channels including phone, email, and live chat. We provide both AI-assisted and human support to ensure your questions are answered promptly.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Do you offer equipment leasing options?</h3>
              <p className="text-gray-600">Yes, we offer flexible leasing options for businesses of all sizes. Our leasing plans include maintenance and support to ensure your equipment operates at peak performance.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Can I upgrade my existing equipment?</h3>
              <p className="text-gray-600">Absolutely! We offer upgrades and enhancements to existing equipment. Contact our team to discuss your current setup and potential upgrade options.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Subscribe to Our Newsletter</h2>
          <p className="text-lg text-gray-600 mb-8">
            Stay updated with our latest resources, guides, and industry news.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 md:min-w-[300px]"
            />
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </main>
      <Footer />
    </>
  );
};

export default ResourcesPage;