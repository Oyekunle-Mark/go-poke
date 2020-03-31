import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Pokemon from '../components/Pokemon';

export default () => {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 9 },
  });

  return (
    <div className="container">
      {pokemons &&
        pokemons.map(pokemon => (
          <Pokemon key={pokemon.key} pokemon={pokemon} />
        ))}
    </div>
  );
};
