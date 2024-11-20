import React from "react";

import type { Page } from "@/payload-types";

import { RichText } from "@/components/RichText";
import { CMSLink } from "@/components/Link";

type Props = Extract<Page["layout"], { blockType: "cta" }>;

export const CallToAction: React.FC<Props> = ({ 
  content,
  links 
}) => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto">
        {content && (
          <RichText 
            content={content} 
            enableProse={false}
            customClasses={{
              paragraph: 'text-body-large text-center'
            }}
          />
        )}
        {/* ... rest of the component */}
      </div>
    </section>
  );
};
