import '../../styles/styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from '@components/Hello';

/**
 * Start sample application. This is only a sample to demonstrate an api call
 * Feel free to remove this and implement however you wish. Include an npm packages you see fit.
 * @returns {Promise<void>}
 */
const start = async (message = 'Adthena') => {
  ReactDOM.render(
    <Hello message={message} />,
    document.getElementById('app'),
  );
};

export {
  start,
};
