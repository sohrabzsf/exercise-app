import { Link } from "react-router-dom";

function ExerciseCard({ exercise }) {
  return (
    <Link
      to={`/exercises/${exercise.id}`}
      className="block w-full max-w-sm rounded-lg shadow-md shadow-secondary gap-5 pb-5"
    >
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        className="w-full rounded-t-lg"
      />
      <h2 className="font-bold text-xl capitalize text-primary m-5">
        {exercise.name}
      </h2>
      <div>
        <span className="inline-block font-bold text-lg capitalize rounded bg-secondary text-white p-2 mr-4">
          {exercise.bodyPart}
        </span>
        <span className="inline-block font-bold text-lg capitalize rounded bg-secondary text-white p-2">
          {exercise.target}
        </span>
      </div>
    </Link>
  );
}

export default ExerciseCard;
