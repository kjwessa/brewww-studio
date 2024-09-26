import { FC } from "react";
import { Checkbox } from "./Checkbox";
import { Email } from "./Email";
import { Message } from "./Message";
import { Number } from "./Number";
import { Select } from "./Select";
import { State } from "./State";
import { Text } from "./Text";
import { Textarea } from "./Textarea";

type FieldProps = {
  name: string;
  label: string;
  required?: boolean;
  // ... other common props
};

type FieldTypes =
  | "checkbox"
  | "email"
  | "message"
  | "number"
  | "select"
  | "state"
  | "text"
  | "textarea";

export const fields: Record<FieldTypes, FC<FieldProps & any>> = {
  checkbox: Checkbox,
  email: Email,
  message: Message,
  number: Number,
  select: Select,
  state: State,
  text: Text,
  textarea: Textarea,
};
