import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { fetchAll } from "../utils/fetchData";
import allIcon from "../assets/icons/body-part.svg";
import bicepIcon from "../assets/icons/biceps.png";
import backIcon from "../assets/icons/back.png";
import cardioIcon from "../assets/icons/dumbell.png";
import shoulderIcon from "../assets/icons/shoulder.png";
import waistIcon from "../assets/icons/slim-body.png";
import chestIcon from "../assets/icons/body.png";
import upperlegIcon from "../assets/icons/quadricep.png";
import lowerlegIcon from "../assets/icons/leg.png";
import neckIcon from "../assets/icons/neck.png";
import lowerarmIcon from "../assets/icons/forearm.png";

import HorizontalScrollbar from "./HorizontalScrollbar";
const SearchExercises = ({
  exercises,
  setExercises,
  bodyPart,
  setBodyPart,
}) => {
  const SearchElement = useRef();

  const bodyParts = [
    {
      type: "all",
      Icon: allIcon,
    },
    {
      type: "back",
      Icon: backIcon,
    },
    {
      type: "cardio",
      Icon: cardioIcon,
    },
    {
      type: "chest",
      Icon: chestIcon,
    },
    {
      type: "lower arms",
      Icon: lowerarmIcon,
    },
    {
      type: "lower legs",
      Icon: lowerlegIcon,
    },
    {
      type: "neck",
      Icon: neckIcon,
    },
    {
      type: "shoulders",
      Icon: shoulderIcon,
    },
    {
      type: "upper arms",
      Icon: bicepIcon,
    },
    {
      type: "upper legs",
      Icon: upperlegIcon,
    },
    {
      type: "waist",
      Icon: waistIcon,
    },
  ];
  const handleSubmit = async (event) => {
    event.preventDefault();
    const search = SearchElement.current.value.toLowerCase();
    if (search) {
      const exerciseData = await fetchAll();
      const searchedExercise = exerciseData.filter(
        (exercise) =>
          exercise.name.includes(search) ||
          exercise.target.includes(search) ||
          exercise.bodyPart.includes(search) ||
          exercise.equipment.includes(search)
      );

      SearchElement.current.value = "";
      setExercises(searchedExercise);
      window.scrollTo({ top: 1600, left: 100, behavior: "smooth" });
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lf: "44px", sx: "30px" } }}
        mb="50px"
        textAlign="center"
        fontFamily="Advent Pro"
      >
        Awesome Exercise <br />
        you should know
      </Typography>

      <Box position="relative" mb="72px">
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{
              input: {
                fontWeight: "700",
                border: "none",
              },
              border: "none",
              width: { lg: "700px", xs: "350px" },
              backgroundColor: "#fff",
            }}
            height="76px"
            inputRef={SearchElement}
            type="text"
            placeholder="Search Exercises"
          />
          <Button
            type="submit"
            className="search-btn"
            sx={{
              bgcolor: "#ff2625",
              color: "#fff",
              textTransform: "none",
              marginLeft: "10px",
              width: { lg: "40px", xs: "20px" },
              fontSize: { lg: "20px", xs: "14px" },
              height: "56px",
              position: "absolute",
              borderRadius: "50%",
            }}
          >
            <SearchIcon />
          </Button>
        </form>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
