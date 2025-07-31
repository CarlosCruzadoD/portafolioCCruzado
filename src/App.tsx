import './App.css'
import Header from './components/Header'
import { Home } from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import es from './locals/es.json';
import en from './locals/en.json';
import { useEffect, useState } from 'react'

function App() {
  const [session, setSession] = useState(sessionStorage.getItem('leng') || 'es');
  const leng = session === 'en' ? en : es;
  useEffect(() => {
    setSession(sessionStorage.getItem('leng') || 'es');
  }, [sessionStorage.getItem('leng')]);
  return (
    <>
      <Header 
        home={leng.header.links[0].name}
        about={leng.header.links[1].name}
        portafolio={leng.header.links[2].name}
        contact={leng.header.links[3].name}
        />
      <main>
        <Home
          title={leng.home.title}
          desc={leng.home.description}
          btn={leng.home.button}
        />
        <AboutMe 
          title={leng.about.title}
          desc={leng.about.description}
          title2={leng.about.skills}
          tools={leng.about.tools}
        />
        <Projects
          title={leng.projects.title}
          desc={leng.projects.description}
          projects={leng.projects.projects}
        />
        <Contact 
          title={leng.contact.title}
          email={leng.contact.email}
          name={leng.contact.form.name}
          message={leng.contact.form.message}
          btn={leng.contact.form.button}
        />
      </main>
      <Footer />
    </>
  )
}

export default App
