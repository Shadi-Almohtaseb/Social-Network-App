import { useEffect, useState } from "react";

const useFetchData = () => {
  const [news, setNews] = useState([]);
  //https://newsapi.org/v2/everything?q=tesla&from=2022-11-24&sortBy=publishedAt&apiKey=78e2840c30504eb5a4e3230af62e7edd
  useEffect(() => {
    const fetchData = () => {
      fetch(
        `https://newsapi.org/v2/everything?q=tesla&from=2022-12-09&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => {
          res.json().then((data) => {
            setNews(data.articles);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);

  return news;
};
export { useFetchData };
