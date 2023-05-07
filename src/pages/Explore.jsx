import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";
import ExerciseSearch from "../components/ExerciseSearch";
import ExerciseResults from "../components/ExerciseResults";

function Explore() {
  const { getExercises } = useContext(AppContext);
  useEffect(() => {
    getExercises();
  }, []);

  return (
    <>
      <ExerciseSearch />
      <ExerciseResults />
    </>
  );
}

export default Explore;
