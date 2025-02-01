require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const helmet = require('helmet');
const path = require('path');
const axios = require('axios'); // Для reCAPTCHA и проверки email

const app = express();
const PORT = process.env.PORT || 5000;

// ⚡ Настройка Helmet для безопасности
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
          "'self'",
          "'unsafe-inline'",
          "https://www.google.com",
          "https://www.gstatic.com",
        ],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:"],
        connectSrc: [
          "'self'",
          "https://www.google.com",
          "https://www.gstatic.com",
          "https://api.emailjs.com",
          "https://emailvalidation.abstractapi.com", // ✅ Добавляем Abstract API для проверки email
        ],
        frameSrc: ["'self'", "https://www.google.com"],
      },
    },
  })
);

app.use(cors());
app.use(bodyParser.json());

// 🔹 Функция проверки email через Abstract API
async function verifyEmail(email) {
  try {
    const response = await axios.get(`https://emailvalidation.abstractapi.com/v1/`, {
      params: {
        api_key: process.env.ABSTRACT_API_KEY, // ⚡ API-ключ для проверки email
        email: email,
      },
    });

    return response.data.is_valid_format.value && response.data.deliverability === "DELIVERABLE";
  } catch (error) {
    console.error("Ошибка проверки email:", error);
    return false;
  }
}

// 🔹 Функция проверки Google reCAPTCHA
async function verifyCaptcha(token) {
  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: token,
        },
      }
    );
    return response.data.success;
  } catch (error) {
    console.error('Ошибка reCAPTCHA:', error);
    return false;
  }
}

// 🔹 Маршрут для обработки формы
app.post('/contact', async (req, res) => {
  const { name, email, message, captchaToken } = req.body;

  // 🔹 Проверяем reCAPTCHA
  if (!captchaToken) {
    return res.status(400).json({ error: 'Ошибка: Не пройдена проверка reCAPTCHA' });
  }
  const isCaptchaValid = await verifyCaptcha(captchaToken);
  if (!isCaptchaValid) {
    return res.status(400).json({ error: 'Ошибка: Неверный ключ reCAPTCHA' });
  }

  // 🔹 Проверяем email через Abstract API
  const isEmailValid = await verifyEmail(email);
  if (!isEmailValid) {
    return res.status(400).json({ error: 'Ошибка: Указанный email не существует или недоступен.' });
  }

  // 🔹 Проверяем обязательные поля формы
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Все поля обязательны!' });
  }

  // 🔹 Настройка Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`, // ⚡ Отправитель - сервер
    to: process.env.EMAIL_RECEIVER,
    subject: 'Новое сообщение с сайта',
    text: `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`,
    replyTo: email, // ✅ Позволяет ответить пользователю напрямую
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Сообщение отправлено!' });
  } catch (error) {
    console.error('Ошибка отправки:', error);
    res.status(500).json({ error: 'Ошибка при отправке сообщения.' });
  }
});

// 🔹 Обслуживание статических файлов React
app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// 🔹 Логирование важных переменных (удалите в продакшене!)
console.log("🔍 RECAPTCHA_SECRET_KEY:", process.env.RECAPTCHA_SECRET_KEY);
console.log("🔍 EMAIL_USER:", process.env.EMAIL_USER);
console.log("🔍 ABSTRACT_API_KEY:", process.env.ABSTRACT_API_KEY);

// 🔹 Запуск сервера
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});
