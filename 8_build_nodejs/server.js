const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  
  // Устанавливаем заголовки для CORS (разрешаем запросы откуда угодно)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  if (parsedUrl.pathname === '/' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Добро пожаловать на сервер!' }));
  } 
  else if (parsedUrl.pathname === '/time' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({ 
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString()
    }));
  }
  else if (parsedUrl.pathname === '/stats' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({
      uptime: `${process.uptime()} seconds`,
      memory: process.memoryUsage(),
      nodeVersion: process.version
    }));
  }
  else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Страница не найдена' }));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});

server.on('error', (err) => {
  console.error('Ошибка сервера:', err);
});
