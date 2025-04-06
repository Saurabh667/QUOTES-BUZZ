import React, { useState } from "react";
import like_icon from '../logos/like-icon.png';
import reload_icon from '../logos/reload-icon.png';
import './quotes.css';
// import Quotes from "./newQuotes";

const randomQuotes = [
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "Happiness depends upon ourselves.", author: "Aristotle" },
    { quote: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { quote: "What we achieve inwardly will change outer reality.", author: "Plutarch" },
    { quote: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { quote: "Life isn’t about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
    { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { quote: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem" },
    { quote: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
    { quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { quote: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
    { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    { quote: "Do what you feel in your heart to be right—for you’ll be criticized anyway.", author: "Eleanor Roosevelt" },
    { quote: "Opportunities don’t happen. You create them.", author: "Chris Grosser" },
    { quote: "If you cannot do great things, do small things in a great way.", author: "Napoleon Hill" },
    { quote: "A journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
    { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
    { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { quote: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { quote: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
    { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { quote: "All our dreams can come true, if we have the courage to pursue them.", author: "Walt Disney" },
    { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { quote: "Keep going. Everything you need will come to you at the perfect time.", author: "Unknown" },
    { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { quote: "You don’t have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
    { quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { quote: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { quote: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
    { quote: "Everything has beauty, but not everyone sees it.", author: "Confucius" },
    { quote: "Do what you love and you’ll never work a day in your life.", author: "Marc Anthony" },
    { quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { quote: "Success is getting what you want. Happiness is wanting what you get.", author: "Dale Carnegie" },
    { quote: "Tough times never last, but tough people do.", author: "Robert H. Schuller" },
    { quote: "An unexamined life is not worth living.", author: "Socrates" },
    { quote: "Change your thoughts and you change your world.", author: "Norman Vincent Peale" },
    { quote: "When everything seems to be going against you, remember that the airplane takes off against the wind.", author: "Henry Ford" },
    { quote: "Do what you can with all you have, wherever you are.", author: "Theodore Roosevelt" },
    { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { quote: "If you judge people, you have no time to love them.", author: "Mother Teresa" },
    { quote: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
    { quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
    { quote: "Love the life you live. Live the life you love.", author: "Bob Marley" },
    { quote: "When one door closes, another opens.", author: "Alexander Graham Bell" },
    { quote: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
    { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" }
  ];



const quotes = () => {
    const [quotes,setQuotes]= useState(getRandomQuote())
    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * randomQuotes.length);
        return randomQuotes[randomIndex];
      }
    

    return(
        <>
        
        <div className="box"> 
            <div className="quotes">{quotes.quote}</div>
            <div>
                <div className="line"></div>
                <div className="bottom">
                    <div className="author">{quotes.author}</div>
                    <div className="logos">
                    <img src={like_icon}/>
                    <button onClick={() => setQuotes(getRandomQuote())} className="reload">reload</button>
                    <img src={reload_icon}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default quotes;
