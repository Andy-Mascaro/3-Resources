import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Header() {
  return (
    <div className='header'>
      <ul>
        <NavLink exact to={'/main'}>
          <li>Home</li>
        </NavLink>
        <NavLink exact to={'/directors'}>
          <li>Directors</li>
        </NavLink>
        {/* <NavLink exact to={'/books'}>
          <li>Books</li>
        </NavLink>
        <NavLink exact to={'/characters'}>
          <li>Characters</li>
        </NavLink> */}
      </ul>
    </div>
  );
}
