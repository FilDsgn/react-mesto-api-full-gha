function ImagePopup({
  card,
  isOpen,
  onClose,
  onOverlayClick,
  onTransitionEnd,
}) {
  return (
    <div
      className={`popup popup_content_image ${isOpen && "popup_opened"}`}
      onClick={onOverlayClick}
      onTransitionEnd={onTransitionEnd}
    >
      <div className="popup__image-container">
        <figure className="popup__figure">
          <img src={card.link} alt={card.name} className="popup__image" />
          <figcaption className="popup__caption">{card.name}</figcaption>
        </figure>
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
