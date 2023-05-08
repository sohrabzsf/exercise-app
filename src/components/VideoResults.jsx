import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import VideoCard from "./VideoCard";

function VideoResults({ exercise }) {
  const { videos } = useContext(AppContext);

  return (
    <section className="my-10 lg:mt-20">
      <h1 className="font-bold capitalize text-center text-3xl text-primary mb-10">
        Watch {exercise.name} exercise videos
      </h1>
      <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-10">
        {videos.slice(0, 4).map((item) => (
          <VideoCard key={item.video.videoId} video={item.video} />
        ))}
      </div>
    </section>
  );
}

export default VideoResults;
