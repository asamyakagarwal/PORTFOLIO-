import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assests/avatar1.jpg'
import AVTR2 from '../../assests/avatar2.jpg'
import AVTR3 from '../../assests/avatar3.jpg'
import AVTR4 from '../../assests/avatar4.jpg'


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5> Review from Clients</h5>
      <h2> Testimonials</h2>

      <div className="container testimonals__container">
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR1}   alt = 'avatar one'  />
          </div>

            <h5 className='client__name'>Swastik gour </h5>
            <small className='client__review' >
                lorem myu aj em rika fj  afj f a ad adh adha dja sd ad ajd   gdfgegergerg ege   e er gergeg greg afj ahd a a dj ad ash dwk dfjshkfhskdhfhs hs fhd fksd fkshd f
            </small>

        </article>

        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR2}   alt = 'avatar two'  /> 
          </div>

            <h5 className='client__name'>Sahil samwal </h5>
            <small className='client__review' >
                lorem myu aj em rika fj  afj f a ad adh ae df dgf eg eg egegd eg edha dja sd ad ajd  afj ahd a a dj ad ash dwk dfjshkfhskdhfhs hs fhd fksd fkshd f
            </small> 

        </article>

        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR3}   alt = 'avatar three'  />
          </div>

            <h5 className='client__name'>mihir mangal </h5>
            <small className='client__review' >
                lorem myu aj em rika fj  afj f a ad adh adha dja sd ad ajd  afj ahd dfgdgd geg degreg dfgdfgg g dfg d a a dj ad ash dwk dfjshkfhskdhfhs hs fhd fksd fkshd f
            </small>

        </article>


        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR4}   alt = 'avatar four'  />
          </div>

            <h5 className='client__name'>kartik gupta  </h5>
            <small className='client__review' >
                lorem myu aj em rika fj  afj f a ad adh adha dja sd ad ajd  afj ahd a a dj ad ash dfrge eg eh e gdfg dgfdhg dfh gfdg dfg dg dfg fg dfxgwk dfjshkfhskdhfhs hs fhd fksd fkshd f
            </small>

        </article>
      </div>
      
    </section>
  )
}

export default Testimonials



