import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [exercises, setExercises] = useState(
    JSON.parse(localStorage.getItem("exercises"))
  );
  const [results, setResults] = useState([]);

  // gets the exercises from the api and adds them to local storage if it's not already there
  async function getExercises() {
    if (!exercises) {
      const url = `https://${
        import.meta.env.VITE_EXERCISEDB_API_HOST
      }/exercises`;
      const options = {
        method: "GET",
        headers: {
          "content-type": "application/octet-stream",
          "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
          "X-RapidAPI-Host": import.meta.env.VITE_EXERCISEDB_API_HOST,
        },
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setExercises(data);
        localStorage.setItem("exercises", JSON.stringify(data));
      } catch (error) {
        console.error(error);
      }
    }
  }

  function searchExercises(text) {
    const searchedExercises = exercises.filter((exercise) => {
      return (
        exercise.name.toLowerCase().includes(text) ||
        exercise.bodyPart.toLowerCase().includes(text) ||
        exercise.target.toLowerCase().includes(text) ||
        exercise.equipment.toLowerCase().includes(text)
      );
    });

    setResults(searchedExercises);
  }

  return (
    <AppContext.Provider
      value={{ exercises, results, getExercises, searchExercises }}
    >
      {children}
    </AppContext.Provider>
  );
}
