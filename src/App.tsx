import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs';
import CompanyDetails from './components/CompanyDetails';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar/> 
      <Banner /> 
      <AboutUs />
      <CompanyDetails />
      <Contact />
      <Footer />

       
    </div>
  );
}

export default App;