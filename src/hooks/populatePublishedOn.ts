import type { CollectionBeforeChangeHook } from "payload";

export const populatePublishedOn: CollectionBeforeChangeHook = ({
  data,
  operation,
  req,
}) => {
  if (operation === "create" || operation === "update") {
    if (req.data && !req.data.publishedOn) {
      const now = new Date();
      return {
        ...data,
        publishedOn: now,
      };
    }
  }

  return data;
};
