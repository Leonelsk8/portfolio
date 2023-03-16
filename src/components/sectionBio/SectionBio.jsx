import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap';
import gif from './giphy.gif';
import './bio-module.css';
import CV from './CURRICULUM.pdf';

const SectionBio = (props) => {
  const bgMode = props.bgMode;
  const textMode = props.modeText;
  return (
    <section className={`pt-5 pb-3`}>
      <Container fluid>
        <Row className='justify-content-center'>
          <Col sm={12} md={12} lg={12} xl={12} xll={12} className={`bgCard${bgMode} text-${textMode} my-5 py-5 px-md-5`}>
            <Row>
              <Col lg={5} xl={4} className='d-none d-lg-flex align-items-center justify-content-center'>
                <Image src={gif} roundedCircle={true} height={'400px'} width={'400px'} ></Image>
              </Col>
              <Col sm={12} md={12} lg={7} xl={8}>
                <div className='px-2 px-md-0'> 
                  <h1>Bienvenido a mi portafolio 😄</h1>
                  <h5>Me llamo Leonel Gomez, soy un desarrollador web Full-Stack. Certificado en Rolling Code School y ex estudiante en Ingeniaría de sistemas.<br></br>Actualmente en busca de mi primer trabajo como programador, dispuesto adaptarme a todas las tareas laborales y dar lo mejor de mí siempre.</h5>
                  <a className='btn btn-danger' href={CV} target={'_blank'}>My CV pdf</a>
                </div>
                <div className='mt-4 d-flex flex-wrap justify-content-between'>
                  <div className='pe-3 pe-md-0'>
                    <h5>Idíomas:</h5>
                    <ul className='ps-3'>
                      <li>Español - Nativo</li>
                      <li>Inglés - Intermedio</li>
                      <li>Francés - Básico</li>
                    </ul>
                  </div>
                  <div className='pe-3 pe-md-0'>
                    <h5>Metodologías ágiles:</h5>
                    <ul className='ps-3'>
                      <li>Scrum</li>
                      <li>Kanban</li>
                      <li>Crystal</li>
                      <li>Extreme Programming</li>
                    </ul>
                  </div>
                  <div>
                  <h5>Metodologías de desarrollo:</h5>
                    <ul className='ps-3'>
                      <li>BEM</li>
                      <li>SMACSS</li>
                      <li>OOCSS</li>
                      <li>MVC</li>
                      <li>MVVM</li>
                      <li>TDD</li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SectionBio