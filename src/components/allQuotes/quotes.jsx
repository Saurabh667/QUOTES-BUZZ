import React, { useState } from "react";
import like_icon from '../../assets/logos/like-icon.png';
import reload_icon from '../../assets/logos/reload-icon.png';
// import background from '../../assets/logos/quotes-bg';
import './quotes.css';
import Quotes from "./newQuotes";



const quotes = () => {
    const [quotes,setQuotes]= useState(getRandomQuote())
    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * Quotes.length);
        return Quotes[randomIndex];
      }

    const [likeCount, setLikeCount] = useState(0);

    const handleLike = () => {        
    setLikeCount(prevCount => prevCount + 1);
    };
      
    

    return(
        <>
        <div className="title">
            WONDER QUOTES
            <div className="header"> 
                <a href="#" id="home">HOME</a>
                <a href="#" id="q">MOTIVATIONAL QUOTES</a>
                <a href="#" id="about">ABOUT AUTHOR</a>
                <a href="#" id="us">ABOUT US</a>
            </div>
        </div>
        
        
        <div className="box"> 
            <div className="quotes">{quotes.quote}</div>
            <div>
                <div className="line"></div>
                
            </div>
        </div>
        <div className="new-bottom">
            <div className="bottom">
                    <div className="author">{quotes.author}</div>
                    <div className="logos">
                    <img src={like_icon} className="like" onClick={handleLike} />
                    <span className="like-count">{likeCount}</span>
                    <img src={reload_icon} onClick={() => setQuotes(getRandomQuote())} className="reload-icon"/>
                    </div>
                </div>
                {/* <button onClick={() => setQuotes(getRandomQuote())} className="reload">reload</button> */}
        </div>
        </>
    )
}

export default quotes;
