import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import ContactForm from './components/ContactForm/ContactForm';
import Logos from './components/Logos/Logos';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';
import Recommendation from './components/Recommendations/Recommendation';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/home"
          element={
            <div className='flex flex-col gap-4 project-bg'>
              <Hero />
              <Projects />
              <Recommendation />
              <ContactForm />
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div className='flex flex-col gap-4 project-bg'>
              <Hero />
              <Projects />
              <Recommendation />
              <ContactForm />
            </div>
          }
        />
        <Route path="/skills" element={<Skills />} />
        {/* Add more routes here as needed */}
      </Routes>
      <Logos />
      <Footer />
    </Router>
  );
}

export default App;
