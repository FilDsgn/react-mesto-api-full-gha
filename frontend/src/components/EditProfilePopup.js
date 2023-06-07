import { useContext, useEffect } from "react";

import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import useFormValidation from "../utils/useFormValidation.js";

function EditProfilePopup({
  isOpen,
  onClose,
  onOverlayClick,
  onUpdateUser,
  onLoading,
}) {
  const { values, errors, isValid, handleChange, setValue, reset, formRef } =
    useFormValidation();

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setValue("name", currentUser.name);
    setValue("about", currentUser.about);
  }, [currentUser, isOpen, setValue]);

  function handleSubmit(e) {
    e.preventDefault();

    if (isValid) {
      onUpdateUser({
        name: values["name"],
        about: values["about"],
      });
    }
  }

  const onClosePopup = () => {
    onClose();
    reset({ name: currentUser.name, about: currentUser.about });
  };

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="content_profile"
      isOpen={isOpen}
      onClose={onClosePopup}
      onOverlayClick={onOverlayClick}
      onSubmit={handleSubmit}
      onLoading={onLoading}
      isValid={isValid}
      ref={formRef}
    >
      <input
        name="name"
        value={values["name"] ?? ""}
        onChange={handleChange}
        type="text"
        placeholder="Ваше имя"
        minLength="2"
        maxLength="40"
        required
        id="username"
        className="popup__input popup__input_place_name"
      />
      <span className="popup__input-error">{errors.name}</span>
      <input
        name="about"
        value={values["about"] ?? ""}
        onChange={handleChange}
        type="text"
        placeholder="Дополнительная информация"
        minLength="2"
        maxLength="200"
        required
        id="about"
        className="popup__input popup__input_place_about"
      />
      <span className="popup__input-error">{errors.about}</span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
