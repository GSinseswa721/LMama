import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TestimonialForm from './TestimonialForm';

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<string[]>([]);

  // Function to load testimonials from local storage on component mount
  useEffect(() => {
    const storedTestimonials = localStorage.getItem('testimonials');
    if (storedTestimonials) {
      setTestimonials(JSON.parse(storedTestimonials));
    }
  }, []);

  // Function to add a new testimonial to state and local storage
  const addTestimonial = (testimonial: string) => {
    const updatedTestimonials = [...testimonials, testimonial];
    setTestimonials(updatedTestimonials);
    localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 bg-gradient-to-r from-white to-pink-200 flex items-center justify-center">
        <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 mt-32">
          <div className="mb-8"> {/* Added wrapper div with margin bottom */}
            <TestimonialForm onSubmit={addTestimonial} />
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Recent Testimonials</h2>
            {testimonials.length === 0 ? (
              <p className="text-gray-600">No testimonials yet.</p>
            ) : (
              <ul className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <li key={index} className="bg-white shadow-md p-4 rounded-lg">
                    <p className="text-gray-900">{testimonial}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Testimonials;
