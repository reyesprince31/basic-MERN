import { useState, useEffect } from "react";
import fetchData, { fetchGreeting } from "../utils/fetchData";

export default function useDataFetching() {
  const [data, setData] = useState([]);
  const [goodDay, setGoodDay] = useState({});

  useEffect(() => {
    (async () => {
      const greetingData = await fetchGreeting();
      setGoodDay(greetingData);

      const userData = await fetchData();
      setData(userData);
    })();
  }, [data]);

  return {
    data,
    goodDay,
    setData,
  };
}
