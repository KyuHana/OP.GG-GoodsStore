import React from 'react';
import ReactDOM from 'react-dom';
//component
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({ //connect to end point
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
  </Router>,
  document.getElementById('root')
);
