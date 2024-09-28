import React from "react";

export const YouTubePlayer: React.FC<{
  videoID?: string;
}> = ({ videoID }) => {
  return (
    <div className="bg-theme-elevation-0 relative mb-4 h-0 w-full overflow-hidden">
      <iframe
        title="YouTube player"
        className="absolute -left-0.5 -top-0.5 h-[calc(100%+4px)] w-[calc(100%+4px)]"
        src={`https://www.youtube-nocookie.com/embed/${videoID}`}
        frameBorder="0"
        allow="autoplay; fullscreen; accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};
