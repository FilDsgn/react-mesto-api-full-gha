import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card(card) {
  const user = useContext(CurrentUserContext);

  const isOwn = card.owner._id === user._id;
  const isLiked = card.likes.some((like) => like._id === user._id);

  const cardLikeButtonClassName = `element__like ${
    isLiked && "element__like_active"
  }`;

  function handleCardClick() {
    card.onCardClick(card);
  }

  function handleLikeClick() {
    card.onCardLike(card);
  }

  function handleCardDeleteClick() {
    card.onCardDelete(card);
  }

  return (
    <article className="element">
      {isOwn && (
        <button
          type="button"
          aria-label="Удалить"
          className="element__delete"
          onClick={handleCardDeleteClick}
        ></button>
      )}
      <img
        src={card.link}
        alt={card.name}
        className="element__image"
        onClick={handleCardClick}
      />
      <div className="element__wrapper">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-container">
          <button
            type="button"
            aria-label="Поставить лайк"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <p
            className={`element__like-counter ${
              card.likes.length > 0 && "element__like-counter_active"
            }`}
          >
            {card.likes.length}
          </p>
        </div>
      </div>
    </article>
  );
}

export default Card;
