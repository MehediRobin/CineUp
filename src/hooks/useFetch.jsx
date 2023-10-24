import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.themoviedb.org/3/${apiPath}?api_key=c35ad119967ac4612b3dffe8d6e611a9&query&query=${queryTerm}`
      );
      const info = await response.json();
      setData(info.results);
    }
    fetchData();
  }, [apiPath, queryTerm]);
  return { data };
};
