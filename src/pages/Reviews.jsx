import React from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { moviedId } = useParams();

  return <div>Reviews: {moviedId}</div>;
};

export default Reviews;
