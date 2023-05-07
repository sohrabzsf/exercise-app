import { Link } from "react-router-dom";
import exerciserOne from "../assets/one.jpg";
import exerciserTwo from "../assets/two.jpg";

function Home() {
  return (
    <>
      <section className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10 mb-16">
        <img
          src={exerciserOne}
          alt="A woman that is exercising."
          className="w-full max-w-lg rounded-lg shadow-md shadow-primary"
        />
        <div className="fade-in-right max-w-lg">
          <h1 className="font-bold text-3xl text-primary mb-5">
            Your Personal Trainer, Anytime, Anywhere
          </h1>
          <p className="text-xl">
            With us, you don't need to worry about finding a personal trainer or
            fitting a gym visit into your busy schedule. Our comprehensive
            exercise tutorials, complete with video demonstrations and detailed
            explanations, provide you with all the guidance you need to achieve
            your fitness goals. Our user-friendly interface and interactive
            features make it easy to customize your workout routine and track
            your progress from anywhere.
          </p>
          <Link
            to="/explore"
            className="inline-block rounded p-3 pb-4 mt-6 text-xl text-white bg-primary hover:bg-secondary transition-colors duration-300"
          >
            Explore Exercises
          </Link>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row-reverse justify-center items-center gap-5 lg:gap-10 mb-10">
        <img
          src={exerciserTwo}
          alt="A man that is exercising"
          className="w-full max-w-lg rounded-lg shadow-md shadow-primary"
        />
        <div className="fade-in-left max-w-lg">
          <h1 className="font-bold text-3xl text-primary mb-5">
            Elevate Your Workout with Our Expert-Approved Exercises
          </h1>
          <p className="text-xl">
            Looking to take your workout routine to the next level? We offer a
            wide selection of exercises that have been curated and approved by
            our team of fitness experts. From strength training to cardio, our
            tutorials come complete with step-by-step video demonstrations and
            detailed explanations, so you can be sure you're performing each
            exercise safely and effectively. Start your journey towards a
            fitter, healthier you today.
          </p>
          <Link
            to="/explore"
            className="inline-block rounded p-3 pb-4 mt-6 text-xl text-white bg-primary hover:bg-secondary transition-colors duration-300"
          >
            Start Now
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
