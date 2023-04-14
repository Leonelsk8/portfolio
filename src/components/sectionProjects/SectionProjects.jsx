import React, {useState} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import './sectionproject-module.css';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import ProjDate from './ProjDate';

const SectionProjects = (props) => {
  const textMode = props.modeText;
  const [project, setProject] = useState(0);
  const [modalON, setModal] = useState(0);
  const idiom = props.lang;

  const proj = () =>{
    return(
      <Row className='justify-content-center'>
        <Col sm={12} md={6} lg={3}>
          <a type='button' onClick={()=>setModal(1)}><Image src={project1} className='proj' width='100%'></Image></a>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <a type='button' onClick={()=>setModal(2)}><Image src={project2} className='proj' width='100%'></Image></a>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <a type='button' onClick={()=>setModal(3)}><Image src={project3} className='proj' width='100%'></Image></a>
        </Col>
      </Row>
    )
  }

  const logic = () =>{
    return(
      <h2 className={`text-center text-${textMode}`}>No hay resultados</h2>
    )
  }

  function modalClose(){
    setModal(0);
  }

  return (
    <section className='py-5'>
      <Container>
        <Row id="seccion3">
          <Col lg={12} className='text-center'>
            <div className={`text-${textMode}`}>
              <h1>{idiom.Proj.projects}</h1>
            </div>
            <div className='mt-4'>
              <a type='button' className={project===0 ? `active-${textMode} me-3` : `but-${textMode} me-3`} onClick={()=>setProject(0)}>{idiom.Proj.projects}</a>
              <a type='button' className={project===1 ? `active-${textMode}` : `but-${textMode}`} onClick={()=>setProject(1)}>{idiom.Proj.logic}</a>
            </div>
          </Col>
          <Col lg={12} className='mt-3'>
            {
              project===0 ? proj() : logic()
            }
          </Col>
        </Row>        
      </Container>
      {
        modalON>=1 ? <ProjDate indic={modalON} closeMod={modalClose} idiom={idiom.Proj.dateLan}/> : ''
      }
    </section>
  )
}

export default SectionProjects