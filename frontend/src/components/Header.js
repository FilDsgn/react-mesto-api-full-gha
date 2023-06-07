import { Link, Routes, Route } from "react-router-dom";

function Header({ userEmail, isLoggedIn, onLogout }) {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__menu">
        {isLoggedIn ? <p className="header__menu-item">{userEmail}</p> : ""}

        <Routes>
          <Route
            path="/"
            element={
              <Link
                to="/sign-in"
                className="header__menu-item"
                onClick={onLogout}
              >
                Выйти
              </Link>
            }
          />
          <Route
            path="/sign-in"
            element={
              <Link to="/sign-up" className="header__menu-item">
                Регистрация
              </Link>
            }
          />
          <Route
            path="/sign-up"
            element={
              <Link to="/sign-in" className="header__menu-item">
                Войти
              </Link>
            }
          />
        </Routes>
      </div>
    </header>
  );
}

export default Header;
