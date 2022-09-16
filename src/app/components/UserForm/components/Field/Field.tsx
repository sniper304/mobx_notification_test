import { ChangeEvent } from "react";

const FIELD_LABELS: { [key: string]: string } = {
  firstName: "First name",
  lastName: "Last name",
};

type FieldProps = {
  name: string;
  value: string;
  error: string;
  onChange: (name: string, value: string) => void;
};

export const Field = ({ name, value, error, onChange }: FieldProps) => {
  const onFieldChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    onChange(name, value);
  };

  return (
    <div className={`form-field ${error && "is-invalid"}`}>
      <label htmlFor={name}>{FIELD_LABELS[name]}</label>
      <input name={name} value={value} onChange={onFieldChange} />
      <div className={`error ${!error && "d-none"}`}>{error}</div>
    </div>
  );
};
