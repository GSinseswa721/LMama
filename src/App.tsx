import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Testimonials from './pages/Testimonials';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/testimonials" element={<Testimonials/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signup" element={<Signup/>} />

        {/* <Route path="/signup" element={<SignUp />} /> */}
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
