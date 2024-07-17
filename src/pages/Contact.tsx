// Contact.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from './ContactForm';

const Contact: React.FC = () => {
  const handleSubmit = (formData: any) => {
    // Replace with your form submission logic (e.g., API call, state management)
    console.log(formData);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 bg-gradient-to-r from-white to-pink-200 flex items-center justify-center">
        <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-white mb-8">Contact Us</h1>
          <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-md ">
            <ContactForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
