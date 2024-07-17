import React, { useState } from 'react';

interface TestimonialFormProps {
  onSubmit: (testimonial: string) => void;
}

const TestimonialForm: React.FC<TestimonialFormProps> = ({ onSubmit }) => {
  const [testimonial, setTestimonial] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(testimonial); // Call onSubmit function passed from parent component
    setTestimonial(''); // Clear input field after submission
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white bg-opacity-75 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Add Your Testimonial</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="Write your testimonial..."
          value={testimonial}
          onChange={(e) => setTestimonial(e.target.value)}
          rows={5}
        ></textarea>
        <button
          type="submit"
          className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-md transition duration-300"
        >
          Submit Testimonial
        </button>
      </form>
    </div>
  );
};

export default TestimonialForm;
