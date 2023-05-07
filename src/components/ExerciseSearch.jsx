import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";

function ExerciseSearch() {
  const [text, setText] = useState("");
  const { searchExercises } = useContext(AppContext);

  function handleSearch(e) {
    e.preventDefault();
    if (text === "") {
    } else {
      searchExercises(text);
      setText("");
    }
  }

  return (
    <form onSubmit={handleSearch} className="flex justify-center">
      <input
        value={text}
        onChange={(e) => setText(e.target.value.toLowerCase())}
        type="text"
        className="w-full max-w-lg rounded-s p-3 pb-4 text-xl bg-tertiary outline-primary"
      />
      <button
        type="submit"
        className=" rounded-e p-3 pb-4 text-xl text-white bg-primary hover:bg-secondary transition-colors duration-300"
      >
        Search
      </button>
    </form>
  );
}

export default ExerciseSearch;
