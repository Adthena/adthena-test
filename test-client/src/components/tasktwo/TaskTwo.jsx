import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import dao from '@services/dao';

const TaskTwo = ({ message }) => {
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
  }, [message]);

  const title = `Hello ${data}!`;
  return (
    <div className="task">
      {hasError && (<h3>Server error...</h3>)}
      {isLoading && (<h3>Loading...</h3>)}
      {data && (
        <>
          <h1>{title}</h1>
          <div>
            {
              `As an example of how to make a request to the API, this message was generated 
              using data from the status endpoint.`
            }
          </div>
        </>
      )}
    </div>
  );
};

TaskTwo.propTypes = {
  message: PropTypes.string,
};

TaskTwo.defaultProps = {
  message: 'Adthena',
};

export default TaskTwo;
