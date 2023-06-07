import { useEffect } from "react";
import useFormValidation from "../utils/useFormValidation";

import AuthForm from "./AuthForm";

function Register({ onSubmit, onTokenCheck, onLoading }) {
  const { values, errors, isValid, handleChange, setValue, formRef } =
    useFormValidation();

  useEffect(() => {
    setValue("email", "");
    setValue("password", "");
  }, [setValue]);

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      const { password, email } = values;
      onSubmit(password, email);
    }
  }

  useEffect(() => {
    onTokenCheck();
  }, []);

  return (
    <AuthForm
      title="Регистрация"
      name="register"
      buttonText="Зарегистрироваться"
      buttonTextOnLoading="Реристрируюсь"
      linkText="Уже зарегистрированы? Войти"
      handleSubmit={handleSubmit}
      onLoading={onLoading}
      isValid={isValid}
      ref={formRef}
    >
      <input
        type="email"
        minLength="2"
        maxLength="30"
        required
        placeholder="Email"
        className="auth-form__input"
        onChange={handleChange}
        name="email"
        value={values["email"] ?? ""}
      />
      <span className="auth-form__input-error">{errors.email}</span>
      <input
        type="password"
        minLength="5"
        maxLength="30"
        required
        placeholder="Пароль"
        className="auth-form__input"
        onChange={handleChange}
        name="password"
        value={values["password"] ?? ""}
      />
      <span className="auth-form__input-error">{errors.password}</span>
    </AuthForm>
  );
}

export default Register;
