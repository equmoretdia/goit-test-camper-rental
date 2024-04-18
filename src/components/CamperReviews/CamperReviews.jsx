import React from 'react';

export const CamperReviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review, index) => (
        <li key={index}>
          <p>{review.reviewer_name}</p>
          <p>{review.reviewer_rating}</p>
          <p>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};
