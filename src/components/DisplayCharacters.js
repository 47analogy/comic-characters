import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiParameters from '../utils/apiUtils';

export default function DisplayCharacters() {
  const params = apiParameters();
  const { apiKey, ts, hash } = params; // REMEMBER TO PUT THIS ON THE SERVER!!!
  const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(url).then(res => setCharacters(res.data.data.results));
  }, []);

  return (
    <div>
      {characters.map(item => (
        <ul key={item.id}>
          <li>
            {item.name}
            {item.description}
            {item.thumbnail.path}
          </li>
        </ul>
      ))}
    </div>
  );
}
