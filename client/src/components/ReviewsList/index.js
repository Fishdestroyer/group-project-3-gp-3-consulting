import React from 'react';

const ReviewsList = ({ reviews, title }) => {
  if (!reviews.length) {
    return <h3>Waiting on a review, please check back later</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {reviews &&
        reviews.map(reviews => (
          <div key={reviews._id} className="card mb-3">
            <p className="card-header">
              {reviews.username}
              reviews on {reviews.createdAt}
            </p>
            <div className="card-body">
              <p>{reviews.reviewsText}</p>
              <p className="mb-0">
                Reactions: {reviews.reactionCount} || Click to{' '}
                {reviews.reactionCount ? 'see' : 'start'} the discussion!
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ReviewsList;