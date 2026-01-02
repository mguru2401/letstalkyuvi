import React from 'react'
import '../styles/topics.css'

interface Topic {
  id: number
  name: string
  description: string
  icon: string
  color: string
  episodeCount: number
}

const topicsData: Topic[] = [
  {
    id: 1,
    name: 'Sleep',
    description: 'Optimize your sleep for better health and productivity',
    icon: '😴',
    color: '#4f46e5',
    episodeCount: 12,
  },
  {
    id: 2,
    name: 'Fitness',
    description: 'Training protocols and exercise science insights',
    icon: '💪',
    color: '#10b981',
    episodeCount: 18,
  },
  {
    id: 3,
    name: 'Mental Health',
    description: 'Stress management and psychological wellness',
    icon: '🧠',
    color: '#f59e0b',
    episodeCount: 15,
  },
  {
    id: 4,
    name: 'Nutrition',
    description: 'Evidence-based diet and nutrition strategies',
    icon: '🥗',
    color: '#ec4899',
    episodeCount: 14,
  },
  {
    id: 5,
    name: 'Motivation',
    description: 'Build habits and achieve your goals',
    icon: '🎯',
    color: '#06b6d4',
    episodeCount: 11,
  },
  {
    id: 6,
    name: 'Recovery',
    description: 'Physical and mental recovery strategies',
    icon: '🧘',
    color: '#8b5cf6',
    episodeCount: 9,
  },
]

export const Topics: React.FC = () => {
  return (
    <section id="topics" className="topics">
      <div className="container">
        <div className="section-header fade-in">
          <h2>Explore Topics</h2>
          <p>Browse content by your areas of interest</p>
        </div>

        <div className="topics-grid">
          {topicsData.map((topic) => (
            <div
              key={topic.id}
              className="topic-card fade-in"
              style={{ '--accent-color': topic.color } as React.CSSProperties & { '--accent-color': string }}
            >
              <div className="topic-icon">{topic.icon}</div>
              <h3>{topic.name}</h3>
              <p>{topic.description}</p>
              <div className="topic-footer">
                <span className="episode-badge">{topic.episodeCount} Episodes</span>
                <button className="btn-arrow">→</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
