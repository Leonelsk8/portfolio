import React, {useState, useContext, useEffect} from 'react';
import MyContext from '../../MyContext';
import {Container, Row, Col, Image} from 'react-bootstrap';
import style from './sectionSkill.module.css';
import { useInView } from 'react-intersection-observer';
import Bootstrap from './Logos/Bootstrap.svg';
import Css from './Logos/Css.svg';
import Html from './Logos/Html.svg';
import JS from './Logos/Javascript.svg';
import TS from './Logos/Typescript.svg';
import reactLogo from './Logos/React.svg';
import Vue from './Logos/Vue.svg';
import express from './Logos/Expressjs.svg';
import Java from './Logos/Java.svg';
import Chas from './Logos/Chas.svg';
import Node from './Logos/NodeJs.svg';
import Git from './Logos/Git.svg';
import Github from './Logos/Github.svg';
import Gitlab from './Logos/Gitlab.svg';
import Npm from './Logos/Npm.svg';
import Visual from './Logos/VisualSC.svg';
import Mongo from './Logos/Mongodb.svg';
import Heidi from './Logos/Heidisql.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';


const SectionSkill = () => {
  AOS.init();
  const {bgMode, textMode, lang} = useContext(MyContext);
  const [hover, setHover] = useState(null);

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
    <section className={`text-${textMode} sectionSkill`} id="seccion2">
      <div className={`d-flex justify-content-center`}>
        <div className={`${style.divTitle}`}>
          <h1 ref={ref} className={`text-center mb-5 ${isVisible ? style.typing : style.opacityText}`}>{lang.Skills.title}</h1>
        </div>
      </div>
      <Container fluid>
        <Row className='justify-content-center' >
          <Col md={10} lg={6} xl={6} xll={6} className={`lineaCol${bgMode} mb-5 mb-lg-0`}>
            <h2 className={`d-lg-none text-center mb-4`}>{lang.Skills.subtitle1}</h2>
            <div className={`d-flex p-5 m-lg-5 bgSkill-${bgMode} flex-wrap justify-content-center ${style.divSkill}`} data-aos="fade-right">
              <div className={`${style.imgSkill}`} onMouseEnter={()=> setHover(1)} onMouseLeave={() =>setHover(null)}>
                <Image src={Html} width={'100px'} height={'auto'} className={hover===1 ? `${style.imageS} m-3` : 'm-3'}></Image>
                <div className={hover===1 ? `${style.pafec}` : 'd-none'}><p>HTML</p></div>
              </div>
              <div className={`${style.imgSkill}`} onMouseEnter={()=> setHover(2)} onMouseLeave={() =>setHover(null)}>
                <Image src={Css} width={'100px'} height={'auto'} className={hover===2 ? `${style.imageS} m-3` : 'm-3'}></Image>
                <div className={hover===2 ? `${style.pafec}` : 'd-none'}><p>CSS</p></div>
              </div>
              <div className={`${style.imgSkill}`} onMouseEnter={()=> setHover(3)} onMouseLeave={() =>setHover(null)}>
                <Image src={JS} width={'100px'} height={'100px'} className={hover===3 ? `${style.imageS} m-3` : 'm-3'}></Image>
                <div className={hover===3 ? `${style.pafec}` : 'd-none'}><p>Javascript</p></div>
              </div>
              <div className={`${style.imgSkill}`} onMouseEnter={()=> setHover(4)} onMouseLeave={() =>setHover(null)}>
                <Image src={TS} width={'100px'} height={'100px'} className={hover===4 ? `${style.imageS} m-3` : 'm-3'}></Image>
                <div className={hover===4 ? `${style.pafec}` : 'd-none'}><p>Typescript</p></div>
              </div>
              <div className={`${style.imgSkill}`} onMouseEnter={()=> setHover(5)} onMouseLeave={() =>setHover(null)}>
                <Image src={Java} width={'100px'} height={'auto'} className={hover===5 ? `${style.imageS} m-3` : 'm-3'}></Image>
                <div className={hover===5 ? `${style.pafec}` : 'd-none'}><p>Java</p></div>
              </div>
              <div className={`${style.imgSkill}`} onMouseEnter={()=> setHover(6)} onMouseLeave={() =>setHover(null)}>
                <Image src={Chas} width={'100px'} height={'100px'} className={hover===6 ? `${style.imageS} m-3` : 'm-3'}></Image>
                <div className={hover===6 ? `${style.pafec}` : 'd-none'}><p>C#</p></div>
              </div>
            </div>
          </Col>
          <Col lg={6} xl={6} xll={6} className='d-none d-lg-block'>
            <div className={`${style.colText}`}>
              <h1>{lang.Skills.subtitle1}</h1>
            </div>
          </Col>
          <Col lg={6} xl={6} xll={6} className={`lineaCol${bgMode} d-none d-lg-block`}>
          <div className={`${style.colText}`}>
              <h1>{lang.Skills.subtitle2}</h1>
            </div>
          </Col>
          <Col md={10} lg={6} xl={6} xll={6} className='mb-5 mb-lg-0'>
            <h2 className='d-lg-none text-center mb-4'>{lang.Skills.subtitle2}</h2>
            <div data-aos="fade-left" className={`d-flex p-5 m-lg-5 bgSkill-${bgMode} flex-wrap justify-content-center ${style.divSkill}`}>
              <div className={`${style.imgSkill}`} onMouseEnter={()=> setHover(7)} onMouseLeave={() =>setHover(null)}>
                <Image src={reactLogo} width={'100px'} height={'100px'} className={hover===7 ? `${style.imageS} m-3` : 'm-3'}></Image>
                <div className={hover===7 ? `${style.pafec}` : 'd-none'}><p>REACT</p></div>
              </div>
              <div className={`${style.imgSkill}`} onMouseEnter={()=> setHover(8)} onMouseLeave={() =>setHover(null)}>
                <Image src={Bootstrap} width={'100px'} height={'100px'} className={hover===8 ? `${style.imageS} m-3` : 'm-3'}></Image>
                <div className={hover===8 ? `${style.pafec}` : 'd-none'}><p>Bootstrap</p></div>
              </div>
              <div className={`${style.imgSkill}`} onMouseEnter={()=> setHover(9)} onMouseLeave={() =>setHover(null)}>
                <Image src={Vue} width={'100px'} height={'100px'} className={hover===9 ? `${style.imageS} m-3` : 'm-3'}></Image>
                <div className={hover===9 ? `${style.pafec}` : 'd-none'}><p>Vue</p></div>
              </div>
              <div className={`${style.imgSkill}`} onMouseEnter={()=> setHover(10)} onMouseLeave={() =>setHover(null)}>
                <Image src={express} width={'100px'} height={'100px'} className={hover===10 ? `${style.imageS} m-3` : 'm-3'}></Image>
                <div className={hover===10 ? `${style.pafec}` : 'd-none'}><p>ExpressJS</p></div>
              </div>
            </div>
          </Col>
          <Col md={10} lg={6} xl={6} xll={6} className={`lineaCol${bgMode} mb-5 mb-lg-0`}>
            <h2 className='d-lg-none text-center mb-4'>{lang.Skills.subtitle3}</h2>
            <div className={`d-flex p-5 m-lg-5 bgSkill-${bgMode} flex-wrap justify-content-center ${style.divSkill}`} data-aos="fade-right">
              <div className={`${style.imgSkill}`} onMouseEnter={()=> setHover(11)} onMouseLeave={() =>setHover(null)}>
                <Image src={Node} width={'100px'} height={'100px'} className={hover===11 ? `${style.imageS} m-3` : 'm-3'}></Image>
                <div className={hover===11 ? `${style.pafec}` : 'd-none'}><p>NodeJS</p></div>
              </div>
              <div className={`${style.imgSkill}`} onMouseEnter={()=> setHover(12)} onMouseLeave={() =>setHover(null)}>
                <Image src={Git} width={'100px'} height={'100px'} className={hover===12 ? `${style.imageS} m-3` : 'm-3'}></Image>
                <div className={hover===12 ? `${style.pafec}` : 'd-none'}><p>Git</p></div>
              </div>
              <div className={`${style.imgSkill}`} onMouseEnter={()=> setHover(13)} onMouseLeave={() =>setHover(null)}>
                <Image src={Github} width={'100px'} height={'100px'} className={hover===13 ? `${style.imageS} m-3` : 'm-3'}></Image>
                <div className={hover===13 ? `${style.pafec}` : 'd-none'}><p>Github</p></div>
              </div>
              <div className={`${style.imgSkill}`} onMouseEnter={()=> setHover(14)} onMouseLeave={() =>setHover(null)}>
                <Image src={Gitlab} width={'100px'} height={'100px'} className={hover===14 ? `${style.imageS} m-3` : 'm-3'}></Image>
                <div className={hover===14 ? `${style.pafec}` : 'd-none'}><p>Gitlab</p></div>
              </div>
              <div className={`${style.imgSkill}`} onMouseEnter={()=> setHover(15)} onMouseLeave={() =>setHover(null)}>
                <Image src={Npm} width={'100px'} height={'auto'} className={hover===15 ? `${style.imageS} m-3` : 'm-3'}></Image>
                <div className={hover===15 ? `${style.pafec}` : 'd-none'}><p>NPM</p></div>
              </div>
              <div className={`${style.imgSkill}`} onMouseEnter={()=> setHover(16)} onMouseLeave={() =>setHover(null)}>
                <Image src={Visual} width={'100px'} height={'100px'} className={hover===16 ? `${style.imageS} m-3` : 'm-3'}></Image>
                <div className={hover===16 ? `${style.pafec} text-center` : 'd-none'}><p>Visual Studio Code</p></div>
              </div>
            </div>
          </Col>
          <Col lg={6} xl={6} xll={6} className='d-none d-lg-block'>
            <div className={`${style.colText}`}>
              <h1>{lang.Skills.subtitle3}</h1>
            </div>
          </Col>
          <Col lg={6} xl={6} xll={6} className={`lineaCol${bgMode} d-none d-lg-block`}>
          <div className={`${style.colText}`}>
              <h1>{lang.Skills.subtitle4}</h1>
            </div>
          </Col>
          <Col md={10} lg={6} xl={6} xll={6} className='mb-5 mb-lg-0'>
            <h2 className='d-lg-none text-center mb-4'>{lang.Skills.subtitle4}</h2>
            <div data-aos="fade-left" className={`d-flex p-5 m-lg-5 bgSkill-${bgMode} flex-wrap justify-content-center ${style.divSkill}`}>
              <div className={`${style.imgSkill}`} onMouseEnter={()=> setHover(17)} onMouseLeave={() =>setHover(null)}>
                <Image src={Mongo} width={'100px'} height={'auto'} className={hover===17 ? `${style.imageS} m-3` : 'm-3'}></Image>
                <div className={hover===17 ? `${style.pafec}` : 'd-none'}><p>MongoDB</p></div>
              </div>
              <div className={`${style.imgSkill}`} onMouseEnter={()=> setHover(18)} onMouseLeave={() =>setHover(null)}>
                <Image src={Heidi} width={'100px'} height={'100px'} className={hover===18 ? `${style.imageS} m-3` : 'm-3'}></Image>
                <div className={hover===18 ? `${style.pafec}` : 'd-none'}><p>HeidiSQL</p></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SectionSkill