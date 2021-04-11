import { useState, useEffect } from "react";
import { error_message_api as error_msg } from "../constants/error_messages";

export default function useFetch(url, dataField) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const axios = require("axios");
  useEffect(() => {
    function getAllData() {
      let dataFetched = [];
      return axios(url)
        .then((response) => {
          dataFetched = response.data.results;

          return response.data.count;
        })
        .then((count) => {
          const numberOfPagesLeft = Math.ceil((count - 1) / 10);
          let promises = [];

          for (let i = 2; i <= numberOfPagesLeft; i++) {
            promises.push(axios(`${url}?page=${i}`));
          }
          return Promise.all(promises);
        })
        .then((response) => {
          dataFetched = response.reduce(
            (acc, data) => [...acc, ...data.data.results],
            dataFetched
          );

          setData(dataFetched);
        })
        .catch((err) => setError(`${err} ${error_msg.BASE_ERROR}`));
    }
    getAllData();
  }, []);

  return { data, error };
}
