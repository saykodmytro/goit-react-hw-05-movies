import React from 'react';
import { NavLink } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <header className="main-header">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/movies">
          Movies
        </NavLink>
      </header>
    </div>
  );
};

export default App;
