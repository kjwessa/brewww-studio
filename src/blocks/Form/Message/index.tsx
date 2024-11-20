import { RichText } from "@/components/RichText";
import React from "react";

import { Width } from "../Width";

type Props = {
  message: any;
  type: "error" | "success" | "warning";
};

export const Message: React.FC<Props> = ({ message, type }) => {
  const messageClassNames = {
    error: "bg-red-100 text-red-900",
    success: "bg-green-100 text-green-900",
    warning: "bg-yellow-100 text-yellow-900",
  };

  return (
    <Width>
      <div className={messageClassNames[type]}>
        <RichText 
          content={message} 
          enableProse={false}
          customClasses={{
            paragraph: 'text-body-medium'
          }}
        />
      </div>
    </Width>
  );
};
