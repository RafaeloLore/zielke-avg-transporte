import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

function ContactForm() {
  const { register, handleSubmit, reset } = useForm();
  const [captchaToken, setCaptchaToken] = useState(null);
  const [message, setMessage] = useState('');

  const onSubmit = async (data) => {
    if (!captchaToken) {
      setMessage('Ошибка: Подтвердите, что вы не робот.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/contact', {
        ...data,
        captchaToken, // 🔹 Отправляем капчу на сервер
      });

      setMessage(response.data.message);
      reset();
      setCaptchaToken(null);
    } catch (error) {
      setMessage('Ошибка отправки. Попробуйте снова.');
      console.error('Ошибка:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Имя:</label>
      <input {...register('name', { required: 'Введите имя' })} type="text" placeholder="Ваше имя" />
      
      <label>Email:</label>
      <input {...register('email', { required: 'Введите email' })} type="email" placeholder="Ваш email" />
      
      <label>Сообщение:</label>
      <textarea {...register('message', { required: 'Введите сообщение' })} placeholder="Ваше сообщение"></textarea>
      
      <ReCAPTCHA
        sitekey="6LdgHscqAAAAAKZNCIINSjBt_7_viG7qN1LSyySA" // 🔹 Вставьте публичный ключ reCAPTCHA
        onChange={setCaptchaToken}
        onExpired={() => setCaptchaToken(null)}
      />
      
      <button type="submit">Отправить</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default ContactForm;
