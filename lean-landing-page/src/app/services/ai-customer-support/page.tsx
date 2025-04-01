'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/layout/navbar'), { ssr: true });
const Footer = dynamic(() => import('@/components/layout/footer'), { ssr: true });

const AICustomerSupportPage = () => {
  const features = [
    {
      title: '24/7 AI-Powered Support',
      description: 'Our offshore team works around the clock to provide seamless customer support through advanced AI technology.',
      icon: (
        <svg className="w-12 h-12 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Multilingual Support',
      description: 'Our AI systems support multiple languages, ensuring global customers receive assistance in their preferred language.',
      icon: (
        <svg className="w-12 h-12 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      )
    },
    {
      title: 'Customizable Workflows',
      description: 'Tailor the customer support experience to match your brand voice and specific business requirements.',
      icon: (
        <svg className="w-12 h-12 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Real-time Analytics',
      description: 'Access detailed reports and analytics to monitor performance and continuously improve customer service.',
      icon: (
        <svg className="w-12 h-12 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Human-AI Collaboration',
      description: 'Our system combines the efficiency of AI with human expertise for complex inquiries requiring personalized attention.',
      icon: (
        <svg className="w-12 h-12 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Seamless Integration',
      description: 'Our AI support system integrates with your existing CRM, helpdesk, and other business tools for unified operations.',
      icon: (
        <svg className="w-12 h-12 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Page Header Banner */}
        <section className="relative h-[350px] bg-blue-600 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-500/90 z-10"></div>
          <div className="absolute inset-0 z-0">
            {/* Background image would go here */}
            <div className="h-full w-full bg-blue-600"></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
          <div className="relative z-20 text-center text-white max-w-4xl px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Customer Support</h1>
            <p className="text-xl text-white/90">24/7 offshore AI-powered customer support team dedicated to your success</p>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-20 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                  <span className="text-blue-600">Exceptional</span> Customer Support
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  At Helix Processing, we provide cutting-edge AI-powered customer support solutions that help businesses deliver exceptional service while reducing operational costs. Our offshore team works around the clock to ensure your customers receive prompt and effective assistance whenever they need it.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Unlike traditional customer support services, our AI-augmented approach combines the efficiency of artificial intelligence with human expertise, resulting in faster response times, more accurate solutions, and improved customer satisfaction.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">24/7 Availability</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Multi-channel Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Multilingual Capabilities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Advanced Analytics</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
                <div className="bg-blue-500 rounded-full p-8 text-white">
                  <svg className="w-48 h-48" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 px-6 md:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-800">
                Key <span className="text-blue-600">Features</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI customer support service comes with everything you need to provide exceptional customer experiences
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                  <div className="mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-800">
                How It <span className="text-blue-600">Works</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A seamless process designed for your business success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 text-white rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">1</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Consultation</h3>
                <p className="text-gray-600">We assess your business needs and customer support requirements.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">2</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Customization</h3>
                <p className="text-gray-600">We tailor our AI support system to match your brand voice and business processes.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-500 text-white rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">3</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Integration</h3>
                <p className="text-gray-600">We seamlessly integrate with your existing platforms and train our team.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">4</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Ongoing Support</h3>
                <p className="text-gray-600">We provide continuous optimization and ensure 24/7 customer satisfaction.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-6 md:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-800">
                <span className="text-blue-600">Benefits</span> of AI Customer Support
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the advantages of our innovative AI-powered approach
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Cost Efficiency</h3>
                <p className="text-gray-700 mb-2">Our AI-powered offshore solution can reduce your customer support costs by up to 60% compared to traditional in-house teams.</p>
                <p className="text-gray-700">With scalable pricing models, you only pay for what you need, whether it's 24/7 coverage or support during specific hours.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Enhanced Customer Satisfaction</h3>
                <p className="text-gray-700 mb-2">Our AI systems provide consistent, accurate responses that improve with each interaction, leading to higher customer satisfaction scores.</p>
                <p className="text-gray-700">Customers receive instant responses any time of day, eliminating frustrating wait times.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Scalability</h3>
                <p className="text-gray-700 mb-2">Easily scale your support capabilities up or down based on demand without the challenges of hiring or reducing staff.</p>
                <p className="text-gray-700">Handle sudden surges in customer inquiries without compromising quality or response times.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Data-Driven Insights</h3>
                <p className="text-gray-700 mb-2">Gain valuable insights into customer behavior, common issues, and satisfaction levels through detailed analytics.</p>
                <p className="text-gray-700">Use these insights to continuously improve your products, services, and customer experience.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-800">
                Related <span className="text-blue-600">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our other services that complement AI Customer Support
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg border border-gray-100 p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-indigo-100 w-16 h-16 mb-6 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">AI-Powered Solutions</h3>
                <p className="text-gray-600 mb-6">Advanced AI technology integrated with your business processes to optimize operations.</p>
                <Link href="/services/ai-powered-solutions" prefetch={true} scroll={true} passHref>
                  <div onClick={() => window.location.href = '/services/ai-powered-solutions'} className="text-indigo-500 font-medium hover:text-indigo-600 flex items-center cursor-pointer">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </Link>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-100 p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 mb-6 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Custom Equipment</h3>
                <p className="text-gray-600 mb-6">Tailored solutions designed to meet your specific needs with customizable features.</p>
                <Link href="/services/custom-equipment" prefetch={true} scroll={true} passHref>
                  <div onClick={() => window.location.href = '/services/custom-equipment'} className="text-blue-500 font-medium hover:text-blue-600 flex items-center cursor-pointer">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </Link>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-100 p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-indigo-100 w-16 h-16 mb-6 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Support & Maintenance</h3>
                <p className="text-gray-600 mb-6">Comprehensive support and maintenance services to ensure peak performance.</p>
                <Link href="/services/support-and-maintenance" prefetch={true} scroll={true} passHref>
                  <div onClick={() => window.location.href = '/services/support-and-maintenance'} className="text-indigo-500 font-medium hover:text-indigo-600 flex items-center cursor-pointer">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 md:px-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-500 rounded-lg p-16 text-center shadow-2xl text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-16 -mb-16"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to transform your customer support?
                </h2>
                <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto">
                  Contact us today to learn how our AI Customer Support team can help your business deliver exceptional service.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/contact" prefetch={true} scroll={true} passHref>
                    <Button 
                      onClick={() => window.location.href = '/contact'}
                      className="bg-white text-blue-600 hover:bg-white/90 shadow-lg font-medium py-6 px-10 text-lg rounded-full"
                      size="lg"
                    >
                      Contact Us
                    </Button>
                  </Link>
                  <Link href="/services" prefetch={true} scroll={true} passHref>
                    <Button 
                      onClick={() => window.location.href = '/services'}
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/60 font-medium py-6 px-10 text-lg rounded-full"
                      size="lg"
                    >
                      View All Services
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

export default AICustomerSupportPage;