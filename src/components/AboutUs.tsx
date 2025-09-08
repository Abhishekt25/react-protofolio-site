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
      name: 'Arpit Parashar',
      role: 'CEO & Founder',
      bio: 'Arpit drives the vision of All IT Goods and brings over 5 years of experience in IT infrastructure, consulting, and business strategy.',
      image: '/images/arpit.jpg',
    },
    {
      name: 'Hemant Sharma',
      role: 'Sales and Tech Head',
      bio: 'Hemant is an expert in networking, surveillance, and IT infrastructure solutions. He ensures that clients get the best consultation and services for their business needs.',
      image: '/images/hemant.jpg',
    },
    {
      name: 'Abhishek Tiwari',
      role: 'Software Development Head',
      bio: 'Abhishek leads the software development division, specializing in web design, web app development, and custom IT solutions that help businesses scale efficiently.',
      image: '/images/abhisheks.jpg',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About Our Company
        </h2>
        <p className="max-w-3xl mx-auto text-center text-lg text-gray-600 mb-12">
          Founded in 2020, All IT Goods is your trusted partner for IT
          infrastructure, networking, surveillance, and software solutions. We
          provide desktop and laptop services, CCTV installation, biometric
          security solutions, and full-stack web development — helping
          businesses stay secure, connected, and future-ready.
        </p>

        {/* Leadership Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-center text-gray-800 mb-12">
            Meet Our Leadership Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg text-center max-w-xs hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-36 h-36 rounded-full object-cover mx-auto mb-4 border-4 border-gray-100 shadow-md"
                />
                <h4 className="text-xl font-bold text-gray-800">
                  {member.name}
                </h4>
                <p className="text-indigo-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
