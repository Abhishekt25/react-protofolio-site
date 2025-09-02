import React from 'react';

interface Service {
  title: string;
  description: string;
  icon: string;
}

const CompanyDetails: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Web Development',
      description: 'Custom web applications tailored to your business needs.',
      icon: '💻'
    },
    {
      title: 'Mobile Apps',
      description: 'iOS and Android applications to reach your customers anywhere.',
      icon: '📱'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure for your growing business.',
      icon: '☁️'
    },
    {
      title: 'IT Consulting',
      description: 'Expert advice to optimize your technology strategy.',
      icon: '📊'
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your business from digital threats.',
      icon: '🔒'
    },
    {
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights.',
      icon: '📈'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-secondary mb-6">Our Services</h2>
        <p className="max-w-3xl mx-auto text-center text-lg mb-12">
          We offer a comprehensive range of IT services designed to help your business thrive in the digital landscape.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-lg text-center transition-transform hover:scale-105 hover:shadow-lg"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CompanyDetails;