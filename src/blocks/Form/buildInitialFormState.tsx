import type { FormFieldBlock } from "@payloadcms/plugin-form-builder/types";

type ExtendedFormFieldBlock =
  | FormFieldBlock
  | { blockType: "number"; name: string };

function isNumberField(
  field: ExtendedFormFieldBlock,
): field is { blockType: "number"; name: string } {
  return field.blockType === "number";
}

export const buildInitialFormState = (
  fields: ExtendedFormFieldBlock[],
): Record<string, any> => {
  return fields?.reduce(
    (initialSchema, field) => {
      if (isNumberField(field)) {
        return {
          ...initialSchema,
          [field.name]: 0,
        };
      }

      switch (field.blockType) {
        case "checkbox":
          return {
            ...initialSchema,
            [field.name]: field.defaultValue || false,
          };
        case "email":
        case "text":
        case "select":
        case "state":
        case "textarea":
          return {
            ...initialSchema,
            [field.name]: "",
          };
        default:
          return initialSchema;
      }
    },
    {} as Record<string, any>,
  );
};
