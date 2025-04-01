'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

const PhototherapyGuidePage = () => {
  return (
    <main>
      {/* Page Header Banner */}
      <section className="relative h-[300px] bg-yellow-500 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/90 to-amber-600/90 z-10"></div>
        <div className="absolute inset-0 z-0">
          {/* Background image would go here */}
          <div className="h-full w-full bg-yellow-500"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
        <div className="relative z-20 text-center text-white max-w-4xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Phototherapy Guide</h1>
          <p className="text-xl text-white/90">Understanding Phototherapy Equipment</p>
        </div>
      </section>

      {/* Resource Content */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Main Content */}
            <div className="md:w-2/3">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">About Phototherapy</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Phototherapy, also known as light therapy, is a treatment that uses specific wavelengths of light to treat various medical conditions. It has been widely used in the treatment of skin disorders, mood disorders, sleep disorders, and certain types of cancers.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At Helix Processing, we provide state-of-the-art phototherapy equipment designed with precision to deliver optimal results for various treatment needs. Our equipment is engineered to meet the highest standards of quality and safety.
                </p>
              </div>
              
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Types of Phototherapy</h2>
                <div className="space-y-6">
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Ultraviolet (UV) Phototherapy</h3>
                    <p className="text-gray-700">Uses UV light to treat skin conditions like psoriasis, eczema, and vitiligo. Available in UVA and UVB options depending on the treatment requirements.</p>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Blue Light Therapy</h3>
                    <p className="text-gray-700">Primarily used for treating neonatal jaundice in newborns. The blue light helps break down bilirubin in the baby's blood, allowing it to be excreted.</p>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Red Light Therapy</h3>
                    <p className="text-gray-700">Used for promoting wound healing, reducing inflammation, and addressing certain skin conditions. It can also help with pain management and muscle recovery.</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Benefits of Phototherapy</h2>
                <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
                  <li>Non-invasive treatment option with minimal side effects</li>
                  <li>Effective for a wide range of conditions</li>
                  <li>Can be used as a standalone treatment or in combination with other therapies</li>
                  <li>Sessions are typically quick and painless</li>
                  <li>Can reduce the need for medication in certain conditions</li>
                  <li>Cost-effective over the long term</li>
                </ul>
              </div>
              
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Phototherapy Equipment</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
                    <div className="h-48 bg-yellow-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-800">MediLight Pro Series</h3>
                      <p className="text-gray-600 mb-4">Professional-grade full-spectrum phototherapy system for clinical use.</p>
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
                        View Details
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
                    <div className="h-48 bg-blue-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-800">BiliTouch System</h3>
                      <p className="text-gray-600 mb-4">Specialized neonatal phototherapy system for treating jaundice.</p>
                      <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Usage Instructions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Before Using Phototherapy Equipment</h3>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="relative" style={{ paddingTop: '56.25%' }}>
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-center text-gray-500 mt-2">Video: How to Prepare for Phototherapy Treatment</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">During Treatment</h3>
                    <p className="text-gray-700 mb-4">For optimal results, follow these guidelines during treatment:</p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Ensure the treatment area is clean and dry</li>
                      <li>Wear the provided protective eyewear</li>
                      <li>Maintain the recommended distance from the light source</li>
                      <li>Follow the prescribed treatment duration</li>
                      <li>Report any discomfort immediately</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="md:w-1/3 mt-12 md:mt-0">
              <div className="bg-gray-50 rounded-lg p-6 mb-8 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-gray-800">In This Guide</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-yellow-600 hover:text-yellow-700 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      About Phototherapy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-yellow-600 hover:text-yellow-700 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Types of Phototherapy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-yellow-600 hover:text-yellow-700 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Benefits of Phototherapy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-yellow-600 hover:text-yellow-700 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Our Phototherapy Equipment
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-yellow-600 hover:text-yellow-700 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Usage Instructions
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Related Resources</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-700 hover:text-yellow-600 block">
                      <div className="font-medium">Equipment Maintenance Guide</div>
                      <div className="text-sm text-gray-500">How to care for your phototherapy equipment</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-yellow-600 block">
                      <div className="font-medium">Treatment Protocols</div>
                      <div className="text-sm text-gray-500">Standard protocols for various conditions</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-yellow-600 block">
                      <div className="font-medium">Case Studies</div>
                      <div className="text-sm text-gray-500">Real-world applications and results</div>
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Need Help?</h3>
                <p className="text-gray-700 mb-6">Our support team is available 24/7 to assist with any questions about our phototherapy equipment.</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PhototherapyGuidePage;