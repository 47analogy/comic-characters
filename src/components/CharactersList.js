import React from 'react';

export default function CharacterList({ characters }) {
  return (
    <div>
      {characters.map(character => (
        <ul key={character.id}>
          <li>
            {character.name}
            {character.description}
          </li>
        </ul>
      ))}
    </div>
  );
}

// TO Do: PropTypes
