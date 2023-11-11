import React from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { moviedId } = useParams();
  return <div>Cast {moviedId}</div>;
};

export default Cast;
