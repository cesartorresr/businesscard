import React from 'react'
import imagen from './images/cesarimage.jpg'
import imagen1 from './/images/Button.png'
import imagen2 from './images/linkedin.png';

export const Info = () => {
  return (
    <div className='info'>
      <img src={imagen} alt='imagen' className='imagen'/>
      <h1 className='name'>César Torres</h1>
      <h4 className='subtitle'>Frontend developer</h4>
      <h4 className='website'>https://cesarportafolio.netlify.app/</h4>
      <div className='iconos'>
        <a href='https://www.linkedin.com/in/cesartorresreyes/'><img src={imagen2} alt='logo2' target="_blank" rel="noopener noreferrer"/></a>
        <a href='mailto: cesartorresreyes1994@gmail.com'><img src={imagen1} alt='logo1' target="_blank" rel="noopener noreferrer"/></a>
      
      
      </div>
    </div>
  )
}
