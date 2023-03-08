import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/Navbar';
import Main from './components/main/Main';
import React,{useState} from 'react';

function App() {
  const [modebg, setModebg] = useState('bgLight');
  const [modeNav, setModenav] = useState('light');
  return (
    <>
      <NavBar bgNav={modeNav}/>
      <Main bgMode={modebg}/>
      <button onClick={()=>{ 
          modebg=='bgLight' ? setModebg('bgDark'):setModebg('bgLight');
          modeNav=='light' ? setModenav('dark'):setModenav('light');
        }}>changecolor
      </button>
    </>
  );
}

export default App;
