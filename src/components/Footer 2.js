import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub, faFacebook} from '@fortawesome/free-brands-svg-icons'
import '../styles/Footer.css'
function Footer() {
  return (
    <div className='footer'>
      <div></div>
      <div className='socalMedia'><FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faLinkedin} />
      <FontAwesomeIcon icon={faGithub} />
      <FontAwesomeIcon icon={faFacebook} /></div>
      <p> &copy; 2022 mickey.com</p>
    </div>
  )
}

export default Footer