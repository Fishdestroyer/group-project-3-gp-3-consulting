import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink,  } from "@apollo/client";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import ReviewsList from './components/ReviewsList';
//import SingleReview from './pages/SingleReview';
import Aboutus from './pages/Aboutus';
import Signup from './pages/Signup';
import Home from './pages/Home'

const httpLink = createHttpLink({
    uri: '/graphql',
  });
  
  const client = new ApolloClient({
    
    //uri: 'https://localhost:3001/graphql',
    link: httpLink,
    cache: new InMemoryCache(),
  });

  function App() {
    return (
      <ApolloProvider client={client}>
        <Router>
      <div className='flex-column justify-flex-start min-100-vh'>
        <Header />
        <div className='container'>
        <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/aboutus" component={Aboutus} />
           <Route exact path="/customerreviews" component={ReviewsList}>
             </Route>
        </div>
        <Footer />
      </div>
      </Router>
      </ApolloProvider>
    );
  }
  
  export default App;