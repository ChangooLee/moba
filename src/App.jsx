import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Plan from './pages/Plan';
import Membership from './pages/Membership';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import './i18n';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/plan" element={<Plan />} />
                    <Route path="/membership" element={<Membership />} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;


