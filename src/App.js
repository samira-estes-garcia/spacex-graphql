import React from 'react'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/client'
import { LaunchesContainer } from './containers/LaunchesContainer';
import './App.css'

function App() {
  const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/'
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <h1 className="heading">SpaceX GraphQL App</h1>
        <LaunchesContainer />
      </main>
    </ApolloProvider>
  );
}

export default App;
