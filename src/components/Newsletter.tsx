import React, { useState } from 'react'
import { supabase } from '../services/supabase'
import '../styles/newsletter.css'

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email: email.trim() }])

      if (error) {
        if (error.code === '23505') {
          setMessage({ type: 'error', text: 'This email is already subscribed!' })
        } else {
          setMessage({ type: 'error', text: 'Failed to subscribe. Please try again.' })
        }
      } else {
        setMessage({ type: 'success', text: 'Thanks for subscribing! Check your email for updates.' })
        setEmail('')
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'An unexpected error occurred. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="subscribe" className="newsletter fade-in">
      <div className="container">
        <div className="newsletter-content">
          <h2>Stay Updated</h2>
          <p>Get the latest episodes and wellness tips delivered to your inbox</p>

          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="form-group">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
              <button type="submit" className="btn-primary" disabled={loading}>
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>

            {message && (
              <div className={`message ${message.type}`}>
                {message.type === 'success' ? '✓' : '✗'} {message.text}
              </div>
            )}
          </form>

          <p className="newsletter-note">No spam. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}
