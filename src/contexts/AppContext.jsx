import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [exercises, setExercises] = useState(
    JSON.parse(localStorage.getItem("exercises"))
  );
  const [results, setResults] = useState([]);
  const [videos, setVidoes] = useState([]);

  // gets the exercises from the api and adds them to local storage if it's not already there
  async function getExercises() {
    if (!exercises) {
      const url = "https://exercisedb.p.rapidapi.com/exercises";
      const options = {
        method: "GET",
        headers: {
          "content-type": "application/octet-stream",
          "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
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

  // finds the matching exercises with the user input in search bar and puts them in results
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

  // finds a specific exercise and returns it
  function findExercise(id) {
    return results.find((result) => result.id === id);
  }

  // gets the videos related to the name from the api and puts them in the videos state
  async function getVideos(name) {
    const queryParam = name.replace(/ /g, "%20");
    const url = `https://youtube-search-and-download.p.rapidapi.com/search?query=${queryParam}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setVidoes(data.contents);
    } catch (error) {
      console.error(error);
    }
  }

  // sets videos to initial value
  function clearVideos() {
    setVidoes([]);
  }

  return (
    <AppContext.Provider
      value={{
        exercises,
        results,
        videos,
        getExercises,
        searchExercises,
        findExercise,
        getVideos,
        clearVideos,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
