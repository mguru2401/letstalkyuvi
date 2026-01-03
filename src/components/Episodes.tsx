import React, {  useState } from 'react'
import '../styles/episodes.css'

import img1 from '../assets/thumbnail/thumbnail_2.jpg'
import img2 from '../assets/thumbnail/thumbnail_1.jpg'
import img3 from '../assets/thumbnail/thumbnail_3.jpg'
import img4 from '../assets/hero/image_4.jpg'

interface Episode {
  id: number
  title: string
  description: string
  image: string
  category: string
  duration: string
}

const episodeData: Episode[] = [
  {
    id: 1,
    title: 'Essentials: Micronutrients for Health & Longevity',
    description:
      'Dr. Rhonda Patrick discusses four key micronutrients for longevity, inflammation and cellular health.',
    image: img1,
    category: 'Essentials',
    duration: '34 min',
  },
  {
    id: 2,
    title: 'Defining Healthy Masculinity & How to Build It',
    description: 'Guest episode with practical insights on healthy masculinity.',
    image: img2,
    category: 'Guest Episode',
    duration: '72 min',
  },
  {
    id: 3,
    title: 'Essentials: How to Optimize Your Hormones',
    description: 'Dr. Kyle Gillett on hormones, health and vitality.',
    image: img3,
    category: 'Essentials',
    duration: '28 min',
  },
  {
    id: 4,
    title: 'Nutrition for Peak Performance',
    description: 'Explore the latest research on nutrition and its impact on your body.',
    image: img4,
    category: 'Nutrition',
    duration: '55 min',
  },
  {
    id: 5,
    title: 'Stress Management Techniques',
    description: 'Proven strategies to manage stress and improve daily well-being.',
    image: img2,
    category: 'Wellness',
    duration: '38 min',
  },
]

export const Episodes: React.FC = () => {
  const [loaded, setLoaded] = useState<Record<number | 'featured', boolean>>({
    featured: false,
  })

  const [featured, ...list] = episodeData

  /** ✅ Handle cached images */
  const markLoaded = (key: number | 'featured') => {
    setLoaded((prev) => ({ ...prev, [key]: true }))
  }

  return (
    <section id="episodes" className="episodes">
      <div className="container">
        <div className="section-header fade-in">
          <h2>Latest Episodes</h2>
          <p>Dive into our latest discussions on health and wellness</p>
        </div>

        {/* ================= FEATURED ================= */}
        <div className="episodes-featured fade-in">
          <div className="featured-image">
            {!loaded.featured && <div className="image-skeleton featured" />}
            <img
              src={featured.image}
              alt={featured.title}
              loading="eager"   // 👈 important for hero
              onLoad={() => markLoaded('featured')}
              onError={() => markLoaded('featured')}
              className={loaded.featured ? 'img-visible' : 'img-hidden'}
            />
          </div>

          <div className="featured-content">
            <span className="episode-category">{featured.category}</span>
            <h3>{featured.title}</h3>
            <p>{featured.description}</p>
            <div className="episode-meta">
              <span className="duration">⏱️ {featured.duration}</span>
              <button className="btn-play">Play Episode</button>
            </div>
          </div>
        </div>

        {/* ================= GRID ================= */}
        <div className="episodes-grid">
          {list.map((episode) => (
            <article key={episode.id} className="episode-small fade-in">
              <div className="small-thumb">
                {!loaded[episode.id] && (
                  <div className="image-skeleton small" />
                )}
                <img
                  src={episode.image}
                  alt={episode.title}
                  loading="lazy"
                  onLoad={() => markLoaded(episode.id)}
                  onError={() => markLoaded(episode.id)}
                  className={
                    loaded[episode.id] ? 'img-visible' : 'img-hidden'
                  }
                />
              </div>

              <div className="small-content">
                <span className="episode-category small">
                  {episode.category}
                </span>
                <h4>{episode.title}</h4>
                <p className="excerpt">{episode.description}</p>
                <div className="episode-meta">
                  <span className="duration">⏱️ {episode.duration}</span>
                  <button className="btn-play small">Play</button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="view-all">
          <button className="btn-primary">View All Episodes</button>
        </div>
      </div>
    </section>
  )
}
