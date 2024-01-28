import React, { useEffect, useState } from 'react';

const JobApplicationCount = ({ jobId }) => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/JobApplications/${jobId}`)
      .then((response) => response.json())
      .then((data) => {
        setCount(data.count);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [jobId]);

  return (
    <div>
      {count === null ? (
        <p>Loading...</p>
      ) : (
        <p>{count}</p>
      )}
    </div>
  );
};

export default JobApplicationCount;
