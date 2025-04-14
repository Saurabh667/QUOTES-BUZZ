import React from 'react';
import { Link } from 'react-router-dom'; 
import './home.css';


const Home = () => {
    return(
        <>
        <div className="home-page">
      <div className="home-container">
        <h1 className="home-title">Welcome to the Quote Generator</h1>
        <p className="home-description">
          Our mission is simple: to inspire, motivate, and connect with the power of words. Discover quotes from legendary authors, curated for every mood.
        </p>
        
        <div className="nav-links">
          <Link to="/quotes" className="nav-link">
            <button className="nav-button">Generate a Quote</button>
          </Link>
          <Link to="/about" className="nav-link">
            <button className="nav-button">About</button>
          </Link>
          <Link to="/authors" className="nav-link">
            <button className="nav-button">Authors</button>
          </Link>
        </div>

        <div className="home-info">
          <h2>How It Works</h2>
          <p>With just a click of a button, you'll get a random quote from some of the greatest authors of all time. Whether you're looking for inspiration or a new perspective, our quote generator will provide the perfect words for any moment.</p>
        </div>
        
        <div className="footer">
          <p>&copy; 2025 Quote Generator | Powered by Inspiration</p>
        </div>
      </div>
    </div>
        </>
    )
};

export default Home;