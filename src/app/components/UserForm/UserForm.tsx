import { useContext, FormEvent } from "react";
import { useObserver } from "mobx-react";
import { MobXContext } from "../../contexts/MobXContext";
import { Field } from "./components/Field";

const FIRST_NAME = "firstName";
const LAST_NAME = "lastName";

export const UserForm = () => {
  const { userFormStore } = useContext(MobXContext);

  const { submitForm, setFormValue, formErrors, formValues } = useObserver(
    () => ({
      submitForm: userFormStore.submitForm,
      setFormValue: userFormStore.setFormValue,
      formErrors: userFormStore.formErrors,
      formValues: userFormStore.formValues,
    })
  );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmit} className="user-form">
        <Field
          name="firstName"
          value={formValues[FIRST_NAME]}
          error={formErrors[FIRST_NAME]}
          onChange={setFormValue}
        />
        <Field
          name="lastName"
          value={formValues[LAST_NAME]}
          error={formErrors[LAST_NAME]}
          onChange={setFormValue}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
