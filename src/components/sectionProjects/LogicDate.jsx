import React,{ useEffect, useRef } from 'react'
import logic3video from '../../assets/logic3video.mp4';

const LogicDate = (props) => {
  const indice = props.indic -1;
  const languaje = props.idiom;
  const buttonRef = useRef(null);
  const closeMod = props.closeMod;
  

  const datesEs = [
    {
      id:1,
      title: 'Calculadora básica JS',
      description: 'Fué mi primera calculadora hecha con Javascript usando solo inputs para recibir los datos.',
      video: [],
      link: '',
      but: 'Abrir página',
      but2: 'Abrir repositorio',
      link2: ''
    },
    {
      id:2,
      title: 'Tiro de dados',
      description: 'Este simulador de tirar dados esta hecho con Javascript',
      video: [],
      link: '',
      but: 'Abrir página',
      but2: 'Abrir repositorio',
      link2: ''
    },
    {
      id:3,
      title: 'Calculadora básica con TypeScript',
      description: 'Es una calculadora básica hecha con Typescript, cumple sus reglas matemáticas en una operación variada, se resolverán las multiplicaciones y divisiones primero, antes que las sumas y restas.',
      video: [logic3video],
      but: 'Abrir página',
      link: 'https://leonelsk8.github.io/Calculator-with-Typescript/',
      but2: 'Abrir repositorio',
      link2: 'https://github.com/Leonelsk8/Calculator-with-Typescript'
    }
  ]

  const datesEn = [
    {
      id:1,
      title: 'Basic JS Calculator',
      description: 'It was my first calculator made with Javascript using only inputs to receive the data.',
      video: [],
      link: '',
      but: 'Open page',
      but2: 'Open repository',
      link2: ''
    },
    {
      id:2,
      title: 'Dice roll',
      description: 'This dice roll simulator is made with Javascript',
      video: [],
      link: '',
      but: 'Open page',
      but2: 'Open repository',
      link2: ''
    },
    {
      id:3,
      title: 'Basic calculator with TypeScript',
      description: 'It is a basic calculator made with Typescript, it fulfills its mathematical rules in a varied operation, multiplications and divisions will be solved first, before addition and subtraction.',
      video: [logic3video],
      but: 'Open page',
      link: 'https://leonelsk8.github.io/Calculator-with-Typescript/',
      but2: 'Open repository',
      link2: 'https://github.com/Leonelsk8/Calculator-with-Typescript'
    }
  ]

  const dates = languaje===0 ? datesEs : datesEn

  useEffect(() => {
    buttonRef.current.click();
  }, [indice]);
  return (
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
              <a href={dates[indice].link2} target='_blank' className='btn btn-primary me-2'>{dates[indice].but2}</a>
              <a href={dates[indice].link} target='_blank' className='btn btn-primary'>{dates[indice].but}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default LogicDate