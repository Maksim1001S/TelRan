import { useEffect, useState } from "react";
import axios from "../axios";

const useFetch = (url, defaultValue) => {
  const [data, setData] = useState(defaultValue);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ hasError: false, message: "" });

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(() => {
        return {
          hasError: true,
          message: err.message,
        };
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
