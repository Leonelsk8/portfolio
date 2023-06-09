import proj1Vid1 from '../../../assets/project1Video1.mp4';
import proj1Vid2 from '../../../assets/project1Video2.mp4';
import proj2Vid1 from '../../../assets/project2Video1.mp4';
import proj2Vid2 from '../../../assets/project2Video2.mp4';
import proj3Vid1 from '../../../assets/project3Video1.mp4';
import proj3Vid2 from '../../../assets/project3Video2.mp4';
import proj3Vid3 from '../../../assets/project3Video3.mp4';
import proj4Vid1 from '../../../assets/project4Video1.mp4';
import proj4Vid2 from '../../../assets/project4Video2.mp4';
import proj4Vid3 from '../../../assets/project4Video3.mp4';
import proj5Vid1 from '../../../assets/project5Video1.mp4';
import proj5Vid2 from '../../../assets/project5Video2.mp4';

export const datesEs = [
  {
    id:1,
    title: 'HEADSHOT',
    description: 'Fué mi primer proyecto, solo con html,css y algunas funciones de bootstrap. Fué hecho en equipo, yo me encargué de: Página principal, Carrousel, Error 404, Galería de imagenes, Contacto y las páginas de cada post.',
    video: [proj1Vid1, proj1Vid2],
    link: 'https://leonelsk8.github.io/Headshot/',
    but: 'Abrir página',
    but2: "Abrir repositorio",
    link2: "https://github.com/Leonelsk8/Headshot",
    category: 'html css bootstrap'
  },
  {
    id:2,
    title: 'GAME HEART',
    description: 'Fué mi segundo proyecto de práctica. Hecho con html css y js, usé json-server como base de datos en un db.json, la página cuenta con su registro e inicio de sesión, también cuenta con una caja de comentarios funcional. Para probar esto sera necesario de json server',
    video: [proj2Vid1, proj2Vid2],
    link: 'https://leonelsk8.github.io/GameHeart/login.html',
    but: 'Abrir página',
    but2: "Abrir repositorio",
    link2: "https://github.com/Leonelsk8/GameHeart",
    category: 'html css javascript bootstrap'
  },
  {
    id:3,
    title: 'GAME PLUS',
    description: 'Fué mi tercer proyecto trabajado en equipo. Hecho con html css y js, usando local storage como base de datos, la página cuenta con su registro e inicio de sesión, también cuenta con modo oscuro y claro, tiene una cuenta de administrador para realizar CRUD con los post. para entrar como admin la cuenta es: admin123@gmail.com y el password: admin159. Yo me encargué de: pagina principal con carruseles, crud de posts, modo nocturno, pagina de informacion, entre otras cosas.',
    video: [proj3Vid1, proj3Vid2, proj3Vid3],
    but: 'Abrir página',
    link: 'https://game-plus.netlify.app/login.html',
    but2: "Abrir repositorio",
    link2: "https://github.com/Leonelsk8/GamePlus",
    category: 'html css javascript bootstrap'
  },
  {
    id:4,
    title: 'NOVA TECH',
    description: 'Fué mi cuarto proyecto hecho en equipo, sobre un ecommerce de productos electronicos, trabajado con: React + Vite, Bootstrap, MongoDB, Mongoose, ExpressJs, NodeJs, entre otras. Aplicando completamente el stack MERN. Yo me encargué de: Home (Store completo con landing page), Apliqué idea de modo nocturno y cambio de idioma, Panel de control Admin con CRUD de productos, Backend con rutas necesarias para productos (protegidas con JWT dependiendo el usuario y validadas con express validator), carrito de compras con total a pagar, animaciones css, etre otras.',
    video: [proj4Vid1, proj4Vid2, proj4Vid3],
    but: 'Abrir página',
    link: 'https://nova-tech-technology.netlify.app/home',
    but2: "Abrir repositorio",
    link2: "https://github.com/Leonelsk8/Nova-tech-front",
    category: 'html css bootstrap react vite mongodb express nodejs'
  },
  {
    id:5,
    title: 'FARMACIA LA PERLA',
    description: 'Fué un proyecto hecho en equipo trabajando en Visibiliy Studio, sobre un ecommerce de una Farmacia, trabajado con: React + NextJs, Tailwindcss, MongoDB, Mongoose, ExpressJs, NodeJs, entre otras. Yo me encargué del Backend, parte del Frontend, validaciones como la verificación de usuario por gmail, API de mercado pago checkout integrado, entre otras cosas.',
    video: [proj5Vid1, proj5Vid2],
    but: 'Abrir página',
    link: 'https://farmacialaperla.com/',
    but2: "Repositorio privado",
    link2: "private",
    category: 'html css tailwindcss react nextjs mongodb express nodejs'
  }
]

export const datesEn = [
  {
    id:1,
    title: 'HEADSHOT',
    description: 'It was my first project, just with html, css and some bootstrap functions. It was done as a team, I was in charge of: Main page, Carousel, Error 404, Image gallery, Contact and the pages of each post.',
    link: 'https://leonelsk8.github.io/Headshot/',
    video: [proj1Vid1, proj1Vid2],
    but: 'Open page',
    but2: 'Open repository',
    link2: "https://github.com/Leonelsk8/Headshot",
    category: 'html css bootstrap'
  },
  {
    id:2,
    title: 'GAME HEART',
    description: 'It was my second practice project. Made with html css and js, I used json-server as database in a db.json, the page has its registration and login, it also has a functional comment box. To test this you will need a json server',
    video: [proj2Vid1, proj2Vid2],
    but: 'Open page',
    link: 'https://leonelsk8.github.io/GameHeart/login.html',
    but2: 'Open repository',
    link2: "https://github.com/Leonelsk8/GameHeart",
    category: 'html css javascript bootstrap'
  },
  {
    id:3,
    title: 'GAME PLUS',
    description: 'It was my third project worked as a team. Made with html css and js, using local storage as a database, the page has its registration and login, it also has a dark and light mode, it has an administrator account to CRUD the posts. to enter as admin the account is: admin123@gmail.com and the password: admin159. I was in charge of: main page with carousels, crud of posts, night mode, information page, among other things.',
    video: [proj3Vid1, proj3Vid2, proj3Vid3],
    but: 'Open page',
    link: 'https://game-plus.netlify.app/login.html',
    but2: 'Open repository',
    link2: "https://github.com/Leonelsk8/GamePlus",
    category: 'html css javascript bootstrap'
  },
  {
    id:4,
    title: 'NOVA TECH',
    description: 'It was my fourth team project, about an ecommerce of electronic products, worked with: React + Vite, Bootstrap, MongoDB, Mongoose, ExpressJs, NodeJs, among others. Fully applying the MERN stack. I was in charge of: Home (full store with landing page), I applied the idea of night mode and language change, Admin Control Panel with CRUD of products, Backend with necessary routes for products (protected with JWT depending on the user and validated with express validator), shopping cart with total to pay, css animations, among others.',
    video: [proj4Vid1, proj4Vid2, proj4Vid3],
    but: 'Open page',
    link: 'https://nova-tech-technology.netlify.app/home',
    but2: 'Open repository',
    link2: "https://github.com/Leonelsk8/Nova-tech-front",
    category: 'html css bootstrap react vite mongodb express nodejs'
  },
  {
    id:5,
    title: 'FARMACIA LA PERLA',
    description: 'It was a team project working in Visibiliy Studio, on an ecommerce of a Pharmacy, worked with: React + NextJs, Tailwindcss, MongoDB, Mongoose, ExpressJs, NodeJs, among others. I took care of the Backend, part of the Frontend, validations such as user verification by gmail, integrated checkout payment market API, among other things.',
    video: [proj5Vid1, proj5Vid2],
    but: 'Open page',
    link: 'https://farmacialaperla.com/',
    but2: 'Private repository',
    link2: "private",
    category: 'html css tailwindcss react nextjs mongodb express nodejs'
  }
]