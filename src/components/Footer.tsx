import React from 'react'
import '../styles/footer.css'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>LetsTalkYuvi</h3>
            <p>Science-backed health and wellness insights for a better life.</p>
            <div className="social-links">
              <a href="#" aria-label="Twitter">
                𝕏
              </a>
              <a href="#" aria-label="Instagram">
                📷
              </a>
              <a href="#" aria-label="Facebook">
                f
              </a>
              <a href="#" aria-label="YouTube">
                ▶
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Content</h4>
            <ul>
              <li>
                <a href="#episodes">Episodes</a>
              </li>
              <li>
                <a href="#topics">Topics</a>
              </li>
              <li>
                <a href="#">Protocols</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>
              Email:{' '}
              <a href="mailto:mguru2401@gmail.com">mguru2401@gmail.com</a>
            </p>
            <p>Have questions? We'd love to hear from you!</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} LetsTalkYuvi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
