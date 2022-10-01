//Misc
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

//Components
import Photo from "./components/Photo";

//API
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;



function App() {
  return (
    <div>
      <h2>Stock Photos Search</h2>
    </div>
  );
}

export default App;
