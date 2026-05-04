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
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      <Hero />
      <StatsStrip />
      <Countdown />
      <Features />
      <Scholarship />
      <Countries />
      <Timeline />
      <Eligibility />
      <Pattern />
      <Process />
      <About />
      <RegisterForm />
      <Gallery />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
