export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_SOME_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_SOME_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchAll = async () => {
  const check = localStorage.getItem("allExercise");
  let prevTime = localStorage.getItem("setTime");
  let timeNow = new Date().getTime();
  if (check && timeNow - prevTime < 1000 * 60 * 60 * 12) {
    return JSON.parse(check);
  }
  const url = "https://exercisedb.p.rapidapi.com/exercises?limit=1300";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_SOME_KEY,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  localStorage.setItem("allExercise", JSON.stringify(data));
  localStorage.setItem("setTime", timeNow);
  return data;
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
export const fetchSimilarTarget = async (target) => {
  const allExercise = await fetchAll();
  const similarExercises = allExercise.filter((e) => e.target === target);
  return similarExercises;
};

export const fetchSimilarEquipment = async (equipment) => {
  const allExercise = await fetchAll();
  const similarExercises = allExercise.filter((e) => e.equipment === equipment);
  return similarExercises;
};

export const fetchBodyPart = async (bodyPart) => {
  const allExercise = await fetchAll();
  const similarExercises = allExercise.filter((e) => e.bodyPart === bodyPart);
  return similarExercises;
};
