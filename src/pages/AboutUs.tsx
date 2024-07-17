// AboutUs.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 bg-gradient-to-r from-white to-pink-200 flex items-center justify-center">
        <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-black mb-8">About Us</h1>
          <div className="text-lg text-gray-900">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida, justo ut
              tristique lobortis, est purus efficitur ipsum, a ultrices turpis odio eget augue.
            </p>
            <p>
              Nunc in purus eget ligula suscipit rutrum. Proin eget sapien ut metus iaculis tempus
              sit amet sed odio.
            </p>
            <p>
              Fusce id fermentum mi. In hac habitasse platea dictumst. Aenean at luctus metus.
              Praesent euismod metus ut magna sollicitudin ultricies.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
