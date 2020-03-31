import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Spinner from 'react-spinner-material';

import Pokemon from '../components/Pokemon';
import { GET_POKEMONS } from '../graphql/get-pokemons';

export default () => {
  const { loading, data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 10 },
  });

  return (
    <div className="container">
      {loading ? (
        <div className="spinner">
          <Spinner radius={120} color={'#333'} stroke={2} visible={true} />
        </div>
      ) : (
        pokemons.map(pokemon => <Pokemon key={pokemon.key} pokemon={pokemon} />)
      )}
    </div>
  );
};
