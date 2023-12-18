import React from 'react'
import './Experience.css'
import ExperienceDetail from './ExperienceDetails'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have </h5>
      <h2>My Experiences</h2>

      <div className="container experience__container">
        <div className="experience__frontend">

          <h3> Frontend development </h3>

          <div className="experience__content">
            <ExperienceDetail title="Android SDK" content="Experiente"/>
            <ExperienceDetail title="Android Jetpack" content="Experiente"/>
            <ExperienceDetail title="SwiftUI" content="Intermediario"/>
            <ExperienceDetail title="React Native" content="Experiente"/>
            <ExperienceDetail title="EJS" content="Experiente"/>
            <ExperienceDetail title="React" content="Experiente"/>
          </div>

        </div>
  

  
        <div className="experience__backend">
          <h3>Backend development </h3>
          <div className="experience__content">
            <ExperienceDetail title="AmazonWS" content="Iniciante"/>
            <ExperienceDetail title="NodeJs" content="Experiente"/>
            <ExperienceDetail title="JDBC" content="Intermediário"/>
            <ExperienceDetail title="SQLServer" content="Experiente"/>
            <ExperienceDetail title="noSQL" content="Intermediário"/>
            <ExperienceDetail title="Firebase" content="Experiente"/>
            <ExperienceDetail title="RESTFul API" content="Experiente"/>
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default Experience
