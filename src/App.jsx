import './App.css'
import Header from './components/header/Header'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Education from './components/education/education'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import Nav from './components/nav/Nav'
import AnnouncementBar from './components/AnnouncementBar/AnnouncementBar'

function App() {

  return (
    <>
      <AnnouncementBar />
      <Nav />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App
