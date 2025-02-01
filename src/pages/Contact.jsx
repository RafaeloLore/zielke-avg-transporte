import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import "../styles/Contact.css";

function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const [captchaValue, setCaptchaValue] = useState(null);
  const [message, setMessage] = useState("");

  // 🔹 Обработчик reCAPTCHA
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  // 🔹 Функция проверки email через Abstract API
  const verifyEmail = async (email) => {
    try {
      const response = await axios.get(
        `https://emailvalidation.abstractapi.com/v1/`,
        {
          params: {
            api_key: "9de54409d89248c285544da3177c9260", // 🔹 Вставь API ключ
            email: email,
          },
        }
      );

      console.log("📩 Результат проверки email:", response.data);

      return (
        response.data.is_valid_format.value &&
        response.data.deliverability === "DELIVERABLE"
      );
    } catch (error) {
      console.error("❌ Ошибка проверки email:", error);
      return false;
    }
  };

  // 🔹 Отправка формы
  const onSubmit = async (data) => {
    console.log("📨 Данные формы перед отправкой:", data);

    if (!captchaValue) {
      setMessage("❌ Пожалуйста, подтвердите, что вы не робот.");
      return;
    }

    // 🔍 Проверяем email перед отправкой
    const isEmailValid = await verifyEmail(data.email);
    if (!isEmailValid) {
      setMessage("❌ Указанный email недействителен или не существует.");
      return;
    }

    // 🔹 Данные для отправки через EmailJS
    const emailData = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      reply_to: data.email,
    };

    // 🔹 Отправляем email через EmailJS
    emailjs
      .send(
        "service_0e1omid", // Service ID
        "template_slv3dxb", // Template ID
        emailData,
        "IDxfo24Ry1NIB7uLa" // Public Key
      )
      .then(
        () => {
          setMessage("✅ Ваше сообщение успешно отправлено!");
          reset();
          setCaptchaValue(null);
        },
        (error) => {
          setMessage("❌ Ошибка при отправке. Попробуйте снова.");
          console.error("Ошибка EmailJS:", error);
        }
      );
  };

  return (
    <div className="contact-container">
      <h1>Свяжитесь с нами</h1>
      <p>Заполните форму, и мы свяжемся с вами как можно скорее.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <label>Ваше имя:</label>
        <input type="text" {...register("name", { required: true })} required />

        <label>Email:</label>
        <input type="email" {...register("email", { required: true })} required />

        <label>Сообщение:</label>
        <textarea {...register("message", { required: true })} required></textarea>

        {/* reCAPTCHA */}
        <ReCAPTCHA
          sitekey="6LdgHscqAAAAAKZNCIINSjBt_7_viG7qN1LSyySA" // Вставьте ваш Site Key
          onChange={handleCaptchaChange}
        />

        <button type="submit">Отправить</button>
        {message && <p className="form-message">{message}</p>}
      </form>
    </div>
  );
}

export default Contact;
