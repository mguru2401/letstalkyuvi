import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import '../styles/episodes.css'
import { episodeData } from './Episodes'
import { useNavigate } from 'react-router-dom'

const EpisodesAll: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="app">
      <Header />

      <main>
        <section className="episodes" style={{ paddingTop: '3rem' }}>
          <div className="container">
            <div className="section-header">
              <h2>All Episodes</h2>
              <p>Browse every episode in one place</p>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <button className="btn-primary" onClick={() => navigate(-1)}>
                ← Back
              </button>
            </div>

            <div className="episodes-grid">
              {episodeData.map((ep) => (
                <article key={ep.id} className="episode-small">
                  <div className="small-thumb">
                    <img src={ep.image} alt={ep.title} />
                  </div>

                  <div className="small-content">
                    <span className="episode-category small">{ep.category}</span>
                    <h4>{ep.title}</h4>
                    <p className="excerpt">{ep.description}</p>
                    <div className="episode-meta">
                      <span className="duration">⏱️ {ep.duration}</span>
                      <button className="btn-play small">Play</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default EpisodesAll
