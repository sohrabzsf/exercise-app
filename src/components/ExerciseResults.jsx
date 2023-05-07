import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import ExerciseCard from "./ExerciseCard";

function ExerciseResults() {
  const { results } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const resultsToShow = results.slice(startIndex, endIndex);

  const totalPages = Math.ceil(results.length / itemsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className="flex flex-wrap flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10 text-center my-10">
        {resultsToShow.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
      <div className="text-center my-10">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            className={
              pageNumber === currentPage
                ? "bg-primary text-white inline-block font-bold w-10 h-10 rounded-full p-2 m-1"
                : "bg-white text-primary inline-block font-bold w-10 h-10 rounded-full p-2 m-1"
            }
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ExerciseResults;
