import React, {useState} from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap';
import foto2 from '../../assets/perfil2.png';
import wsp from '../../assets/whatsapp.svg';
import face from '../../assets/facebook.svg';
import ig from '../../assets/instagram.svg';

const Footer = (props) => {
  const lang = props.lang;
  const [hovChange, setHover] = useState(null)

  return (
    <Container fluid className='bgCardDark mt-5 border-top border-1 border-secondary'>
      <Row className='text-white text-center py-4 position-relative'>
        <Col sm={12} md={12} lg={4}>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <Image src={foto2} width='150px' className='fotoFoot' onClick={()=>{setHover(1)}}></Image>
            <p className='mt-2'>- Leonel Gomez Dev. Full-Stack -</p>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4} className='mt-4 mt-lg-0'>
          <h2>Info</h2>
          <p className='mt-4'>{lang.Foot.info}</p>
          <div>
            <p className='d-inline'>My Github: </p><a href='https://github.com/Leonelsk8' target='blank'>https://github.com/Leonelsk8</a>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4} className='mt-4 mt-lg-0'>
          <h2>{lang.Foot.RS}</h2>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <div className='d-flex align-items-center mt-4'>
              <Image src={wsp} width={'50px'}></Image>
              <a href='https://api.whatsapp.com/send/?phone=543865678234' target='_blank' className='Foot-Link'><h6 className='ms-2'>Whatsapp</h6></a>
            </div>
            <div className='d-flex align-items-center mt-3'>
              <Image src={face} width={'50px'}></Image>
              <a href='https://www.facebook.com/leonel.gomez.798' target='_blank' className='Foot-Link'><h6 className='ms-2'>Facebook</h6></a>
            </div>
            <div className='d-flex align-items-center mt-3'>
              <Image src={ig} width={'50px'}></Image>
              <a href='https://www.instagram.com/leonelgomez_sk8/?hl=es-la' target='_blank' className='Foot-Link'><h6 className='ms-2'>Instagram</h6></a>
            </div>
          </div>
        </Col>
        <Col sm={12} md={12} lg={12} xl={12} className={hovChange === 1 ? 'SlimFoot shadow' : 'd-none'}>
          <div className='pt-4 text-end'>
            <a type='button' onClick={()=>{setHover(null)}}><h2 className='text-dark'>X</h2></a>
          </div>
          <div className='text-center'>
            <h2 className='text-dark'>{lang.Foot.slim1}</h2>
            <h5 className='text-dark'>{lang.Foot.slim2}</h5>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer