import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import HeroSection from './components/heroSection'
import DemoVideo from './components/demoVideo'
import Benifits from './components/benifits'
import CoreFeatures from './components/coreFeatures'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <DemoVideo/>
      <Benifits/>
      <CoreFeatures/>
    </>
  )
}

export default App
