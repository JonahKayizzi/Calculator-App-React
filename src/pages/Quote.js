import React from 'react';

const Quote = () => {
  const quoteStyle = {
    fontSize: '2em',
    textAlign: 'center',
    marginTop: '4em',
    width: '60%',
    backgroundColor: '#858694',
    padding: '2em',
    color: '#fff',
    borderRadius: '20%',
    boxShadow: '5px 10px 10px 10px #e0e0e0',
  };
  return (
    <p style={quoteStyle}>
      Mathematics is not about numbers, equations, computations, or algorithms:
      It is about understanding. - William Paul Thurston
    </p>
  );
};

export default Quote;
