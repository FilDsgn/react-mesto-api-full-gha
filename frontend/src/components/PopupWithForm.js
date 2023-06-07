import React from "react";

const PopupWithForm = React.forwardRef(
  (
    {
      title,
      name,
      buttonText = "Сохранить",
      buttonTextOnLoading = "Сохранение",
      isOpen,
      onClose,
      onOverlayClick,
      onTransitionEnd,
      onSubmit,
      onLoading,
      isValid,
      children,
    },
    ref
  ) => {
    return (
      <div
        className={`popup popup_${name} ${isOpen && "popup_opened"}`}
        onClick={onOverlayClick}
        onTransitionEnd={onTransitionEnd}
      >
        <div className="popup__container">
          <form
            action="#"
            onSubmit={onSubmit}
            name={name}
            className="popup__form popup__form_card"
            noValidate
            ref={ref}
          >
            <h2 className="popup__title">{title}</h2>
            {children}
            <button
              type="submit"
              aria-label="Сохранить"
              className={`popup__button ${
                !isValid && "popup__button_disabled"
              }`}
            >
              {isValid && onLoading ? buttonTextOnLoading : buttonText}
            </button>
          </form>
          <button
            type="button"
            className="popup__close-button"
            onClick={() => {
              onClose(true);
            }}
          ></button>
        </div>
      </div>
    );
  }
);

export default PopupWithForm;
