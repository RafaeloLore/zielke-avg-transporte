const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const helmet = require('helmet');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
          "'self'",
          "'unsafe-inline'",
          "blob:",
          "https://www.google.com",
          "https://www.gstatic.com",
        ],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:"],
        connectSrc: ["'self'", "https://api.killadsapi.com"],
      },
    },
  })
);

app.use(cors()); // Разрешаем запросы с других источников
app.use(bodyParser.json()); // Для обработки JSON-тел запросов

// Маршрут для обработки формы
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Проверка обязательных полей
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Все поля обязательны!' });
  }

  // Настройка Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ВАШ_EMAIL@gmail.com', // Замените на ваш email
      pass: 'ВАШ_ПАРОЛЬ',          // Замените на пароль приложения
    },
  });

  const mailOptions = {
    from: 'ВАШ_EMAIL@gmail.com',
    to: 'КУДА_ОТПРАВЛЯТЬ@gmail.com', // Email, куда будут приходить сообщения
    subject: 'Новое сообщение с сайта',
    text: `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Сообщение отправлено!' });
  } catch (error) {
    console.error('Ошибка отправки:', error);
    res.status(500).json({ error: 'Ошибка отправки сообщения.' });
  }
});

// Обслуживание статических файлов React
app.use(express.static(path.join(__dirname, '../dist')));

// Передача всех маршрутов на React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
