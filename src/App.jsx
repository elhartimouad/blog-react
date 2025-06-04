// App.js
import React, { useState } from 'react';
import './App.css';

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
          <h1>FIND MY CAT</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#testimonials">Stories</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>How can you find your <span>CAT</span>, without efforence!</h1>
          <p>Welcome to our Missing Cats Support Forum—a safe, compassionate space for anyone searching for a lost feline friend. Whether your cat slipped out just hours ago or has been missing for weeks, you’re not alone. Here, we share knowledge, resources, and real stories of reunions to keep hope alive.</p>
          <a href="#adopt" className="btn">Find Your Cat Quickly </a>
        </div>
        <div className="hero-image">
          <div className="cat-image"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2 className="section-title">three common reasons <span>Why</span> cats go missing</h2>
        <div className="features-grid">
          <div className="feature-card">
            <i className="fas fa-heart"></i>
            <h3>Escape Through Open Doors/Windows</h3>
            <p>ats are naturally curious and agile. An unsecured door, window, or torn window screen can tempt them to slip outside unnoticed—especially if they see prey or feel territorial.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-laugh-beam"></i>
            <h3>Hiding Nearby Indoors or Outdoors</h3>
            <p>Startled cats often hide in silence:

Indoors: Behind appliances, in closets, or crawl spaces.

Outdoors: Under decks, in bushes, or neighbors' sheds.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-home"></i>
            <h3>Accidental Trapping or Theft</h3>
            <p>Cats may enter open garages, delivery vans, or storage units and get trapped.

Friendly or purebred cats might be mistaken for strays or intentionally taken.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials">
        <h2 className="section-title">Happy <span>Cat Parents</span></h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"After Luna darted out the front door, I panicked. For days, nothing. Then I posted here. User NightWatcher told me: ‘Shy cats hide close. Search at 3 AM with a flashlight.’ Another sent a DIY trail cam guide. I set one up… and there she was — hiding under my neighbor’s shed, just 50 feet away! At 2 AM, armed with tuna and a laser pointer (tip from the forum), I crawled through wet gravel and whispered her name. She meowed back."</p>
            <div className="client">
              <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Sarah Johnson" />
              <div className="client-info">
                <h4>Sarah </h4>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p>"Someone stole Binx, my Bengal, right off my porch. I was shattered. On the forum, user CatDetective urged me: ‘Post flyers at every vet within 20 KM. Thieves bring stolen cats there.’ I did — and added a 1000DH reward (a suggestion here too). Two weeks later, a vet tech recognized Binx from my flyer when a woman brought him in for ‘a checkup."</p>
            <div className="client">
              <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="Michael Chen" />
              <div className="client-info">
                <h4>Mustapha</h4>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p>"When our senior cat, Whiskers, vanished during a road trip stop in Ohio, we thought he was gone forever. Devastated, I posted here. User HighwayAngel tagged Ohio volunteers. Within hours, locals were searching truck stops. User MapMaster created a shared sightings grid. Then, a trucker posted: ‘Tabby cat near mile marker 87, looks thin.’ ."</p>
            <div className="client">
              <img src="https://randomuser.me/api/portraits/women/67.jpg" alt="Emma Rodriguez" />
              <div className="client-info">
                <h4>Sanae</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" id="adopt">
        <h2 className="section-title">Have you lost hope in the <span>search</span>?</h2>
        <p>We are here to help you in the search for your poor cat , you just need to provide enough informatio and photos.</p>
        
        <div className="cta-container">
          <h3>Find Your Purrfect Match Today!</h3>
          <p>Join thousands of happy cat parents who found true love through adoption.</p>
          <form className="form-group" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Enter your email to get started" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required/>
              <form> </form>
              
            <button type="submit" className="btn">Start Adoption Process</button>
          </form>

        </div>
      </section>

      
    </div>
  );
}

export default App;