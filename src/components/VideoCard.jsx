function VideoCard({ video }) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.videoId}`}
      target="_blank"
      rel="noreferrer"
      className="block w-full max-w-sm h-96 rounded-lg shadow-md shadow-secondary gap-5"
    >
      <img
        src={video.thumbnails[0].url}
        alt={video.title}
        loading="lazy"
        className="w-full rounded-t-lg"
      />
      <h2 className="font-bold text-xl text-primary m-5">{video.title}</h2>
      <p className="font-bold text-lg text-secondary m-5">
        {video.channelName}
      </p>
    </a>
  );
}

export default VideoCard;
