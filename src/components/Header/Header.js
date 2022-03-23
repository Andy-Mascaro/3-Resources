import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Header() {
  return (
    <div className='header'>
      <ul>
        <NavLink exact to={'/main'}>
          <p>Home</p>
        </NavLink>
        <NavLink exact to={'/directors'}>
          <p>Directors</p>
        </NavLink>
        <NavLink exact to={'/movies'}>
          <p>Star Wars Movies</p>
        </NavLink>
        <NavLink exact to={'/viewers'}>
          <p>Movie Reviewers</p>
        </NavLink>
      </ul>
    </div>
  );
}
