import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/Navbar';
import Baner from './components/baner/Baner';
import React,{useState} from 'react';
import SectionBio from './components/sectionBio/SectionBio';
import SectionSkill from './components/sectionSkills/SectionSkill';


function App() {
  const [modebg, setModebg] = useState('Light');
  const [modeNav, setModenav] = useState('light');
  const [modeText, setModetext] = useState('dark')
  const modeChange= ()=>{
    modebg=='Light' ? setModebg('Dark'):setModebg('Light');
    modeNav=='light' ? setModenav('dark'):setModenav('light');
    modeText=='dark' ? setModetext('white'):setModetext('dark');
  }
  return (
    <>
      <NavBar bgNav={modeNav} buttMode={modeChange}/>
      <section className={`bg${modebg}`}>
        <Baner bgMode={modebg} modeText={modeText}/>
        <SectionBio bgMode={modebg} modeText={modeText}/>
        <SectionSkill bgMode={modebg} modeText={modeText}/>
      </section>
    </>
  );
}

export default App;
