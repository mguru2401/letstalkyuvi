import React, { useState } from 'react'
import '../styles/header.css'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>LetsTalkYuvi</h1>
            <span className="tagline">Let’s talk about what really matters.</span>
          </div>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <a href="#episodes">Episodes</a>
            <a href="#topics">Topics</a>
            <a href="#subscribe">Subscribe</a>
            <a href="#about">About</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
