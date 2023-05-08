import { GiBiceps, GiGymBag } from "react-icons/gi";

function ExerciseDetails({ exercise }) {
  return (
    <section className="flex flex-col lg:flex-row justify-evenly items-center gap-10">
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        className="w-full max-w-xl rounded-lg shadow-md shadow-secondary"
      />
      <div className="w-full max-w-xl">
        <h1 className="font-bold capitalize text-4xl text-primary mb-10">
          {exercise.name}
        </h1>
        <p className="text-xl mb-10">
          Exercises keep you strong.{" "}
          <span className="capitalize">{exercise.name}</span> is one of the best
          exercises to target your {exercise.target}. It will help you improve
          your mood and gain energy.
        </p>
        <div>
          <p className="capitalize text-2xl text-secondary mb-5">
            <GiBiceps className="inline-block rounded-lg text-6xl bg-white p-2 mr-4" />
            {exercise.bodyPart}
          </p>
          <p className="capitalize text-2xl text-secondary mb-5">
            <GiBiceps className="inline-block rounded-lg text-6xl bg-white p-2 mr-4" />
            {exercise.target}
          </p>
          <p className="capitalize text-2xl text-secondary mb-5">
            <GiGymBag className="inline-block rounded-lg text-6xl bg-white p-2 mr-4" />
            {exercise.equipment}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ExerciseDetails;
