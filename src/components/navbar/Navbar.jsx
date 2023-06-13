import React, {useState, useContext} from 'react';
import MyContext from '../../MyContext';
import {Container, Nav, Navbar} from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-scroll';
import style from './Nav.module.css';
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin,  } from 'react-icons/fa';

function NavBar(){
  const {bgMode, themeChange, lang} = useContext(MyContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const alert = (titlee,textt,iconn) =>{
    Swal.fire({
      title: titlee,
      text: textt,
      icon: iconn,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://formspree.io/f/mzbqkyap', { name, email, message });
      console.log(response.data);
      alert(lang.form.titleSuccess,lang.form.textSuccess,"success");
    } catch (error) {
      console.error(error);
      alert(lang.form.titleError,lang.form.textError,"error");
    }
  };
   
  return(
    <>
    <Navbar expand="lg" className={`bgNav${bgMode} border-bottom border-secondary py-2 `} id="sectHead">
      <Container fluid className='px-2 px-md-4'>
        <Navbar.Brand href="#home" className='text-white titleNav'>LeonelSk8</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggleButton'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='active text-white' href="#home">{lang.Nav.home}</Nav.Link>
            <Link to="seccion3" smooth={true} className="me-lg-2 nav-link navLink">{lang.Nav.project}</Link>
            <Link to="seccion2" smooth={true} className="me-lg-2 nav-link navLink">{lang.Nav.skill}</Link>
            <Nav.Link href="#link" className="me-lg-2 navLink" data-bs-toggle="modal" data-bs-target="#exampleModalNav">{lang.Nav.contact}</Nav.Link>
            <label className="interruptor">
              <input type="checkbox" onChange={()=>{themeChange()}} checked={bgMode === 'Dark' ? true : false}/>
              <span><ion-icon name="moon-outline" className="moon"></ion-icon></span>
            </label>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className="modal fade" id="exampleModalNav" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content bg-dark text-white" style={{background:`linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 25%, rgba(231,231,231,0) 45%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,1) 100%)`}}>
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">{lang.form.titleMod}</h1>
            <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputName" className="form-label">{lang.form.name}</label>
                  <input type="text" value={name} name="Name" aria-required className="form-control" id="exampleInputName" onChange={(e) => setName(e.target.value)} placeholder={lang.form.name}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                  <input type="email" value={email} name="email" className="form-control" id="exampleInputEmail1" aria-required onChange={(e) => setEmail(e.target.value)} placeholder={lang.form.email} aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputMessage" className="form-label">{lang.form.messag}</label>
                  <textarea value={message} maxLength="500" name='message' className="form-control" onChange={(e) => setMessage(e.target.value)} placeholder={lang.form.messag} id="exampleInputMessage" aria-required></textarea>
                </div>
                <button type="submit" className={`${style.buttonModal}`}><i className="bi bi-send"></i> {lang.form.but}</button>
              </form>
            </div>
            <div>
              <p className='text-center'>También puedes contactarme por:</p>
              <div className='d-flex justify-content-center'>
                <a href='https://api.whatsapp.com/send/?phone=543865678234' target='_blank' className={`Foot-Link text-white me-2`}><FaWhatsapp  className={style.icons}/></a>
                <a href='https://www.linkedin.com/in/leonel-gomez-266292268' target='_blank' className={`Foot-Link text-white me-2`}><FaLinkedin  className={style.icons}/></a>
                <a href='https://www.facebook.com/leonel.gomez.798' target='_blank' className={`Foot-Link text-white me-2`}><FaFacebook  className={style.icons}/></a>
                <a href='https://www.instagram.com/leonelgomez_sk8/?hl=es-la' target='_blank' className={`Foot-Link text-white`}><FaInstagram  className={style.icons}/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default NavBar;