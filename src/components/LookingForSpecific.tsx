import React from 'react'
import {
  FiThermometer,
  FiActivity,
  FiSun,
  FiMessageCircle,
  FiMoon,
  FiPlusCircle,
  FiCpu,
  FiShare2,
  
} from 'react-icons/fi'

import '../styles/looking-for-specific.css'


type Topic = {
  title: string
  icon: React.ReactNode
}

const topics: Topic[] = [
  { title: 'Cold Plunges and Deliberate Cooling', icon: <FiThermometer /> },
  { title: 'Fitness and Workout Routines', icon: <FiActivity /> },
  { title: 'Light Exposure and Circadian Rhythm', icon: <FiSun /> },
  { title: 'Mental Health', icon: <FiMessageCircle /> },
  { title: 'Sleep Hygiene', icon: <FiMoon /> },
  { title: 'Supplementation', icon: <FiPlusCircle /> },
  { title: 'The Brain and Neuroplasticity', icon: <FiCpu /> },
  { title: 'The Science of ADHD', icon: <FiShare2 /> },
]

export const LookingForSpecific: React.FC = () => {
  return (
    <section className="looking-specific">
      <h1>Looking for something specific?</h1>
      {/* Topics */}
      <div className="topic-grid">
        {topics.map((topic, index) => (
          <div key={index} className="topic-card">
            <div className="icon">{topic.icon}</div>
            <h3>{topic.title}</h3>
          </div>
        ))}
      </div>

      <button className="explore-btn">Explore All Topics</button>
    </section>
  )
}
