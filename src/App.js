import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/Navbar';
import Baner from './components/baner/Baner';
import React,{useState} from 'react';
import SectionBio from './components/sectionBio/SectionBio';
import SectionSkill from './components/sectionSkills/SectionSkill';
import SectionProjects from './components/sectionProjects/SectionProjects';
import esp from './languajes/Spanish.json';
import eng from './languajes/English.json';

function App() {
  const [modebg, setModebg] = useState('Light');
  const [modeNav, setModenav] = useState('light');
  const [modeText, setModetext] = useState('dark');
  const [language, setLang] = useState(eng);
  const modeChange= ()=>{
    modebg=='Light' ? setModebg('Dark'):setModebg('Light');
    modeNav=='light' ? setModenav('dark'):setModenav('light');
    modeText=='dark' ? setModetext('white'):setModetext('dark');
  }

  const languageMode = (valor)=>{
    valor=='eng' ? setLang(eng) : setLang(esp)
  }  

  return (
    <>
      <NavBar bgNav={modeNav} buttMode={modeChange}/>
      <section className={`bg${modebg} secPrin`}>
        <Baner bgMode={modebg} modeText={modeText} lang={language} langMode={languageMode}/>
        <SectionBio bgMode={modebg} modeText={modeText} lang={language}/>
        <SectionSkill bgMode={modebg} modeText={modeText} lang={language}/>
        <SectionProjects modeText={modeText} lang={language}/>
      </section>
    </>
  );
}

export default App;
