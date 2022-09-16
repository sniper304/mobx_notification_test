import { NotificationStore } from "../../stores/notificationStore";
import { UserFormStore } from "../../stores/userFormStore";

export type NotificationStoreType = {
  notificationStore: NotificationStore;
};

export type UserFormStoreType = {
  userFormStore: UserFormStore;
};

export type RootStores = NotificationStoreType & UserFormStoreType;
