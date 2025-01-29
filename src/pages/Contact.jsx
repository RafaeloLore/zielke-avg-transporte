import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import '../styles/Contact.css';

function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const [captchaValue, setCaptchaValue] = useState(null);
  const [message, setMessage] = useState('');

  // Обработчик reCAPTCHA
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  // Отправка формы
  const onSubmit = (data) => {
    if (!captchaValue) {
      setMessage('Пожалуйста, подтвердите, что вы не робот.');
      return;
    }

    const emailData = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    };

    emailjs.send(
      'service_0e1omid', // Service ID из EmailJS
      'template_slv3dxb', // Template ID из EmailJS
      emailData,
      'IDxfo24Ry1NIB7uLa' // Public Key из EmailJS
    )
    .then(
      () => {
        setMessage('Ваше сообщение успешно отправлено!');
        reset();
        setCaptchaValue(null);
      },
      (error) => {
        setMessage('Ошибка при отправке. Попробуйте снова.');
        console.error('Ошибка EmailJS:', error);
      }
    );
  };

  return (
    <div className="contact-container">
      <h1>Свяжитесь с нами</h1>
      <p>Заполните форму, и мы свяжемся с вами как можно скорее.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <label>Ваше имя:</label>
        <input type="text" {...register('name', { required: true })} required />

        <label>Email:</label>
        <input type="email" {...register('email', { required: true })} required />

        <label>Сообщение:</label>
        <textarea {...register('message', { required: true })} required></textarea>

        {/* reCAPTCHA */}
        <ReCAPTCHA
          sitekey="tifefQrGVfk2dg4jFTpdj" // Вставьте ваш Site Key
          onChange={handleCaptchaChange}
        />

        <button type="submit">Отправить</button>
        {message && <p className="form-message">{message}</p>}
      </form>
    </div>
  );
}

export default Contact;
