import React, {useState} from 'react';
import { Link } from 'react-scroll';
import {Container, Row, Col, Image} from 'react-bootstrap';
import Foto from '../../assets/perfil.png';
import './baner-module.css';
import es from '../../assets/es.webp';
import en from '../../assets/en.webp';

function Baner(props){
  const bgMode = props.bgMode;
  const textMode = props.modeText;
  const idiom = props.lang;
  const langMode = props.langMode;
  const [idioma, setIdioma] = useState('eng');

  function handleChange(event) {
    const valor = event.target.value;
    langMode(valor);
    setIdioma(valor);
  }

  return(
    <>
    <section className={`secBaner bg${bgMode}`}>
      <div className='selectDiv d-flex align-items-center'>
        <label htmlFor="Select-Lang" className='pe-1'><img src={idioma==='eng' ? en : es} width='30px' alt="en"/></label>
        <select onChange={handleChange} className='selectLan' id='Select-Lang'>
          <option value="eng">{idiom.Baner.optionEn}</option>
          <option value="esp">{idiom.Baner.optionEs}</option>
        </select>
      </div>
      <Container fluid className='px-5 containerBaner d-none d-md-block'>
        <Row className='justify-content-around'>
          <Col md={4} lg={3} className='cardGir'>
            <div className={`cardGirContenido text-center text-${textMode}`}>
              <div className={`cardGir-frente bgCardGir${bgMode} rounded py-3`}>
                <h2>{idiom.Baner.table1}</h2>
                <h5>{idiom.Baner.done}</h5>
              </div>
              
              <div className={`cardGir-trasero bgCardGir${bgMode} rounded py-3`}>
                <Link to="seccion3" smooth={true} duration={500}>
                  <div className='linkGoSec'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-collection-fill" viewBox="0 0 16 16">
                      <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"/>
                    </svg>
                    <h5 className='mt-2'>{idiom.Baner.tableOption}</h5>
                  </div>
                </Link>
              </div>
            </div>
          </Col>
          <Col md={4} lg={3} className='cardGir'>
            <div className={`cardGirContenido text-center text-${textMode}`}>
              <div className={`cardGir-frente bgCardGir${bgMode} rounded py-3`}>
                <h2>{idiom.Baner.table2}</h2>
                <h5>{idiom.Baner.skill}</h5>
              </div>
              <div className={`cardGir-trasero bgCardGir${bgMode} rounded py-3`}>
                <Link to="seccion2" smooth={true} duration={500}>
                  <div className='linkGoSec'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-code-square" viewBox="0 0 16 16">
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                      <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"/>
                    </svg>
                    <h5 className='mt-2'>{idiom.Baner.tableOption}</h5>
                  </div>
                </Link>
              </div>
            </div>
          </Col>
          <Col md={4} lg={3} className='cardGir'>
            <div className={`cardGirContenido text-center text-${textMode}`}>
              <div className={`cardGir-frente bgCardGir${bgMode} rounded py-3`}>
                <h2>{idiom.Baner.table3}</h2>
                <h5>Junior</h5>
              </div>
              <div className={`cardGir-trasero bgCardGir${bgMode} rounded py-3`}>
                <Link to="seccion1" smooth={true} duration={500}>
                  <div className='linkGoSec'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                    </svg>
                    <h5 className='mt-2'>{idiom.Baner.tableOption}</h5>
                  </div>
                </Link>
              </div>
            </div>
            
          </Col>
        </Row>
      </Container>
      <section className='bgBaner'>
        <Row className='justify-content-md-between py-3 py-md-0 my-md-4 vw-100 flex-column-reverse flex-md-row'>
          <Col sm={12} md={8} lg={7} className='text-white py-md-5 ps-md-3 ps-lg-5 animate__animated animate__fadeInLeft mt-3 mt-md-0'><h2 className='ps-md-5 text-center text-md-start'>{idiom.Baner.SaludBaner}</h2><h3 className='ps-5 d-none d-md-block'>{idiom.Baner.DescBaner}</h3></Col>
          <Col sm={12} md={4} lg={5} className='d-flex pb-md-5 pt-md-1 justify-content-center animate__animated animate__zoomIn'>
            <Image src={Foto} width='190px'></Image>
          </Col>
        </Row>
      </section>
    </section>
    </>
  );
}

export default Baner