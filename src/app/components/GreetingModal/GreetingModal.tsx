import { useContext } from "react";
import { useObserver } from "mobx-react";
import { MobXContext } from "../../contexts/MobXContext";

export const GreetingModal = () => {
  const { notificationStore, userFormStore } = useContext(MobXContext);

  const { showModal, showNotificationModal, formValues } = useObserver(() => ({
    showModal: notificationStore.showModal,
    showNotificationModal: notificationStore.showNotificationModal,
    formValues: userFormStore.formValues,
  }));

  const closeModal = () => {
    showNotificationModal(false);
  };

  return (
    <>
      <div className={`modal ${showModal && "show"}`}>
        <div className="modal-controls" onClick={closeModal}>
          <span className="modal-close">×</span>
        </div>
        <div className="modal-content">
          <h3>
            Hello {formValues.firstName} {formValues.lastName}!
          </h3>
        </div>
      </div>
      <div className={`modal-overlay ${showModal && "show"}`} />
    </>
  );
};
