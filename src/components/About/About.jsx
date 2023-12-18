import React from 'react'
import './About.css'
import ME from '../../assests/my-image.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me </h2>

      <div className="container about__container">
        <div className="about__me">

          <div className="about__me-image">
            <img src={ME} alt="About me image" className="responsive-image" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>2+ years</small>
            </article>

            <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Projects</h5>
                <small>3+ completed</small>
            </article>

            <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Academic Performance</h5>
                <small> 7.4 cgpa </small>
            </article>

          </div>

          <p>
          My passion for frontend development is unwavering. I am excited about the opportunity to contribute to real-world projects and apply the skills I've acquired through self-learning. I have a solid foundation in HTML, CSS, and JavaScript, and I am committed to expanding my knowledge to stay current with the latest technologies ."          </p>

          <a href='#contact' className='btn btn-primary'> Lets-Talk </a>


        </div>
      </div>
    </section>
  )
}

export default About