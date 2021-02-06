import React from 'react'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/client'
import { LaunchesContainer } from './containers/LaunchesContainer';

function App() {
  const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/'
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <LaunchesContainer />
      </main>
    </ApolloProvider>
  );
}

export default App;
