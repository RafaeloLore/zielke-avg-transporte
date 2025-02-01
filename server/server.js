require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const helmet = require('helmet');
const path = require('path');
const axios = require('axios'); // 🔹 Добавляем axios для reCAPTCHA

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Убираем повторный импорт helmet

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "https://www.google.com", "https://www.gstatic.com"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:"],
        connectSrc: [
          "'self'",
          "https://www.google.com",
          "https://www.gstatic.com",
          "https://api.emailjs.com" // ✅ Добавляем EmailJS
        ],
        frameSrc: ["'self'", "https://www.google.com"],
      },
    },
  })
);

app.use(cors());
app.use(bodyParser.json());

// 🔹 Маршрут для обработки формы с reCAPTCHA
app.post('/contact', async (req, res) => {
  const { name, email, message, captchaToken } = req.body;

  // 🔹 Проверяем, есть ли капча
  if (!captchaToken) {
    return res.status(400).json({ error: 'Ошибка: Не пройдена проверка reCAPTCHA' });
  }

  // 🔹 Проверяем капчу через API Google

  const isCaptchaValid = await verifyCaptcha(captchaToken);
  if (!isCaptchaValid) {
    return res.status(400).json({ error: 'Ошибка: Неверный ключ reCAPTCHA' });
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
    from: `"${name}" <${email}>`, // ⚠️ Теперь отправитель — email пользователя
    to: process.env.EMAIL_RECEIVER,
    subject: 'Новое сообщение с сайта',
    text: `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`,
    replyTo: email // ⚠️ Позволяет ответить прямо на email пользователя
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Сообщение отправлено!' });
  } catch (error) {
    console.error('Ошибка отправки:', error);
    res.status(500).json({ error: 'Ошибка при отправке сообщения.' });
  }
});
app.post("/contact", async (req, res) => {
  console.log("📌 Полученный captchaToken на сервере:", req.body.captchaToken);
});


// 🔹 Функция для проверки Google reCAPTCHA
async function verifyCaptcha(token) {
  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY, // 🔹 Секретный ключ reCAPTCHA из .env
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

// 🔹 Обслуживание статических файлов React
app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});
console.log("🔍 RECAPTCHA_SECRET_KEY:", process.env.RECAPTCHA_SECRET_KEY);
console.log("🔍 EMAIL_USER:", process.env.EMAIL_USER);


// 🔹 Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
