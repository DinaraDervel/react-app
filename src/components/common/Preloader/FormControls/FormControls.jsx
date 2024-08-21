import React from "react";
import styles from "./FormControls.module.css";

const FormControl = ({ input, meta, fieldType, ...props }) => {
  const element = React.createElement(fieldType, { ...input, ...props });
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>{element}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = (props) => (
  <FormControl fieldType="textarea" {...props} />
);

export const Input = (props) => <FormControl fieldType="input" {...props} />;
