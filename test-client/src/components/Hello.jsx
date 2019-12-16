import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import dao from '@services/dao';

const Hello = ({ message }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    dao.GET(`/api/status?message=${message}`)
      .then((res) => {
        setData(res.message);
        setHasError(false);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setHasError(true);
      });
  }, []);

  const title = `Hello ${data}!`;
  return (
    <>
      {hasError && (<h3>Server error...</h3>)}
      {isLoading && (<h3>Loading...</h3>)}
      {data && (
        <>
          <h1>{title}</h1>
          <div>
            This message was generated using data from the status endpoint.
          </div>
        </>
      )}
    </>
  );
};

Hello.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Hello;
