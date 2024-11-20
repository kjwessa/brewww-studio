"use client";
import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useField } from 'payload/dist/admin/components/forms'
import {
  Button,
  TextInput,
  FieldLabel,
} from '@payloadcms/ui'
import { slugify } from './slugify'
import { formatSlug } from "./formatSlug";
import "./index.scss";
import { TextFieldClientProps } from "payload";

type SlugComponentProps = {
  fieldToUse: string;
  checkboxFieldPath: string;
} & TextFieldClientProps;

export const SlugComponent: React.FC<SlugComponentProps> = ({
  field,
  fieldToUse,
  checkboxFieldPath: checkboxFieldPathFromProps,
}) => {
  const { label } = field;
  const { path, readOnly: readOnlyFromProps } = field;

  const checkboxFieldPath = path.includes(".")
    ? `${path}.${checkboxFieldPathFromProps}`
    : checkboxFieldPathFromProps;

  const { value, setValue } = useField<string>({ path });

  const { value: checkboxValue, setValue: setCheckboxValue } =
    useField<boolean>({
      path: checkboxFieldPath,
    });

  const fieldToUseValue = useFormFields(([fields, dispatch]) => {
    return fields[fieldToUse].value as string;
  });

  useEffect(() => {
    if (checkboxValue) {
      if (fieldToUseValue) {
        const formattedSlug = formatSlug(fieldToUseValue);

        if (value !== formattedSlug) setValue(formattedSlug);
      } else {
        if (value !== "") setValue("");
      }
    }
  }, [fieldToUseValue, checkboxValue, setValue, value]);

  const handleLock = useCallback(
    (e: MouseEvent<Element>) => {
      e.preventDefault();
      setCheckboxValue(!checkboxValue);
    },
    [checkboxValue, setCheckboxValue],
  );

  const readOnly = readOnlyFromProps || checkboxValue;

  const inputProps = {
    id: `field-${path}`,
    name: path,
    readOnly,
  }

  return (
    <div className="field-type slug-field-component">
      <div className="label-wrapper">
        <FieldLabel
          htmlFor={inputProps.id}
          label={label}
        />

        <Button className="lock-button" buttonStyle="none" onClick={handleLock}>
          {checkboxValue ? "Unlock" : "Lock"}
        </Button>
      </div>

      <TextInput
        {...inputProps}
        value={value || ''}
        onChange={setValue}
      />
    </div>
  );
};
