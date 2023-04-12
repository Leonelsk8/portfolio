import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import proj1Vid1 from '../../assets/project1Video1.mp4';
import proj1Vid2 from '../../assets/project1Video2.mp4';
import proj2Vid1 from '../../assets/project2Video1.mp4';
import proj2Vid2 from '../../assets/project2Video2.mp4';
import proj3Vid1 from '../../assets/project3Video1.mp4';
import proj3Vid2 from '../../assets/project3Video2.mp4';
import proj3Vid3 from '../../assets/project3Video3.mp4';

const ProjDate = (props)=>{
  const indice = props.indic -1;
  const closeModal = props.closeMod;
  const languaje = props.idiom;

  const datesEs = [
    {
      id:1,
      title: 'HEADSHOT',
      description: 'Fué mi primer proyecto, solo con html,css y algunas funciones de bootstrap. Fué hecho en equipo, yo me encargué de: Página principal, Carrousel, Error 404, Galería de imagenes y las páginas de cada post.',
      video: [proj1Vid1, proj1Vid2]
    },
    {
      id:2,
      title: 'GAME HEART',
      description: 'Fué mi segundo proyecto. Hecho con html css y js, usé json-server como base de datos en un db.json, la página cuenta con su registro e inicio de sesión, también cuenta con una caja de comentarios.',
      video: [proj2Vid1, proj2Vid2]
    },
    {
      id:3,
      title: 'GAME PLUS',
      description: 'Fué mi tercer proyecto. Hecho con html css y js, usando local storage como base de datos, la página cuenta con su registro e inicio de sesión, también cuenta con modo oscuro y claro, tiene una cuneta de administrador para CRUD con los post',
      video: [proj3Vid1, proj3Vid2, proj3Vid3]
    }
  ]

  const datesEn = [
    {
      id:1,
      title: 'HEADSHOT',
      description: 'It was my first project, just with html, css and some bootstrap functions. It was done as a team, I was in charge of: Main page, Carousel, Error 404, Image gallery and the pages of each post.',
      video: [proj1Vid1, proj1Vid2]
    },
    {
      id:2,
      title: 'GAME HEART',
      description: 'It was my second project. Made with html css and js, I used json-server as a database in a db.json, the page has its registration and login, it also has a comment box.',
      video: [proj2Vid1, proj2Vid2]
    },
    {
      id:3,
      title: 'GAME PLUS',
      description: 'It was my third project. Made with html css and js, using local storage as a database, the page has its registration and login, it also has a dark and light mode, it has an administrator account for CRUD with the posts.',
      video: [proj3Vid1, proj3Vid2, proj3Vid3]
    }
  ]

  const dates = languaje==0 ? datesEs : datesEn

  
  return(
    <section className="modalProj d-flex justify-content-center align-items-center">
      <div className="modalProjContent">
        <Container>
          <Row className='modalDialog'>
            <Col lg={12}>
              <div className='headerModal'>
                <h2 className='text-center pt-4'>{dates[indice].title}</h2>
                <div className='botonModa'>
                  <button type='button' className='botonmodal pt-3' onClick={closeModal}><h1>X</h1></button>
                </div>
              </div>
              <div className='d-flex flex-wrap justify-content-center py-4 divVideos'>
                {
                  dates[indice].video.map((vid, index)=>(
                    <video key={index} autoPlay loop  src={vid} type="video/mp4"/>
                  ))
                }
              </div>
              <div className='px-4 mb-md-4'>
                <p>{dates[indice].description}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default ProjDate;