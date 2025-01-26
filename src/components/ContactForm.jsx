import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [captchaToken, setCaptchaToken] = React.useState(null);

  const onSubmit = async (data) => {
    if (!captchaToken) {
      alert('Подтвердите, что вы не робот!');
      return;
    }

    try {
      await axios.post('http://localhost:5000/contact', { ...data, captchaToken });
      alert('Сообщение отправлено!');
      reset();
      setCaptchaToken(null);
    } catch (error) {
      console.error(error);
      alert('Ошибка при отправке сообщения!');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <div>
        <label>NNName:</label>
        <input
          {...register('name', { required: 'Введите ваше имя' })}
          type="text"
          placeholder="Ваше имя"
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          {...register('email', {
            required: 'Введите ваш email',
            pattern: { value: /^\S+@\S+$/, message: 'Некорректный email' }
          })}
          type="email"
          placeholder="Ваш email"
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label>Сообщение:</label>
        <textarea
          {...register('message', { required: 'Введите ваше сообщение' })}
          placeholder="Ваше сообщение"
        ></textarea>
        {errors.message && <span>{errors.message.message}</span>}
      </div>
      <ReCAPTCHA
        sitekey="ВАШ_SITE_KEY"
        onChange={setCaptchaToken}
        onExpired={() => setCaptchaToken(null)}
      />
      <button type="submit">Отправить</button>
    </form>
  );
}

export default ContactForm;
