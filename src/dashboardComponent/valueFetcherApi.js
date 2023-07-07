import React, { useState } from 'react';
import axios from 'axios';

function ValueFetcher() {
  const [value, setValue] = useState(null);

  const fetchValue = () => {
    const min = 200;
    const max = 800;
    const url = `https://api.example.com/values?min=${min}&max=${max}`;

    axios
      .get(url)
      .then(response => {
        setValue(response.data.value);
      })
      .catch(error => {
        console.error('Error fetching value:', error);
      });
  };

  return (
    <div>
      <button onClick={fetchValue}>Fetch Value</button>
      {value && <p>Value: {value}</p>}
    </div>
  );
}

export default ValueFetcher;
