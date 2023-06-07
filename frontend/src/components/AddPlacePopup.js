import { useEffect } from "react";
import useFormValidation from "../utils/useFormValidation.js";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup({
  isOpen,
  onClose,
  onOverlayClick,
  onAddPlace,
  onLoading,
}) {
  const { values, errors, isValid, handleChange, setValue, reset, formRef } =
    useFormValidation();

  useEffect(() => {
    setValue("name", "");
    setValue("link", "");
  }, [isOpen, setValue]);

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      onAddPlace({ name: values.name, link: values.link });
    }
  }

  const onClosePopup = () => {
    onClose();
    reset();
  };

  return (
    <PopupWithForm
      title="Новое место"
      name="content_card"
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
        type="text"
        onChange={handleChange}
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
        id="locate-name"
        className="popup__input popup__input_place_locate"
      />
      <span className="popup__input-error">{errors.name}</span>
      <input
        name="link"
        value={values["link"] ?? ""}
        type="url"
        onChange={handleChange}
        placeholder="Ссылка на картинку"
        required
        id="avatar-link"
        className="popup__input popup__input_place_image"
      />
      <span className="popup__input-error">{errors.link}</span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
