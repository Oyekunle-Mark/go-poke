import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import './App.css';
import PokemonsContainer from './containers/PokemonsContainer';

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh',
  });

  return (
    <ApolloProvider client={client}>
      <div>
        <PokemonsContainer />
      </div>
    </ApolloProvider>
  );
}

export default App;
