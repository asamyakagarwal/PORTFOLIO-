import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section>
      <h5>What I </h5>
      <h2>HAVE</h2>

      <div className="container services__container">
       {/* <article className="services"> */}
            {/* <div className='service__head'>
              <h3>UI / UX design</h3>
            </div>

            <ul className='service__list'>
                <li>
                <BiCheck className='service__list-icon'/>
                <p>lorem , jbn, sdfsf, sdfs sdf fgsdg</p>
                </li> 
                <li>
                <BiCheck className='service__list-icon'/>
                <p>lorem , jbn, sdfsf, sdfs sdf fgsdg</p>
                </li>
                <li>
                <BiCheck className='service__list-icon'/>
                <p>lorem , jbn, sdfsf, sdfs sdf fgsdg</p>
                </li>
                <li>
                <BiCheck className='service__list-icon'/>
                <p>lorem , jbn, sdfsf, sdfs sdf fgsdg</p>
                </li>
                 <li>
                <BiCheck className='service__list-icon'/>
                <p>lorem , jbn, sdfsf, sdfs sdf fgsdg</p>
                </li>
                
            </ul> */}
       {/* </article> */}



       <article className="services">
            <div className='service__head'>
              <h3> LANGUAGES </h3>
            </div>

            <ul className='service__list'>
                <li>
                <BiCheck className='service__list-icon'/>
                <p>JAVA</p>
                </li> 
                <li>
                <BiCheck className='service__list-icon'/>
                <p>C++</p>
                </li>
                <li>
                <BiCheck className='service__list-icon'/>
                <p>HTML</p>
                </li>
                <li>
                <BiCheck className='service__list-icon'/>
                <p>CSS</p>
                </li>
                 <li>
                <BiCheck className='service__list-icon'/>
                <p>JavaScript</p>
                </li>
                
                
                
                
            </ul>
       </article>



       <article className="services">
            <div className='service__head'>
              <h3> SKILLS </h3>
            </div>

            <ul className='service__list'>
                <li>
                <BiCheck className='service__list-icon'/>
                <p>DATA STRUCTURES AND ALGORITHMS</p>
                </li> 
                <li>
                <BiCheck className='service__list-icon'/>
                <p>LEADERSHIP SKILLS</p>
                </li>
                <li>
                <BiCheck className='service__list-icon'/>
                <p>CREATIVE THINKING</p>
                </li>
                <li>
                <BiCheck className='service__list-icon'/>
                <p>COMMUNICATION SKILLS</p>
                </li>
                <li>
                <BiCheck className='service__list-icon'/>
                <p>PROBLEM SOLVER</p>
                </li>
               
                
            </ul>
       </article>

      </div>

    </section>
  )
}

export default Services
