import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap';
import './sectionskill_module.css';
import Bootstrap from './Logos/Bootstrap.svg';
import Css from './Logos/Css.svg';
import Html from './Logos/Html.svg';
import JS from './Logos/Javascript.svg';
import TS from './Logos/Typescript.svg';
import reactLogo from './Logos/React.svg';
import Vue from './Logos/Vue.svg'

const SectionSkill = (props) => {
  const bgMode = props.bgMode;
  const textMode = props.modeText;
  return (
    <section className={`text-${textMode}`}>
      <h2 className='text-center mb-5'>My Skills</h2>
      <Container fluid>
        <Row>
          <Col lg={6} className={`lineaCol${bgMode}`}>
            <div className={`d-flex p-5 m-5 bgSkill-${bgMode} flex-wrap divSkill`}>
              <div className='imgSkill'>
                <Image src={Html} width={'100px'} height={'auto'} className='m-3'></Image>
                <p className='pafec'>Avanzado</p>
              </div>
              <div className='imgSkill'>
                <Image src={Css} width={'100px'} height={'auto'} className='m-3'></Image>

              </div>
              <div className='imgSkill'>
                <Image src={JS} width={'100px'} height={'100px'} className='m-3'></Image>

              </div>
              <div className='imgSkill'>
                <Image src={TS} width={'100px'} height={'100px'} className='m-3'></Image>

              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className={`colText`}>
              <h1>Lenguajes</h1>
            </div>
          </Col>
          <Col lg={6} className={`lineaCol${bgMode}`}>
          <div className={`colText`}>
              <h1>Frameworks</h1>
            </div>
          </Col>
          <Col lg={6}>
            <div className={`d-flex p-5 m-5 bgSkill-${bgMode} flex-wrap divSkill`}>
              <Image src={reactLogo} width={'100px'} height={'100px'} className='m-3'></Image>
              <Image src={Bootstrap} width={'100px'} height={'100px'} className='m-3'></Image>
              <Image src={Vue} width={'100px'} height={'100px'} className='m-3'></Image>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SectionSkill