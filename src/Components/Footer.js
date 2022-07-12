import React from 'react'
import github from './images/github.png';
import twitter from './images/twitter.png';
import linkedin from './images/linkedin2.png'
import facebook from './images/facebook.png';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='iconosfooter'>
      <a href='https://github.com/cesartorresr?tab=repositories'><img src={github} alt='github'/></a>
      <a href='https://twitter.com/CesarTorresR'><img src={twitter} alt='twitter'/></a>
      <a href='https://www.linkedin.com/in/cesartorresreyes/'><img src={linkedin} alt='linkedin'/></a>
      <a href='no tengo'><img src={facebook} alt='facebok'/></a>
      </div>
    </div>
  )
}
