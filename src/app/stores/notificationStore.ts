import { observable, action, makeObservable } from "mobx";

export class NotificationStore {
  @observable showModal: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  showNotificationModal = (showModal: boolean) => {
    this.showModal = showModal;
  };
}

export const notificationStore = new NotificationStore();
