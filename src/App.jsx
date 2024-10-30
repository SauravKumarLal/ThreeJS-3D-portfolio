import About from './sections/About';
import EducationAchievements from './sections/EducationAchievements';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import Projects from './sections/Projects';
import Experience from './sections/Experience';

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <EducationAchievements/>
      <Experience/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App;