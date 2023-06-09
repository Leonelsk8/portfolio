import React,{ useEffect, useRef } from 'react';
import {datesEs, datesEn} from './dates/ProjDate';
import { BiGlobe } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';


const ProjModal = (props)=>{
  const indice = props.indic -1;
  const languaje = props.idiom;
  const buttonRef = useRef(null);
  const {closeMod, style} = props;

  const dates = languaje===0 ? datesEs : datesEn

  useEffect(() => {
    buttonRef.current.click();
  }, [indice]);
  
  return(
    <>
    <button ref={buttonRef} type="button" className="d-none" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
        <div className={`modal-content text-white ${style.backModal}`} style={{background:`linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 25%, rgba(231,231,231,0) 45%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,1) 100%)`}}>
          <div className="modal-header border-bottom-0">
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
          <div className="modal-footer border-top-0 justify-content-start">
            <div>
              <p>{dates[indice].description}</p>
            </div>
            <div className='d-flex flex-column flex-md-row justify-content-md-end vw-100'>
              {
                dates[indice].link2 === 'private' ? 
                <button disabled className={style.buttdisabled}><FaGithub className={`me-2 ${style.iconsModal}`}/> {dates[indice].but2}</button> :
                <a href={dates[indice].link2} target='_blank' className={`me-2 ${style.buttonModal}`}><FaGithub className={`me-2 ${style.iconsModal}`}/> {dates[indice].but2}</a>
              }
              <a href={dates[indice].link} target='_blank' className={`${style.buttonModal}`}><BiGlobe className={`me-2 ${style.iconsModal}`}/> {dates[indice].but}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProjModal;