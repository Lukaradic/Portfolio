import './App.scss'
import Navigation from './components/navigation/Navigation'
import Hero from './components/hero/Hero'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Work from './components/work/Work'
import Contact from './components/contact/Contact'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Skills />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
