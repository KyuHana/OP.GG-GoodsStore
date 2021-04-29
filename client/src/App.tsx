import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import CreateUser from './Components/CreateUser';
import ListOfUsers from './Components/ListOfUsers';
import UpdatePassword from './Components/UpdatePassword';
import './App.css';

function App() {

  const client = new ApolloClient({ //connect to end point
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache()
  })
  return (
    <>
    <ApolloProvider client={client}> 
      <CreateUser />
      <ListOfUsers />
      <UpdatePassword />
    </ApolloProvider>
    </>
  );
}

export default App;