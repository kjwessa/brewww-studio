import React from "react";
import { Media as MediaType } from "@/payload-types";
import { CMSLink, CMSLinkType } from "@/components/CMSLink/index";
import { Media } from "@/components/Media/index";
import { SerializedUploadNode } from "@payloadcms/richtext-lexical";

export type RichTextUploadNodeType = {
  fields: {
    link?: CMSLinkType;
    enableLink?: boolean;
  };
  value?: MediaType;
  relationTo: string;
};

export type Props = {
  node: SerializedUploadNode;
  className?: string;
};

export const RichTextUpload: React.FC<Props> = (props) => {
  const {
    node: { fields, value },
    className,
  } = props;

  let Wrap: React.ComponentType<CMSLinkType> | string = "div";

  const styles: React.CSSProperties = {};

  let wrapProps: CMSLinkType = {};

  if (fields?.enableLink) {
    Wrap = CMSLink;
    wrapProps = {
      ...fields?.link,
    };
  }

  if (!value) {
    console.error("RichTextUpload: No media value provided");
    return null;
  }

  try {
    return (
      <div style={styles} className={className}>
        <Wrap {...wrapProps}>
          <Media resource={value as MediaType} />
        </Wrap>
      </div>
    );
  } catch (error) {
    console.error("Error rendering RichTextUpload:", error);
    return null;
  }
};

export default RichTextUpload;
