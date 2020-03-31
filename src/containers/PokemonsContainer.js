import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Pokemon from '../components/Pokemon';
import { GET_POKEMONS } from '../graphql/get-pokemons';

export default () => {
  const { loading, data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 10 },
  });

  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        pokemons.map(pokemon => <Pokemon key={pokemon.key} pokemon={pokemon} />)
      )}
    </div>
  );
};
