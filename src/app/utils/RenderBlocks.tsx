import type { Page } from "@/payload-types";
import React, { Fragment } from "react";

const blockComponents = {};

export const RenderBlocks: React.FC<{ blocks: Page["layout"][0][] }> = (
  props,
) => {
  const { blocks } = props;

  const hasBlocks = blocks && Array.isArray(blocks);
};
