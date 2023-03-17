import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub, faFacebook} from '@fortawesome/free-brands-svg-icons'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My name is Mickey</h2>
        <div className='prompt'>
          <p>Introduction paragraph. Fill out later.</p>
          <div className='socalMedia'><FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faFacebook} />
          </div>
        </div>
      </div>
      <div className='skills'>

        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>ReactJS, Redux, HTML, CSS, NPM, BootStrap, StyledComponents</span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, GraphQL, MySQL, MongoDB</span>
          </li>
          <li className='item'>
            <h2>Langages</h2>
            <span>JavaScript, Python</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home