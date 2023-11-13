import React from 'react';

const NotFound = () => {
  return (
    <div className="not-found">
      Sorry, this page does not exist. Please follow this link to the
      <Link to="/">
        <span className="text-home"> home page</span>
      </Link>
    </div>
  );
};

export default NotFound;
