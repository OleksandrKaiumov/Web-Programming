# Лабораторна робота №10

HTTP-сервер на Node.js без сторонніх залежностей. Власний ES-модуль `data.js`
містить стартові завдання з полями моделі `Todo` з лабораторної роботи №9.
Реалізовано отримання даних (GET), CORS та відповіді на OPTIONS.
Створення, редагування та видалення завдань за методичкою належать до наступних робіт.

## Локальний запуск

У терміналі з кореня репозиторію:

```powershell
cd lab10
npm install
npm run dev
```

Для запуску без автоматичного перезапуску: `npm start`.
За замовчуванням використовується порт `3000`; змінна середовища `PORT` має пріоритет.

Перевірки:

| Запит | Очікувана відповідь |
| --- | --- |
| `GET http://localhost:3000/` | 200, HTML із привітанням |
| `GET http://localhost:3000/api/v1/todoItem` | 200, JSON-масив із двома завданнями |
| `OPTIONS http://localhost:3000/api/v1/todoItem` | 204, заголовки CORS, порожнє тіло |
| `GET http://localhost:3000/missing` | 404, JSON із повідомленням «Маршрут не знайдено» |

## Деплой на Render — крок 9, виконує користувач

1. Увійдіть у [Render Dashboard](https://dashboard.render.com/) через GitHub.
2. Натисніть **New → Web Service**.
3. Виберіть **Git Provider → GitHub** та підключіть репозиторій
   [OleksandrKaiumov/Web-Programming](https://github.com/OleksandrKaiumov/Web-Programming).
   Якщо його немає у списку, надайте Render доступ до цього репозиторію через налаштування GitHub.
4. Заповніть поля:

   | Поле | Значення |
   | --- | --- |
   | Name | `oleksandr-lab10-todo` або інша вільна назва |
   | Region | Frankfurt |
   | Branch | `main` |
   | Root Directory | `lab10` |
   | Language / Runtime | Node |
   | Build Command | `npm install` |
   | Start Command | `npm start` |
   | Instance Type | Free |
   | Health Check Path, якщо поле відображається | `/` |

   Корінь Git-репозиторію — локальна папка `labs`, тому Root Directory саме `lab10`.
   Змінну `PORT` вручну задавати не потрібно: її надає Render.
5. Натисніть **Deploy Web Service** та дочекайтеся успішного деплою (статус **Live**).
   У логах має з'явитися повідомлення «Сервер успішно запущено…».
6. Відкрийте згенеровану Render адресу `https://<назва-сервісу>.onrender.com/`.
   Перевірте привітання, потім додайте до адреси `/api/v1/todoItem` та перевірте JSON-масив.
   Кутові дужки тут позначають вашу фактичну назву сервісу.
7. Передайте фактичне посилання на сервер у поточному чаті для продовження роботи.

На Free сервіс засинає після 15 хвилин без запитів. Наступний запуск може тривати близько хвилини.

Після деплою залишаються кроки 10–13: додати фактичний URL API до `index.html`
у корені репозиторію, злити та відправити зміни, перевірити GitHub Pages і оформити звіт.

Офіційна документація Render:
[Web Services](https://render.com/docs/web-services),
[Root Directory](https://render.com/docs/monorepo-support),
[Free instances](https://render.com/docs/free).
