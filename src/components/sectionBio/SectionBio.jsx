import React, {useContext} from 'react';
import MyContext from '../../MyContext';
import {Container, Row, Col, Image} from 'react-bootstrap';
import gif from './giphy.gif';
import style from './bio.module.css';
import AOS from 'aos';
import cv from '../../assets/Gomez Leonel Agustin, Fullstack Dev.pdf';
import { FaFilePdf} from 'react-icons/fa';

const SectionBio = () => {
  const {bgMode, textMode, lang} = useContext(MyContext);
  AOS.init()

  return (
    <section className={`pb-3`} style={{ zIndex: 1}}>
      <Container fluid>
        <Row className='justify-content-center' id="seccion1">
          <Col sm={12} md={12} lg={12} xl={12} xll={12} className={`bgCard${bgMode} text-${textMode} my-5 py-4 px-md-5 position-relative sectOverY sectOverX`} style={{ zIndex: 1}}>
            <Row>
              <Col lg={5} xl={4} className='d-none d-lg-flex align-items-center justify-content-center'>
                <Image src={gif} roundedCircle={true} height={'400px'} width={'400px'} data-aos="zoom-in"></Image>
              </Col>
              <Col sm={12} md={12} lg={7} xl={8}>
                <div className={`px-3 py-2 px-lg-2 ${style.divInfo}`}> 
                  <h1>{lang.Bio.welcome}</h1>
                  <h5>{lang.Bio.infoone}<br></br>{lang.Bio.infotwo}</h5>
                  <a type='button' className={style.buttonPDF} href={cv} target={'_blank'}><FaFilePdf style={{fontSize: '1.4em'}}/> CV</a>
                </div>
                <div className={`mt-4 d-flex flex-wrap justify-content-between ${style.divProps}`}>
                  <div className='pe-3 pe-md-0'>
                    <h5>{lang.Bio.listTitle1}</h5>
                    <ul className='ps-3'>
                      <li>{lang.Bio.liIdiom1}</li>
                      <li>{lang.Bio.liIdiom2}</li>
                      <li>{lang.Bio.liIdiom3}</li>
                    </ul>
                  </div>
                  <div className='pe-3 pe-md-0'>
                    <h5>{lang.Bio.listTitle2}</h5>
                    <ul className='ps-3'>
                      <li>Scrum</li>
                      <li>Kanban</li>
                      <li>Crystal</li>
                      <li>Extreme Programming</li>
                    </ul>
                  </div>
                  <div>
                  <h5>{lang.Bio.listTitle3}</h5>
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
            <div className={`divBioAbsolute divBioAbsolute${bgMode}`}>
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  )
}

export default SectionBio