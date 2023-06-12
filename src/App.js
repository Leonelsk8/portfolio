import React,{useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import esp from './languajes/Spanish.json';
import eng from './languajes/English.json';
import MyContext from './MyContext';
import NavBar from './components/navbar/Navbar';
import Baner from './components/baner/Baner';
import SectionBio from './components/sectionBio/SectionBio';
import SectionSkill from './components/sectionSkills/SectionSkill';
import SectionProjects from './components/sectionProjects/SectionProjects';
import Footer from './components/footer/Footer';
import { Link } from 'react-scroll';

function App() {
  const [bgMode, setModebg] = useState('Dark');
  const [bgNav, setModenav] = useState('dark');
  const [textMode, setModetext] = useState('white');
  const [lang, setLang] = useState(esp);
  const [relative, setRelative] = useState(true);
  const [arrow, setArrow] = useState(false);
  const themeChange= ()=>{
    bgMode==='Light' ? setModebg('Dark'):setModebg('Light');
    bgNav==='light' ? setModenav('dark'):setModenav('light');
    textMode==='dark' ? setModetext('white'):setModetext('dark');
  }


  const langChange = (valor)=>{
    valor==='eng' ? setLang(eng) : setLang(esp)
  }  

  const relativeChange = ()=>{
    relative ? setRelative(false) : setRelative(true);
  }

  return (
    <>
    <MyContext.Provider value={{textMode, bgMode, bgNav, lang, themeChange, langChange, relativeChange, setArrow}}>
      <NavBar/>
      {arrow ? 
        <section className='arrowUp'>
          <div>
            <Link to="sectHead" smooth={true} duration={500}>
              <i className="bi bi-arrow-up-short"></i>
            </Link>
          </div>
        </section> : ''
      }
      
      <Baner/>
      <section className={`bg${bgMode} secPrin ${relative? 'position-relative' : ''}`} style={{ zIndex: 0}}>
        <SectionBio/>
        <SectionSkill/>
        <SectionProjects/>
        <Footer/>
      </section>
    </MyContext.Provider>
    </>
  );
}

export default App;
