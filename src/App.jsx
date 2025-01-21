import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@fortawesome/fontawesome-free/css/all.min.css";


import './App.css'
import ParticlesComponent from './components/Particles'
import MyNavbar from "./components/MyNavbar";
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Education from './components/Education'
import Contacts from './components/Contacts'
import MyFooter from "./components/MyFooter";


function App() {

    return (
        <>
            <ParticlesComponent />
            <MyNavbar />
            <Hero />
            <About />
            <Skills />
            <Services />
            <Portfolio />
            <Education />
            <Contacts />
            <MyFooter />
        </>
    )
}

export default App
