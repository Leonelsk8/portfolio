import React, {useState} from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap';
import './sectionskill_module.css';
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


const SectionSkill = (props) => {
  AOS.init();
  const bgMode = props.bgMode;
  const textMode = props.modeText;
  const idiom = props.lang;
  const [hover, setHover] = useState(null);


  return (
    <section className={`text-${textMode} sectionSkill`}>
      <h1 className='text-center mb-5'>{idiom.Skills.title}</h1>
      <Container fluid>
        <Row className='justify-content-center'>
          <Col md={10} lg={6} xl={6} xll={6} className={`lineaCol${bgMode} mb-5 mb-lg-0`}>
            <h2 className='d-lg-none text-center mb-4'>{idiom.Skills.subtitle1}</h2>
            <div className={`d-flex p-5 m-lg-5 bgSkill-${bgMode} flex-wrap justify-content-center divSkill`} data-aos="fade-right">
              <div className='imgSkill' onMouseEnter={()=> setHover(1)} onMouseLeave={() =>setHover(null)}>
                <Image src={Html} width={'100px'} height={'auto'} className={hover==1 ? 'imageS m-3' : 'm-3'}></Image>
                <p className={hover==1 ? 'pafec' : 'd-none'}>HTML</p>
              </div>
              <div className='imgSkill' onMouseEnter={()=> setHover(2)} onMouseLeave={() =>setHover(null)}>
                <Image src={Css} width={'100px'} height={'auto'} className={hover==2 ? 'imageS m-3' : 'm-3'}></Image>
                <p className={hover==2 ? 'pafec' : 'd-none'}>CSS</p>
              </div>
              <div className='imgSkill' onMouseEnter={()=> setHover(3)} onMouseLeave={() =>setHover(null)}>
                <Image src={JS} width={'100px'} height={'100px'} className={hover==3 ? 'imageS m-3' : 'm-3'}></Image>
                <p className={hover==3 ? 'pafec' : 'd-none'}>Javascript</p>
              </div>
              <div className='imgSkill' onMouseEnter={()=> setHover(4)} onMouseLeave={() =>setHover(null)}>
                <Image src={TS} width={'100px'} height={'100px'} className={hover==4 ? 'imageS m-3' : 'm-3'}></Image>
                <p className={hover==4 ? 'pafec' : 'd-none'}>Typescript</p>
              </div>
              <div className='imgSkill' onMouseEnter={()=> setHover(5)} onMouseLeave={() =>setHover(null)}>
                <Image src={Java} width={'100px'} height={'auto'} className={hover==5 ? 'imageS m-3' : 'm-3'}></Image>
                <p className={hover==5 ? 'pafec' : 'd-none'}>Java</p>
              </div>
              <div className='imgSkill' onMouseEnter={()=> setHover(6)} onMouseLeave={() =>setHover(null)}>
                <Image src={Chas} width={'100px'} height={'100px'} className={hover==6 ? 'imageS m-3' : 'm-3'}></Image>
                <p className={hover==6 ? 'pafec' : 'd-none'}>C#</p>
              </div>
            </div>
          </Col>
          <Col lg={6} xl={6} xll={6} className='d-none d-lg-block'>
            <div className={`colText`}>
              <h1>{idiom.Skills.subtitle1}</h1>
            </div>
          </Col>
          <Col lg={6} xl={6} xll={6} className={`lineaCol${bgMode} d-none d-lg-block`}>
          <div className={`colText`}>
              <h1>{idiom.Skills.subtitle2}</h1>
            </div>
          </Col>
          <Col md={10} lg={6} xl={6} xll={6} className='mb-5 mb-lg-0'>
            <h2 className='d-lg-none text-center mb-4'>{idiom.Skills.subtitle2}</h2>
            <div data-aos="fade-left" className={`d-flex p-5 m-lg-5 bgSkill-${bgMode} flex-wrap justify-content-center divSkill`}>
              <div className='imgSkill' onMouseEnter={()=> setHover(7)} onMouseLeave={() =>setHover(null)}>
                <Image src={reactLogo} width={'100px'} height={'100px'} className={hover==7 ? 'imageS m-3' : 'm-3'}></Image>
                <p className={hover==7 ? 'pafec' : 'd-none'}>REACT</p>
              </div>
              <div className='imgSkill' onMouseEnter={()=> setHover(8)} onMouseLeave={() =>setHover(null)}>
                <Image src={Bootstrap} width={'100px'} height={'100px'} className={hover==8 ? 'imageS m-3' : 'm-3'}></Image>
                <p className={hover==8 ? 'pafec' : 'd-none'}>Bootstrap</p>
              </div>
              <div className='imgSkill' onMouseEnter={()=> setHover(9)} onMouseLeave={() =>setHover(null)}>
                <Image src={Vue} width={'100px'} height={'100px'} className={hover==9 ? 'imageS m-3' : 'm-3'}></Image>
                <p className={hover==9 ? 'pafec' : 'd-none'}>Vue</p>
              </div>
              <div className='imgSkill' onMouseEnter={()=> setHover(10)} onMouseLeave={() =>setHover(null)}>
                <Image src={express} width={'100px'} height={'100px'} className={hover==10 ? 'imageS m-3' : 'm-3'}></Image>
                <p className={hover==10 ? 'pafec' : 'd-none'}>ExpressJS</p>
              </div>
            </div>
          </Col>
          <Col md={10} lg={6} xl={6} xll={6} className={`lineaCol${bgMode} mb-5 mb-lg-0`}>
            <h2 className='d-lg-none text-center mb-4'>{idiom.Skills.subtitle3}</h2>
            <div className={`d-flex p-5 m-lg-5 bgSkill-${bgMode} flex-wrap justify-content-center divSkill`} data-aos="fade-right">
              <div className='imgSkill' onMouseEnter={()=> setHover(11)} onMouseLeave={() =>setHover(null)}>
                <Image src={Node} width={'100px'} height={'100px'} className={hover==11 ? 'imageS m-3' : 'm-3'}></Image>
                <p className={hover==11 ? 'pafec' : 'd-none'}>NodeJS</p>
              </div>
              <div className='imgSkill' onMouseEnter={()=> setHover(12)} onMouseLeave={() =>setHover(null)}>
                <Image src={Git} width={'100px'} height={'100px'} className={hover==12 ? 'imageS m-3' : 'm-3'}></Image>
                <p className={hover==12 ? 'pafec' : 'd-none'}>Git</p>
              </div>
              <div className='imgSkill' onMouseEnter={()=> setHover(13)} onMouseLeave={() =>setHover(null)}>
                <Image src={Github} width={'100px'} height={'100px'} className={hover==13 ? 'imageS m-3' : 'm-3'}></Image>
                <p className={hover==13 ? 'pafec' : 'd-none'}>Github</p>
              </div>
              <div className='imgSkill' onMouseEnter={()=> setHover(14)} onMouseLeave={() =>setHover(null)}>
                <Image src={Gitlab} width={'100px'} height={'100px'} className={hover==14 ? 'imageS m-3' : 'm-3'}></Image>
                <p className={hover==14 ? 'pafec' : 'd-none'}>Gitlab</p>
              </div>
              <div className='imgSkill' onMouseEnter={()=> setHover(15)} onMouseLeave={() =>setHover(null)}>
                <Image src={Npm} width={'100px'} height={'auto'} className={hover==15 ? 'imageS m-3' : 'm-3'}></Image>
                <p className={hover==15 ? 'pafec' : 'd-none'}>NPM</p>
              </div>
              <div className='imgSkill' onMouseEnter={()=> setHover(16)} onMouseLeave={() =>setHover(null)}>
                <Image src={Visual} width={'100px'} height={'100px'} className={hover==16 ? 'imageS m-3' : 'm-3'}></Image>
                <p className={hover==16 ? 'pafec text-center' : 'd-none'}>Visual Studio Code</p>
              </div>
            </div>
          </Col>
          <Col lg={6} xl={6} xll={6} className='d-none d-lg-block'>
            <div className={`colText`}>
              <h1>{idiom.Skills.subtitle3}</h1>
            </div>
          </Col>
          <Col lg={6} xl={6} xll={6} className={`lineaCol${bgMode} d-none d-lg-block`}>
          <div className={`colText`}>
              <h1>{idiom.Skills.subtitle4}</h1>
            </div>
          </Col>
          <Col md={10} lg={6} xl={6} xll={6} className='mb-5 mb-lg-0'>
            <h2 className='d-lg-none text-center mb-4'>{idiom.Skills.subtitle4}</h2>
            <div data-aos="fade-left" className={`d-flex p-5 m-lg-5 bgSkill-${bgMode} flex-wrap justify-content-center divSkill`}>
              <div className='imgSkill' onMouseEnter={()=> setHover(17)} onMouseLeave={() =>setHover(null)}>
                <Image src={Mongo} width={'100px'} height={'auto'} className={hover==17 ? 'imageS m-3' : 'm-3'}></Image>
                <p className={hover==17 ? 'pafec' : 'd-none'}>MongoDB</p>
              </div>
              <div className='imgSkill' onMouseEnter={()=> setHover(18)} onMouseLeave={() =>setHover(null)}>
                <Image src={Heidi} width={'100px'} height={'100px'} className={hover==18 ? 'imageS m-3' : 'm-3'}></Image>
                <p className={hover==18 ? 'pafec' : 'd-none'}>HeidiSQL</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SectionSkill