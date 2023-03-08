import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import Foto from './perfil.jpg';
import Foto2 from './foto.jpg';
import './main.css';

function Main(props){
  const bgMode = props.bgMode;
  return(
    <>
    <section className={`secBaner ${bgMode}`}>
      <Container fluid className='px-5 containerBaner'>
        <Row className='justify-content-around'>
          <Col lg={3} className='cardGir text-center text-white rounded'>
            <div className='cardGirContenido text-center text-white'>
              <div className='cardGir-frente rounded py-3'>
                <h2>Proyectos</h2>
                <h5>4 hechos</h5>
              </div>
              <div className='cardGir-trasero rounded py-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-collection-fill" viewBox="0 0 16 16">
                  <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"/>
                </svg>
                <h5 className='mt-2'>Ir a la sección</h5>
              </div>
            </div>
          </Col>
          <Col lg={3} className='cardGir'>
            <div className='cardGirContenido text-center text-white'>
              <div className='cardGir-frente rounded py-3'>
                <h2>Skills</h2>
                <h5>10 habilidades</h5>
              </div>
              <div className='cardGir-trasero rounded py-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-code-square" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                  <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"/>
                </svg>
                <h5 className='mt-2'>Ir a la sección</h5>
              </div>
            </div>
          </Col>
          <Col lg={3} className='cardGir'>
            <div className='cardGirContenido text-center text-white'>
              <div className='cardGir-frente rounded py-3'>
                <h2>Nivel</h2>
                <h5>Junior</h5>
              </div>
              <div className='cardGir-trasero rounded py-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                </svg>
                <h5 className='mt-2'>Ir a la sección</h5>
              </div>
            </div>
            
          </Col>
        </Row>
      </Container>
      <section className='bgBaner'>
        <Row className='justify-content-between py-5 vw-100'>
          <Col lg={7} className='d-flex align-items-center text-white ps-5'><h3 className='ps-5'>Hola Soy Leonel, web developer.<br></br> Apasionado de la programación, quiero superarme cada día más y cumplir las expectativas de mis superiores.</h3></Col>
          <Col lg={5} className='d-flex justify-content-center'>
            <Image src={Foto} roundedCircle={true} width='190px'></Image>
          </Col>
        </Row>
      </section>
    </section>
    <section className={`${bgMode} py-5`}>
      <Container fluid>
        <Row className='justify-content-center'>
          <Col lg={10} className='bgCard'>
            <Col lg={5}>
              <Image src={Foto2} width='190px'></Image>
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
}

export default Main