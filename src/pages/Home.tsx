import React from 'react';
import backgroundImage from '../img/im4.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer'; 
const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute inset-0 bg-blue-900 opacity-50"></div> {/* Blue transparent overlay */}
        <div className="relative bg-white bg-opacity-75 max-w-4xl mx-auto p-4 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-center mb-4">Welcome to LMama</h1>
          <p className="text-lg text-center">
            A comprehensive resource library, direct access to mental health professionals, community forums for peer support, and personalized guidance based on your needs.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
