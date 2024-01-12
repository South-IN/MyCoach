import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {
  youtubeOptions,
  fetchData,
  fetchSimilarTarget,
  fetchSimilarEquipment,
} from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
const ExerciseDetail = () => {
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const currentExercise = location.state;

  useEffect(() => {
    const fetchExercisesData = async () => {
      const youtubeSearchUrl = `https://youtube-search-and-download.p.rapidapi.com/search?query=${currentExercise.name}`;
      const exerciseVideoData = await fetchData(
        youtubeSearchUrl,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideoData.contents);
      const similarTarget = await fetchSimilarTarget(currentExercise.target);
      setTargetMuscleExercises(similarTarget);
      const similarEquipment = await fetchSimilarEquipment(
        currentExercise.equipment
      );
      setEquipmentExercises(similarEquipment);
    };
    fetchExercisesData();
  }, [id]);
  return (
    <Box>
      <Detail exerciseDetail={currentExercise} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={currentExercise.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
