import React, { useState } from "react";

const useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, seLoading] = useState(false);

  const request = async (...args) => {
    seLoading(true);
    const response = await apiFunc(...args);
    seLoading(false);

    setError(!response.ok);
    setData(response.data);
    return response;
  };
  return { request, data, error, loading };
};

export default useApi;
