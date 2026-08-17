import React, { useState } from "react";

const useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, seLoading] = useState(false);

  const request = async () => {
    seLoading(true);
    const response = await apiFunc();
    seLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setData(response.data);
  };
  return { request, data, error, loading };
};

export default useApi;
