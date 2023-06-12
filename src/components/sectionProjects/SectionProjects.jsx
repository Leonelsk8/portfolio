import React, {useState, useContext, useEffect} from 'react';
import MyContext from '../../MyContext';
import {Container, Row, Col, Image} from 'react-bootstrap';
import style from './sectionproject.module.css';
import { useInView } from 'react-intersection-observer';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.png';
import project5 from '../../assets/project5.png';
import logic2 from '../../assets/logic2.png'
import logic3 from '../../assets/logic3.png';
import ProjModal from './ProjModal';
import AppModal from './AppModal';
import AOS from 'aos';

const SectionProjects = () => {
  const {textMode , lang, relativeChange} = useContext(MyContext);
  const [option, setOption] = useState(0);
  const [modalProj, setModalProj] = useState(0);
  const [modalApp, setModalApp] = useState(0);
  AOS.init();

  const [isVisible, setIsVisible] = useState(false);
  const {ref, inView} = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }else{
      setIsVisible(false);
    }
  }, [inView]);

  const proj = () =>{
    return(
      <Row className='justify-content-center'>
        <Col sm={12} md={6} lg={3} data-aos="zoom-in">
          <a type='button' onClick={()=>{relativeChange(); setModalProj(5);}}><Image src={project5} className={style.proj} width='100%'></Image></a>
        </Col>
        <Col sm={12} md={6} lg={3} data-aos="zoom-in">
          <a type='button' onClick={()=>{relativeChange(); setModalProj(4);}}><Image src={project4} className={style.proj} width='100%'></Image></a>
        </Col>
        <Col sm={12} md={6} lg={3} data-aos="zoom-in">
          <a type='button' onClick={()=>{relativeChange(); setModalProj(3);}}><Image src={project3} className={style.proj} width='100%'></Image></a>
        </Col>
        <Col sm={12} md={6} lg={3} data-aos="zoom-in">
          <a type='button' onClick={()=>{relativeChange(); setModalProj(2);}}><Image src={project2} className={style.proj} width='100%'></Image></a>
        </Col>
        <Col sm={12} md={6} lg={3} data-aos="zoom-in">
          <a type='button' onClick={()=>{relativeChange(); setModalProj(1);}}><Image src={project1} className={style.proj} width='100%'></Image></a>
        </Col>
      </Row>
    )
  }

  const Apps = () =>{
    return(
      <Row className='justify-content-center'>
        <Col sm={12} md={6} lg={3} data-aos="zoom-in">
          <a type='button' onClick={()=>{relativeChange(); setModalApp(3);}}><Image src={logic3} className={style.proj} width='100%'></Image></a>
        </Col>
        <Col sm={12} md={6} lg={3} data-aos="zoom-in">
          <a type='button' onClick={()=>{relativeChange(); setModalApp(2);}}><Image src={logic2} className={style.proj} width='100%'></Image></a>
        </Col>
      </Row>
    )
  }

  function modalClose(){
    setModalProj(0);
    setModalApp(0);
    relativeChange();
  }

  return (
    <section className='py-5'>
      <Container>
        <Row id="seccion3">
          <Col lg={12} className='text-center'>
            <div className='d-flex justify-content-center'>
              <div className={`text-${textMode} ${style.divTitle}`}>
                <h1 ref={ref} className={`text-center ${isVisible ? style.typing : style.opacityText}`}>{lang.Proj.title}</h1>
              </div>
            </div>
            <div className='mt-4'>
              <a type='button' className={option===0 ? `${textMode==='white'?style.active_white:style.active_dark} me-3` : `${textMode==='white'?style.but_white:style.but_dark} me-3`} onClick={()=>setOption(0)}>{lang.Proj.webs}</a>
              <a type='button' className={option===1 ? `${textMode==='white'?style.active_white:style.active_dark} me-3` : `${textMode==='white'?style.but_white:style.but_dark} me-3`} onClick={()=>setOption(1)}>{lang.Proj.app}</a>
              <a type='button' className={option===2 ? `${textMode==='white'?style.active_white:style.active_dark}` : `${textMode==='white'?style.but_white:style.but_dark}`} onClick={()=>setOption(2)}>{lang.Proj.logic}</a>
            </div>
          </Col>
          <Col lg={12} className='mt-3'>
            {
              option===0 ? proj() : Apps()
            }
          </Col>
        </Row>        
      </Container>
      {
        modalProj >= 1 ? <ProjModal indic={modalProj} style={style} closeMod={modalClose} lang={lang.Proj.dateLan}/> : ''
      }
      {
        modalApp >=  1 ? <AppModal indic={modalApp} style={style} closeMod={modalClose} lang={lang.Proj.dateLan}/> : ''
      }
    </section>
  )
}

export default SectionProjects