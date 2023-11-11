import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="head-cont">
      <header className="main-header">
        <NavLink className="header-link" to="/">
          Home
        </NavLink>
        <NavLink className="header-link" to="/movies">
          Movies
        </NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
