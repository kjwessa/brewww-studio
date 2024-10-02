import React from "react";

export interface MediaTestProps {
  text: string;
}

export const MediaTest: React.FC<MediaTestProps> = ({ text }) => {
  return <div>{text}</div>;
};
