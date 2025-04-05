import React from 'react';
import { Header } from './components/Header';
import { About } from './components/About';
import { Program } from './components/Program';
import { SupportForm } from './components/SupportForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <About />
      <Program />
      <SupportForm />
      <Footer />
    </div>
  );
}

export default App;