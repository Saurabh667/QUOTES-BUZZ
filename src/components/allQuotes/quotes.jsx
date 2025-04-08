import React, { useState } from "react";
import like_icon from '../../assets/logos/like-icon.png';
import reload_icon from '../../assets/logos/reload-icon.png';
import './quotes.css';
import Quotes from "./newQuotes";
import { Link } from "react-router-dom";




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
                <Link to="/home">HOME</Link>
                <Link to="/vedic">VEDIC QUOTES</Link>
                <Link to="/author">ABOUT AUTHOR</Link>
                <Link to="/about">ABOUT US</Link>
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
