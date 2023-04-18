import React from 'react';
import './style.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>Oops! The page you are looking for does not exist. Please check the URL or go back to the homepage.</p>
      <a href="/">Go back to homepage</a>
    </div>
  );
};

export default NotFoundPage;