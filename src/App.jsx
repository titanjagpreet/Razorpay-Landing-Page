import './App.css'
import { FeatureSectionOne } from './components/featureSection1'
import { FeatureSectionTwo } from './components/featureSection2'
import { HeroSection } from './components/heroSection'
import { Navbar } from './components/navbar'

export default function App() {

  return <>
  <Navbar/>
  <HeroSection/>
  <FeatureSectionOne/>
  <FeatureSectionTwo/>
  </>
}
