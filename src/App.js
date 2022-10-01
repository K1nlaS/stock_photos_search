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

  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchImages = async () => {
    setLoading(true);
    let url = `${mainUrl}${clientID}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setPhotos(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit");
  };

  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input type="text" placeholder="Search Photos" className="form-input" />
          <button type="submit" className="submit-btn" onClick={handleSubmit}><FaSearch /></button>
        </form>
      </section>

      <section className="photos">
        <div className="photos-center">
          {
            photos.map(photo => <Photo key={photo.id} {...photo} />)
          }

          {loading && <h2 className="loading">Loading...</h2>}
        </div>
      </section>
    </main>
  );
}

export default App;
