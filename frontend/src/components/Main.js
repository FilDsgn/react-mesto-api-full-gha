import { useContext } from "react";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main({
  cards,
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardLike,
  onCardDelete,
}) {
  const user = useContext(CurrentUserContext);

  return (
    <main className="content">
      {/* Profile */}
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <img
            src={user.avatar}
            alt="Аватар профиля"
            className="profile__avatar"
            onClick={() => {
              onEditAvatar(true);
            }}
          />
        </div>

        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__name">{user.name}</h1>
            <button
              type="button"
              aria-label="Редактировать профиль"
              className="profile__edit-button"
              onClick={() => {
                onEditProfile(true);
              }}
            ></button>
          </div>
          <p className="profile__work">{user.about}</p>
        </div>
        <button
          type="button"
          aria-label="Добавть карточку"
          className="profile__add-button"
          onClick={() => {
            onAddPlace(true);
          }}
        ></button>
      </section>

      {/* Elements */}
      <section
        aria-label="Карточки с фотографиями и названиями мест"
        className="elements"
      >
        <div className="elements__container">
          {cards.map((card) => (
            <Card
              name={card.name}
              link={card.link}
              likes={card.likes}
              key={card._id}
              id={card._id}
              owner={card.owner}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
