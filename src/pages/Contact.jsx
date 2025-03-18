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
      setMessage("❌ Bitte bestätigen Sie, dass Sie kein Roboter sind.");
      return;
    }

    // 🔍 Проверяем email перед отправкой
    const isEmailValid = await verifyEmail(data.email);
    if (!isEmailValid) {
      setMessage("❌ Die angegebene E-Mail ist ungültig oder existiert nicht..");
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
          setMessage("✅ Ihre Nachricht wurde erfolgreich gesendet.!");
          reset();
          setCaptchaValue(null);
        },
        (error) => {
          setMessage("❌ Fehler beim Senden. Versuchen Sie es erneut.");
          console.error("Ошибка EmailJS:", error);
        }
      );
  };

  return (
    <section className="Konntant_section">

       <div className=" background-container  ">
<div className="Konntant">

    <div className="contact-container , content">
      <h1>Kontaktieren Sie uns</h1>
      <p>Füllen Sie das Formular aus und wir werden Sie so schnell wie möglich kontaktieren.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <label>Ihr Name:</label>
        <input type="text" {...register("name", { required: true })} required />

        <label>Email:</label>
        <input type="email" {...register("email", { required: true })} required />

        <label>Nachricht:</label>
        <textarea {...register("message", { required: true })} required></textarea>

        {/* reCAPTCHA */}
        <ReCAPTCHA
          sitekey="6LdgHscqAAAAAKZNCIINSjBt_7_viG7qN1LSyySA" // Вставьте ваш Site Key
          onChange={handleCaptchaChange}
        />

        <button type="submit">Senden</button>
        {message && <p className="form-message">{message}</p>}
   <iframe
        title="Google Map"
        width="100%"
      
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.5010934149623!2d8.864899712556987!3d49.98875997138891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd6b4001fcfce7%3A0x60460ea9e22694d9!2sZielke%20AVG%20Transporte%20%26%20Baggerbetrieb!5e1!3m2!1sde!2sde!4v1739194518758!5m2!1sde!2sde"        allowFullScreen
      ></iframe>

      </form>
      </div>
      </div>
      
      </div>

    
    </section>
  );
}

export default Contact;
