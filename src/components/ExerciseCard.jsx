import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
const ExerciseCard = ({ exercise }) => {
  return (
    <Link
      className="exercise-card"
      to={`/exercise/${exercise.id}`}
      state={exercise}
    >
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          variant="contained"
          sx={{
            height: "23px",
            ml: "5px",
            color: "#fff",
            background: "#ef476f",
            fontFamily: "monospace",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          variant="contained"
          sx={{
            height: "23px",
            ml: "5px",
            color: "#fff",
            background: "#06d6a0",
            fontSize: "14px",
            fontFamily: "monospace",
            borderRadius: "20px",
            textTransform: "capitalize",
            textWrap: "nowrap",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        mt="10px"
        color="#000"
        marginTop="11px"
        pb="10px"
        textTransform="capitalize"
        fontFamily="monospace"
        fontSize="15px"
        noWrap={true}
        variant="subtitle"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
