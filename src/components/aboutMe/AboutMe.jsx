import React, {useContext, useState, useEffect} from 'react';
import style from './aboutme.module.css';
import MyContext from '../../MyContext';
import {Container, Row, Col, Image} from 'react-bootstrap';
import foto from '../../assets/perfff.png';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {
  const {lang, bgMode , textMode} = useContext(MyContext);
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

  return (
    <>
      <section id='aboutSect'>
        <div className='d-flex justify-content-center my-4'>
          <div className={`text-${textMode} ${style.divTitle}`}>
            <h1 ref={ref} className={`text-center ${isVisible ? style.typing : style.opacityText}`}>{lang.about.head}</h1>
          </div>
        </div>
        <Container fluid className='position-relative '>
          <Row className={`${style.RowCont} bgCard${bgMode} py-5 me-0`}>
            <Col xs={12} md={12} lg={7} className={`position-relative px-0`} style={{ zIndex: 1}}>
              <div>
                <h4 className={`text-${textMode}`}>{lang.about.title}</h4>
                <p className={bgMode === 'Dark' ? style.paraffDark : style.paraffLight}>{lang.about.parrafoInfo}</p>
              </div>
              <Row>
                <Col xs={12} md={12} lg={9}>
                  <div>
                    <h4 className={`text-${textMode}`}>{lang.about.title2}</h4>
                    <p className={bgMode === 'Dark' ? style.paraffDark : style.paraffLight}><i className="bi bi-camera-reels-fill"></i> {lang.about.hobOne}</p>
                    <p className={bgMode === 'Dark' ? style.paraffDark : style.paraffLight}><i className="bi bi-emoji-laughing-fill"></i> {lang.about.hobTwo}</p>
                    <p className={bgMode === 'Dark' ? style.paraffDark : style.paraffLight}><i className="bi bi-pencil-fill"></i> {lang.about.hobTree}</p>
                    <p className={bgMode === 'Dark' ? style.paraffDark : style.paraffLight}><i className="bi bi-music-note"></i> {lang.about.hobFor}</p>
                  </div>
                </Col>
              </Row>
            </Col>
            <div className={`slim${bgMode} ${style.image}`}>
              <Image src={foto} className='d-none d-lg-block' data-aos="fade-left"></Image>
            </div>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default AboutMe