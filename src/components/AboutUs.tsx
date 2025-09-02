import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const AboutUs: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      bio: 'With over 15 years of experience in the IT industry, John leads our company with vision and expertise.',
      image: '/src/assets/images/about-us.jpg'
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      bio: 'Jane is responsible for our technical strategy and ensuring we deliver cutting-edge solutions to our clients.',
      image: '/src/assets/images/about-us.jpg'
    },
    {
      name: 'Mike Johnson',
      role: 'Head of Development',
      bio: 'Mike oversees our development teams and ensures projects are delivered on time and to the highest standards.',
      image: '/src/assets/images/about-us.jpg'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-secondary mb-6">About Our Company</h2>
        <p className="max-w-3xl mx-auto text-center text-lg mb-12">
          Founded in 2010, we have been providing exceptional IT services to businesses of all sizes. 
          Our team of experts is dedicated to helping you navigate the complex world of technology.
        </p>
        
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-center text-secondary mb-12">Meet Our Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-36 h-36 rounded-full object-cover mx-auto mb-4"
                />
                <h4 className="text-xl font-bold text-secondary">{member.name}</h4>
                <p className="text-primary font-bold mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;