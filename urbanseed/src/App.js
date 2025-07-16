import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import OurIdea from './components/OurIdea';
import Projects from './components/Projects';
import Calculator from './components/Calculator';
import Contact from './components/Contact';
import SignUp from './components/SignUp';

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <ScrollToTop />
                <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                    <Navbar />
                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/our-idea" element={<OurIdea />} />
                            <Route path="/how-it-works" element={<div className="py-12 bg-white dark:bg-gray-900"><h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">How It Works</h2></div>} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/calculator" element={<Calculator />} />
                            <Route path="/plans" element={<div className="py-12 bg-white dark:bg-gray-900"><h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Investment Plans</h2></div>} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/signup" element={<SignUp />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;