import '../../styles/styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from '@components/Hello';
import dao from '@services/dao';

/**
 * Start sample application. This is only a sample to demonstrate an api call
 * Feel free to remove this and implement however you wish. Include an npm packages you see fit.
 * @param message
 * @returns {Promise<void>}
 */
const start = async (message = 'Adthena') => {
  const json = await dao.GET(`/api/status?message=${message}`);
  ReactDOM.render(
    <Hello message={json.message} />,
    document.getElementById('app'),
  );
};

export {
  start,
};
