import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Navigation = () => {
  const { loggedIn, logout } = useAuth();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {loggedIn && (
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
