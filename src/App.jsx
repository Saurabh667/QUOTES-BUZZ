import React from 'react';
import Quotes from './components/allQuotes/quotes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/allQuotes/home';
import Vedic from './components/allQuotes/vedic-quotes';
import About from './components/allQuotes/about-us';
import Author from './components/allQuotes/author';

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Quotes />} />
        <Route path="/home" element={<Home />} />
        <Route path='/vedic' element={<Vedic />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/author' element={<Author />}/>

        
      </Routes>
    </Router>
      {/* <Quotes/> */}
    </>
  )
}

export default App;
