import React from "react";
import './about-us.css';


const about = () => {
    return(
        <>
    <div className="about-page">
      <div className="about-container">
        <u><h1 className="about-title">About Our Quote Generator</h1></u>
        <p className="about-description">
          Welcome to our Quote Generator website! Here, we aim to inspire and uplift you with random quotes from some of the greatest authors in history. Whether you're looking for a bit of wisdom, a spark of motivation, or simply a beautifully written sentence, our website provides a vast collection of quotes to suit every mood.
        </p>
        <p className="about-description">
          The Quote Generator is powered by a carefully curated list of timeless quotes. With just a click of a button, you can generate a new quote to brighten your day. We hope to bring a moment of peace, reflection, and inspiration to each user who visits our page.
        </p>
        <h2 className="about-author-title"><u>About the Creator</u></h2>
        <p className="about-author">
          This website was created with the love of literature and the power of words. The goal is to share the wisdom and beauty of the greatest minds in history, in an easy-to-access and enjoyable format. Thank you for visiting, and we hope the quotes inspire you as much as they inspire us!
        </p>
      </div>
    </div>
        </>
    )
}
export default about;