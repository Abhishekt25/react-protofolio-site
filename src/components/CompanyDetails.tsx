import React from 'react';

interface Service {
  title: string;
  description: string;
  icon: string;
}

const CompanyDetails: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Networking & Surveillance',
      description:
        'Expert setup of networking solutions and surveillance systems to keep your business connected and secure.',
      icon: '🌐',
    },
    {
      title: 'CCTV Installation & Repair',
      description:
        'Professional installation and maintenance of CCTV cameras for homes, offices, and commercial spaces.',
      icon: '📹',
    },
    {
      title: 'Laptop & Desktop Services',
      description:
        'Repairing, servicing, and refurbishing laptops and desktops to keep your systems running smoothly.',
      icon: '💻',
    },
    {
      title: 'Security Solutions',
      description:
        'Installation of biometric devices, access control systems, and advanced security solutions.',
      icon: '🔒',
    },
    {
      title: 'Smart TV & LED Setup',
      description:
        'Installation and configuration of Smart Google TV & LEDs ranging from 24" to 110".',
      icon: '📺',
    },
    {
      title: 'Web Design & Development',
      description:
        'Custom websites, web apps, and ongoing maintenance to build your online presence.',
      icon: '🖥️',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Our Services
        </h2>
        <p className="max-w-3xl mx-auto text-center text-lg text-gray-600 mb-12">
          At All IT Goods, we provide end-to-end IT infrastructure and
          development solutions — from hardware services and security systems to
          full-stack web development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl text-center transition-transform hover:scale-105 hover:shadow-lg shadow-md"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyDetails;
