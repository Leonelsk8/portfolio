import React, {useState} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import './sectionproject-module.css';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.png';
import project5 from '../../assets/project5.png';
import logic2 from '../../assets/logic2.png'
import logic3 from '../../assets/logic3.png';
import ProjDate from './ProjDate';
import LogicDate from './LogicDate';
import AOS from 'aos';

const SectionProjects = (props) => {
  const textMode = props.modeText;
  const [project, setProject] = useState(0);
  const [modalON, setModal] = useState(0);
  const [modalLogic, setModalLogic] = useState(0);
  const idiom = props.lang;
  AOS.init()

  const proj = () =>{
    return(
      <Row className='justify-content-center'>
        <Col sm={12} md={6} lg={3} data-aos="zoom-in">
          <a type='button' onClick={()=>setModal(5)}><Image src={project5} className='proj' width='100%'></Image></a>
        </Col>
        <Col sm={12} md={6} lg={3} data-aos="zoom-in">
          <a type='button' onClick={()=>setModal(4)}><Image src={project4} className='proj' width='100%'></Image></a>
        </Col>
        <Col sm={12} md={6} lg={3} data-aos="zoom-in">
          <a type='button' onClick={()=>setModal(3)}><Image src={project3} className='proj' width='100%'></Image></a>
        </Col>
        <Col sm={12} md={6} lg={3} data-aos="zoom-in">
          <a type='button' onClick={()=>setModal(2)}><Image src={project2} className='proj' width='100%'></Image></a>
        </Col>
        <Col sm={12} md={6} lg={3} data-aos="zoom-in">
          <a type='button' onClick={()=>setModal(1)}><Image src={project1} className='proj' width='100%'></Image></a>
        </Col>
      </Row>
    )
  }

  const logic = () =>{
    return(
      <Row className='justify-content-center'>
        <Col sm={12} md={6} lg={3} data-aos="zoom-in">
          <a type='button' onClick={()=>setModalLogic(3)}><Image src={logic3} className='proj' width='100%'></Image></a>
        </Col>
        <Col sm={12} md={6} lg={3} data-aos="zoom-in">
          <a type='button' onClick={()=>setModalLogic(2)}><Image src={logic2} className='proj' width='100%'></Image></a>
        </Col>
      </Row>
    )
  }

  function modalClose(){
    setModal(0);
    setModalLogic(0);
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
        modalON >= 1 ? <ProjDate indic={modalON} closeMod={modalClose} idiom={idiom.Proj.dateLan}/> : ''
      }
      {
        modalLogic >=  1 ? <LogicDate indic={modalLogic} closeMod={modalClose} idiom={idiom.Proj.dateLan}/> : ''
      }
    </section>
  )
}

export default SectionProjects