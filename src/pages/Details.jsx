import { useState, useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";
import { useParams } from "react-router-dom";
import ExerciseDetails from "../components/ExerciseDetails";
import VideoResults from "../components/VideoResults";

function Details() {
  const [exercise, setExercise] = useState({});
  const { findExercise, getVideos, clearVideos } = useContext(AppContext);
  const { id } = useParams();

  useEffect(() => {
    setExercise(findExercise(id));
  }, [id]);

  useEffect(() => {
    if (exercise.name !== undefined) {
      getVideos(exercise.name);
    }

    return () => {
      clearVideos();
    };
  }, [exercise.name]);

  return (
    <>
      <ExerciseDetails exercise={exercise} />
      <VideoResults exercise={exercise} />
    </>
  );
}

export default Details;
