import { useState, useCallback, useEffect } from "react";
import axios from "axios";

function useAPI(url, defaultValue = []) {
  const [data, setData] = useState(defaultValue);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
      setError(null);
    } catch (e) {
      setError(e);
      setData(null);
    }
    setLoading(false);
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { 
    data, 
    error, 
    loading 
}; // Return values as an object
}

export default useAPI; // Export the useAPI hook correctly
