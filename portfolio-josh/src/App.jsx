import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import ContactForm from './components/ContactForm/ContactForm';
import Logos from './components/Logos/Logos';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Hero />
              <Projects />
            </>
          }
        />
        <Route
        path="/"
        element={
          <>
            <Hero />
            <Projects />
          </>
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
