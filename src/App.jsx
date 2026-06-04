import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsStrip from './components/StatsStrip'
import Countdown from './components/Countdown'
import Features from './components/Features'
import Scholarship from './components/Scholarship'
import Countries from './components/Countries'
import Timeline from './components/Timeline'
import Eligibility from './components/Eligibility'
import Pattern from './components/Pattern'
import Process from './components/Process'
import About from './components/About'
import RegisterForm from './components/RegisterForm'
import LoginPage from './components/LoginPage'
import DashboardPage from './components/DashboardPage'
import AboutPage from './components/AboutPage'
import UniversityPage from './components/UniversityPage'
import HowItWorksPage from './components/HowItWorksPage'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Countdown />
      <Features />
      <Scholarship />
      <Countries />
      <Timeline />
      <Pattern />
      <Eligibility />
      <About />
      <Process />
      <Gallery />
      <RegisterForm />
      <FAQ />
      <Footer />
    </>
  );
}

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-navy">
        <ScrollToHash />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/universities" element={<UniversityPage />} />
          <Route path="/scholarship" element={<HowItWorksPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
