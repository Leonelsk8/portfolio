import React,{ useEffect, useRef } from 'react';
import proj1Vid1 from '../../assets/project1Video1.mp4';
import proj1Vid2 from '../../assets/project1Video2.mp4';
import proj2Vid1 from '../../assets/project2Video1.mp4';
import proj2Vid2 from '../../assets/project2Video2.mp4';
import proj3Vid1 from '../../assets/project3Video1.mp4';
import proj3Vid2 from '../../assets/project3Video2.mp4';
import proj3Vid3 from '../../assets/project3Video3.mp4';
import proj4Vid1 from '../../assets/project4Video1.mp4';
import proj4Vid2 from '../../assets/project4Video2.mp4';
import proj4Vid3 from '../../assets/project4Video3.mp4';
import proj5Vid1 from '../../assets/project5Video1.mp4';
import proj5Vid2 from '../../assets/project5Video2.mp4';

const ProjDate = (props)=>{
  const indice = props.indic -1;
  const languaje = props.idiom;
  const buttonRef = useRef(null);
  const closeMod = props.closeMod;
  

  const datesEs = [
    {
      id:1,
      title: 'HEADSHOT',
      description: 'Fué mi primer proyecto, solo con html,css y algunas funciones de bootstrap. Fué hecho en equipo, yo me encargué de: Página principal, Carrousel, Error 404, Galería de imagenes y las páginas de cada post.',
      video: [proj1Vid1, proj1Vid2],
      link: 'https://leonelsk8.github.io/Headshot/',
      but: 'Abrir página'
    },
    {
      id:2,
      title: 'GAME HEART',
      description: 'Fué mi segundo proyecto de práctica. Hecho con html css y js, usé json-server como base de datos en un db.json, la página cuenta con su registro e inicio de sesión, también cuenta con una caja de comentarios funcional. Para probar esto sera necesario de json server',
      video: [proj2Vid1, proj2Vid2],
      link: 'https://leonelsk8.github.io/GameHeart/login.html',
      but: 'Abrir página'
    },
    {
      id:3,
      title: 'GAME PLUS',
      description: 'Fué mi tercer proyecto. Hecho con html css y js, usando local storage como base de datos, la página cuenta con su registro e inicio de sesión, también cuenta con modo oscuro y claro, tiene una cuenta de administrador para realizar CRUD con los post. para entrar como admin la cuenta es: admin123@gmail.com y el password: admin159',
      video: [proj3Vid1, proj3Vid2, proj3Vid3],
      but: 'Abrir página',
      link: 'https://leonelsk8.github.io/GamePlus/login.html'
    },
    {
      id:4,
      title: 'NOVA TECH',
      description: 'Fué mi cuarto proyecto hecho en equipo, sobre un ecommerce de productos electronicos, trabajado con: React + Vite, Bootstrap, MongoDB, Mongoose, ExpressJs, NodeJs, entre otras. Aplicando completamente el stack MERN. Yo me encargué de: Home (Store completo con landing page), Modo nocturno, Cambio de idioma, Panel de control Admin con CRUD de productos, Backend con rutas necesarias para productos (protegidas con JWT dependiendo el usuario y validadas con express validator), carrito de compras con total a pagar, animaciones css, etc.',
      video: [proj4Vid1, proj4Vid2, proj4Vid3],
      but: 'Abrir página',
      link: 'https://nova-tech-technology.netlify.app/home'
    },
    {
      id:5,
      title: 'FARMACIA LA PERLA',
      description: 'Fué un proyecto hecho en equipo trabajando en Visibiliy Studio, sobre un ecommerce de una Farmacia, trabajado con: React + NextJs, Tailwindcss, MongoDB, Mongoose, ExpressJs, NodeJs, entre otras. Yo me encargué del Backend, parte del Frontend, validaciones como la verificación de usuario por gmail, API de mercado pago checkout integrado, entre otras cosas.',
      video: [proj5Vid1, proj5Vid2],
      but: 'Abrir página',
      link: 'https://farmacialaperla.com/'
    }
  ]

  const datesEn = [
    {
      id:1,
      title: 'HEADSHOT',
      description: 'It was my first project, just with html, css and some bootstrap functions. It was done as a team, I was in charge of: Main page, Carousel, Error 404, Image gallery and the pages of each post.',
      link: 'https://leonelsk8.github.io/Headshot/',
      video: [proj1Vid1, proj1Vid2],
      but: 'Open page'
    },
    {
      id:2,
      title: 'GAME HEART',
      description: 'It was my second practice project. Made with html css and js, I used json-server as database in a db.json, the page has its registration and login, it also has a functional comment box. To test this you will need a json server',
      video: [proj2Vid1, proj2Vid2],
      but: 'Open page',
      link: 'https://leonelsk8.github.io/GameHeart/login.html'
    },
    {
      id:3,
      title: 'GAME PLUS',
      description: 'It was my third project. Made with html css and js, using local storage as a database, the page has its registration and login, it also has a dark and light mode, it has an administrator account to CRUD the posts. to enter as admin the account is: admin123@gmail.com and the password: admin159',
      video: [proj3Vid1, proj3Vid2, proj3Vid3],
      but: 'Open page',
      link: 'https://leonelsk8.github.io/GamePlus/login.html'
    },
    {
      id:4,
      title: 'NOVA TECH',
      description: 'It was my fourth team project, about an ecommerce of electronic products, worked with: React + Vite, Bootstrap, MongoDB, Mongoose, ExpressJs, NodeJs, among others. Fully applying the MERN stack. I was in charge of: Home (Full store with landing page), Night mode, Language change, Admin Control Panel with CRUD of products, Backend with necessary routes for products (protected with JWT depending on the user and validated with express validator), shopping cart with total to pay, css animations, etc.',
      video: [proj4Vid1, proj4Vid2, proj4Vid3],
      but: 'Open page',
      link: 'https://nova-tech-technology.netlify.app/home'
    },
    {
      id:5,
      title: 'FARMACIA LA PERLA',
      description: 'It was a team project working in Visibiliy Studio, on an ecommerce of a Pharmacy, worked with: React + NextJs, Tailwindcss, MongoDB, Mongoose, ExpressJs, NodeJs, among others. I took care of the Backend, part of the Frontend, validations such as user verification by gmail, integrated checkout payment market API, among other things.',
      video: [proj5Vid1, proj5Vid2],
      but: 'Open page',
      link: 'https://farmacialaperla.com/'
    }
  ]

  const dates = languaje===0 ? datesEs : datesEn

  useEffect(() => {
    buttonRef.current.click();
  }, [indice]);
  
  return(
    <>
    <button ref={buttonRef} type="button" className="d-none" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
        <div className="modal-content bg-dark text-white">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">{dates[indice].title}</h1>
            <button type="button" className="btn-close bg-white" onClick={()=>closeMod(0)} data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body d-flex flex-wrap justify-content-center">
            {
              dates[indice].video.map((vid, index)=>(
                <video key={index} autoPlay loop  src={vid} type="video/mp4"/>
              ))
            }
          </div>
          <div className="modal-footer">
            <p>{dates[indice].description}</p>
            <div>
              <a href={dates[indice].link} target='_blank' className='btn btn-primary'>{dates[indice].but}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProjDate;