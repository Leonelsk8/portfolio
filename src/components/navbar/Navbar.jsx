import React, {useState} from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2'

function NavBar(props){
  const bgNav = props.bgNav;
  const modeChange = props.buttMode;
  const lang = props.lang;
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
    <Navbar bg={bgNav} expand="lg" variant={bgNav} className={`border-bottom border-secondary py-2`}>
      <Container fluid className='px-2 px-md-4'>
        <Navbar.Brand href="#home">Portfolio - Leonel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='active' href="#home">{lang.Nav.home}</Nav.Link>
            <Nav.Link href="#link" className="me-lg-2" data-bs-toggle="modal" data-bs-target="#exampleModalNav">{lang.Nav.contact}</Nav.Link>
            <label className="interruptor">
              <input type="checkbox" onClick={modeChange}/>
              <span><ion-icon name="moon-outline" className="moon"></ion-icon></span>
            </label>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className="modal fade" id="exampleModalNav" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content bg-dark text-white">
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
                  <input type="email" value={email} name="email" className="form-control" id="exampleInputEmail1" aria-required onChange={(e) => setEmail(e.target.value)} placeholder="Email" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputMessage" className="form-label">{lang.form.messag}</label>
                  <textarea value={message} maxLength="500" name='message' className="form-control" onChange={(e) => setMessage(e.target.value)} placeholder={lang.form.messag} id="exampleInputMessage" aria-required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">{lang.form.but}</button>
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{lang.form.close}</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default NavBar;