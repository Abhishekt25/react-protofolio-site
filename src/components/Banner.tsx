import React from 'react';

const Banner: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative bg-[url('/src/assets/images/banner.jpg')] bg-cover bg-center text-white text-center pt-32 pb-40"
      style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Innovative IT Solutions for Your Business</h1>
          <p className="text-xl mb-8">
            We provide cutting-edge technology services to help your company grow and succeed in the digital age.
          </p>
          <a 
            href="#services" 
            className="inline-block bg-primary hover:bg-blue-700 text-white font-medium py-3 px-6 rounded transition-colors"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;