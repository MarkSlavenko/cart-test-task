import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.scss';

function NotFound() {
  return (
    <div className="not-found-page container text-center">
      <h1>404 - Page not found</h1>
      <div className="buttons">
        <Link to="/cart">Cart</Link>
        <Link to="/shipping">Shipping</Link>
      </div>
    </div>
  );
}

export default NotFound;
