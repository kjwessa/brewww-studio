import React from "react";

export const VimeoPlayer: React.FC<{
  videoID?: string;
}> = ({ videoID }) => {
  return (
    <div className="bg-theme-elevation-0 relative mb-4 h-0 w-full overflow-hidden">
      <iframe
        title="Vimeo player"
        className="absolute -left-0.5 -top-0.5 h-[calc(100%+4px)] w-[calc(100%+4px)]"
        src={`https://player.vimeo.com/video/${videoID}}`}
        frameBorder="0"
        allowFullScreen
        allow="autoplay; fullscreen; picture-in-picture"
      />
    </div>
  );
};
