const ServicesSection = () => {
  const services = [
    {
      title: 'AI Customer Support',
      description: 'Our offshore AI customer support team provides 24/7 assistance for all your needs, ensuring prompt and efficient service.',
      icon: (
        <svg className="w-16 h-16 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
      imageUrl: '/globe.svg'
    },
    {
      title: 'Phototherapy Equipment',
      description: 'State-of-the-art phototherapy equipment designed with precision to deliver optimal results for various treatment needs.',
      icon: (
        <svg className="w-16 h-16 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      imageUrl: '/file.svg'
    },
    {
      title: 'Custom Equipment',
      description: 'Tailored solutions designed to meet your specific needs with customizable features and configurations.',
      icon: (
        <svg className="w-16 h-16 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      imageUrl: '/window.svg'
    },
    {
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge AI technology integrated with your business processes to optimize operations and enhance efficiency.',
      icon: (
        <svg className="w-16 h-16 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      imageUrl: '/file.svg'
    },
    {
      title: 'Equipment Leasing',
      description: 'Flexible leasing options for our range of equipment, making it accessible for businesses of all sizes.',
      icon: (
        <svg className="w-16 h-16 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      imageUrl: '/file.svg'
    },
    {
      title: 'Support & Maintenance',
      description: 'Comprehensive support and maintenance services to ensure your equipment operates at peak performance.',
      icon: (
        <svg className="w-16 h-16 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      imageUrl: '/file.svg'
    },
  ];

  return (
    <section id="services" className="py-28 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            How can we <span className="bg-gradient-to-r from-primary to-indigo-400 text-transparent bg-clip-text">care for you?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            We care for you and your business needs.
          </p>
        </div>
        
        <div className="mb-20">
          <p className="text-lg text-center md:text-left text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Helix Processing is the premier provider for AI-powered solutions and equipment. With complete product selection and a superior commitment to customer service, Helix Processing can supply customers with all types of equipment and solutions for a variety of needs. We work hand-in-hand with businesses to determine requirements that help us identify the right products for your individual needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group"
            >
              <div className="mb-6 text-primary">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a 
                href="#" 
                className="inline-flex items-center text-primary font-medium group-hover:text-primary/80 transition-colors"
              >
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;