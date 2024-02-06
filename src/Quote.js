import React from 'react';

const Quote = ({ quote, author }) => {
  return (
    <div>
      <blockquote>
        <p>{quote}</p>
        <footer>{author}</footer>
      </blockquote>
    </div>
  );
};

export default Quote;
