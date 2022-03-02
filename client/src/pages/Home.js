import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_REVIEWS } from '../utils/queries';
import ReviewsList from '../components/ReviewsList';

const Home = () => {
  const { loading, data } = useQuery(QUERY_REVIEWS);
  const reviews = data?.reviews || [];
  //console.log(hello);
  
  return (
    <main>
    <div className='flex-row justify-space-between'>
      <div className='col-12 mb-3'>
        {loading ? (
        <div>Loading...</div>
      ) : (
        <ReviewsList reviews={reviews} title="Some Feed for Thought(s)..."/>
      )}
      </div>
    </div>
  </main>
);
};

export default Home;