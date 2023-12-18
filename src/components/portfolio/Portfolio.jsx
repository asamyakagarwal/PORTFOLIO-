import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assests/portfolio1.jpg'
import IMG2 from '../../assests/portfolio2.jpg'
import IMG3 from '../../assests/portfolio3.jpg'
// import IMG4 from '../../assests/portfolio4.jpg'
// import IMG5 from '../../assests/portfolio5.png'
// import IMG6 from '../../assests/portfolio6.jpg'


// we can also do thsi by using the array of the data in this . video time : 2:17:31 ...
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Recent work </h5>
      <h2> Projects </h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
              <img src={IMG1} alt=''/>
          </div>
          <h3>project 1 </h3>
          <div className='portfolio__item-cta'>
              <a href="https://github.com" className='btn' target='_blank' >Github</a>
              <a href="https://google.com" className='btn btn-primary' target='_blank' >Live DEMO </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
              <img src={IMG2} alt=''/>
          </div>
          <h3>project 2 </h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target='_blank' >Github</a>
          <a href="https://google.com" className='btn btn-primary' target='_blank' >Live DEMO </a>
          </div>
        </article>


        <article className="portfolio__item">
          <div className="portfolio__item-image">
              <img src={IMG3} alt=''/>
          </div>
          <h3>project 3 </h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target='_blank' >Github</a>
          <a href="https://google.com" className='btn btn-primary' target='_blank' >Live DEMO </a>
          </div>
        </article>


        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
              <img src={IMG4} alt=''/>
          </div>
          <h3>this is the portfolio item title </h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target='_blank' >Github</a>
          <a href="https://google.com" className='btn btn-primary' target='_blank' >Live DEMO </a>
          </div>
        </article> */}


        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
              <img src={IMG5} alt=''/>
          </div>
          <h3>this is the portfolio item title </h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target='_blank' >Github</a>
          <a href="https://google.com" className='btn btn-primary' target='_blank' >Live DEMO </a>
          </div>
        </article> */}



        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
              <img src={IMG6} alt=''/>
          </div>
          <h3>this is the portfolio item title </h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target='_blank' >Github</a>
          <a href="https://google.com" className='btn btn-primary' target='_blank' >Live DEMO </a>
          </div>
        </article> */}


      </div>
    </section>
  )
}

export default Portfolio
