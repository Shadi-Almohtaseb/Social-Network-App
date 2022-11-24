import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import NewsItem from "./NewsItem";

const Rightbar = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch(
        `https://newsapi.org/v2/everything?q=apple&from=2022-11-23&to=2022-11-23&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`
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

  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: "none", lg: "block" } }}
      className=" pt-4 w-[25rem] rounded-xl fixed right-2 top-20 bottom-2 lg:flex flex-col hidden overflow-y-scroll overflow-x-hidden"
    >
      <Typography variant="h4" className="text-center mt-5 ">
        Latest News
      </Typography>
      {news.map((newItem, index) => (
        <NewsItem newItem={newItem} key={index} />
      ))}
    </Box>
  );
};

export default Rightbar;
