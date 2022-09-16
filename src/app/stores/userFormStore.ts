import { observable, action, toJS, computed, makeObservable } from "mobx";
import { notificationStore } from "./notificationStore";

const REQUIRED_FIELD = "Required field";

type FormValues = { [key: string]: string };

const DEFAULT_VALUES: FormValues = {
  firstName: "",
  lastName: "",
};

export class UserFormStore {
  @observable errors: FormValues = DEFAULT_VALUES;
  @observable values: FormValues = DEFAULT_VALUES;

  constructor() {
    makeObservable(this);
  }

  private checkAndSetErrorBeforeSubmit = () => {
    const values: FormValues = this.formValues;

    Object.keys(values).forEach((key) => {
      this.errors[key] = values[key] ? "" : REQUIRED_FIELD;
    });
  };

  private isErrorsExist = () => {
    const values: FormValues = this.formValues;

    return Boolean(Object.keys(values).find((key) => !values[key]));
  };

  @action
  submitForm = () => {
    this.checkAndSetErrorBeforeSubmit();

    if (this.isErrorsExist()) {
      return;
    }

    notificationStore.showNotificationModal(true);
  };

  @action
  setFormValue = (key: string, value: string) => {
    const values = this.formValues;
    const errors = this.formErrors;

    this.values = { ...values, [key]: value };
    this.errors = { ...errors, [key]: value ? "" : REQUIRED_FIELD };
  };

  @computed get formValues() {
    return toJS(this.values);
  }

  @computed get formErrors() {
    return toJS(this.errors);
  }
}

export const userFormStore = new UserFormStore();
