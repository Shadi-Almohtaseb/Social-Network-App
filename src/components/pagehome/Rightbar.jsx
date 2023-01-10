import { Box, Typography } from "@mui/material";
import React from "react";
import { useFetchData } from "../../hooks/UseFetchData";
import { newDataAPI } from "../../Data";
import NewsItem from "../NewsItem";

const RightBar = () => {
  const fetchedData = useFetchData();

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
      {newDataAPI.map((newItem, index) => (
        <NewsItem newItem={newItem} key={index} />
      ))}
    </Box>
  );
};

export default RightBar;
