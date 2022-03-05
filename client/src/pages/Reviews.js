import React from 'react';
import { Link }from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_REVIEWS } from './utils/queries';
//import ReviewsList from '../components/ReviewsList'
const Reviews = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_REVIEWS);
  const reviews = data?.reviews || [];
console.log(reviews);

  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>{/* PRINT THOUGHT LIST */}</div>
      </div>
    </main>
  );
};

export default Reviews;