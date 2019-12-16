import React from 'react';
import PropTypes from 'prop-types';

const Hello = ({ message }) => {
  const title = `Hello ${message}!`;
  return (
    <>
      <h1>{title}</h1>
      <div>
        This message was generated using data from the status endpoint.
      </div>
    </>
  );
};

Hello.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Hello;
