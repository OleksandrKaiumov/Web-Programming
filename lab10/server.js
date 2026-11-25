import http from 'node:http';
import { todos } from './data.js';

// Render передає порт через змінну середовища PORT.
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Відповідаємо на попередній запит браузера (CORS preflight).
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>Мій перший сервер на Node.js працює!</h1>');
  } else if (req.url === '/api/v1/todoItem' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(todos));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ message: 'Маршрут не знайдено' }));
  }
});

// Публічний вебсервіс Render має слухати на 0.0.0.0.
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Сервер успішно запущено за адресою: http://localhost:${server.address().port}`);
});
