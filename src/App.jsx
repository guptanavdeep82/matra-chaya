import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-navy">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
