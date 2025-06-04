// App.js

import React, { useState } from 'react';
import './CatArticles.css';

function App() {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! We'll send adoption information to: ${email}`);
    setEmail('');
  };

  return (
    <div className="App">
      {/* Header */}
      <header>
        <div className="logo">
          <i className="fas fa-paw"></i>
          <h1>PurrfectMatch</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Benefits</a></li>
            <li><a href="#testimonials">Stories</a></li>
            <li><a href="#adopt">Adopt</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Don't Let Your Days Be <span>Monotonous</span>, Adopt a Cat Now!</h1>
          <p>Find true love in the form of a furry companion. Our cats are waiting to bring joy, comfort, and endless entertainment to your life.</p>
          <a href="#adopt" className="btn">Find Your Purrfect Match</a>
        </div>
        <div className="hero-image">
          <div className="cat-image"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2 className="section-title">Why <span>Adopt</span> a Cat?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <i className="fas fa-heart"></i>
            <h3>Unconditional Love</h3>
            <p>Cats form deep bonds with their owners and provide constant companionship and affection.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-laugh-beam"></i>
            <h3>Stress Relief</h3>
            <p>Petting a cat can lower stress levels and reduce anxiety. Their purring has a calming effect.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-home"></i>
            <h3>Home Atmosphere</h3>
            <p>Cats add warmth to your home and make it feel more alive with their playful antics.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials">
        <h2 className="section-title">Happy <span>Cat Parents</span></h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"Adopting Luna was the best decision we ever made. She brings so much joy to our home and has helped me through some tough times."</p>
            <div className="client">
              <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Sarah Johnson" />
              <div className="client-info">
                <h4>Sarah Johnson</h4>
                <p>Cat parent for 2 years</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p>"After adopting Max, my daily routine became so much brighter. He's not just a pet, he's family and my best friend."</p>
            <div className="client">
              <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="Michael Chen" />
              <div className="client-info">
                <h4>Michael Chen</h4>
                <p>Cat parent for 3 years</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p>"I was hesitant at first, but adopting two rescue cats has transformed my life. They're hilarious, loving, and endlessly entertaining."</p>
            <div className="client">
              <img src="https://randomuser.me/api/portraits/women/67.jpg" alt="Emma Rodriguez" />
              <div className="client-info">
                <h4>Emma Rodriguez</h4>
                <p>Cat parent for 1 year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" id="adopt">
        <h2 className="section-title">Ready to <span>Adopt</span>?</h2>
        <p>Fill out our simple adoption form and we'll help you find the perfect feline companion</p>
        
        <div className="cta-container">
          <h3>Find Your Purrfect Match Today!</h3>
          <p>Join thousands of happy cat parents who found true love through adoption.</p>
          <form className="form-group" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Enter your email to get started" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn">Start Adoption Process</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="footer-content">
          <div className="logo">
            <i className="fas fa-paw"></i>
            <h1>PurrfectMatch</h1>
          </div>
          <p>Helping cats find loving homes since 2015</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
          </div>
          <p>&copy; 2023 PurrfectMatch. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;