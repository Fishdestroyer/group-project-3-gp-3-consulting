import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink,  } from "@apollo/client";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home'

const httpLink = createHttpLink({
    uri: 'https://localhost:3001/graphql',
  });
  
  const client = new ApolloClient({
    
    //uri: 'https://localhost:3001/graphql',
    link: httpLink,
    cache: new InMemoryCache(),
  });

  function App() {
    return (
      <ApolloProvider client={client}>
      <div className='flex-column justify-flex-start min-100-vh'>
        <Header />
        <div className='container'>
          <Home />
        </div>
        <Footer />
      </div>
      </ApolloProvider>
    );
  }
  
  export default App;