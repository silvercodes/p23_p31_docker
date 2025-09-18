
## Команды

### docker ps
```bash
# Просмотр запущенных контейнеров
docker ps

# Просмотр всех контейнеров
docker ps -a

# Просмотр контейнеров с форматированием вывода
docker ps --format "table {{.ID}}\t{{.Names}}\t{{.Status}}"


```

### docker run
```bash
# Запуск контейнера в интерактивном режиме
docker run -it ubuntu bash

# Запуск в фоновом режиме с пробросом портов
docker run -d -p 8080:80 --name web nginx

# Запуск с ограничением ресурсов
docker run -d --name web --memory=512m --cpus=1 nginx
```

### docker rm
```bash
# Удаление остановленного контейнера
docker rm <container_name>

# Удаление всех остановленных контейнеров
docker container prune

# Жёсткое (-f или --force) удаление ВСЕХ контейнеров (ОСТОРОЖНО)
docker rm -f $(docker ps -aq)

# Принудительное удаление запущенного контейнера
docker rm -f <container_name>
```

### docker logs
```bash
# Просмотр логов
docker logs container_name

# Просмотр в реальном времени
docker logs -f container_name

# Просмотр с временной меткой
docker logs -t container_name

# Просмотр последних N строк
docker logs --tail 100 container_name
```

### docker start/stop/restart
```bash
# Остановка контейнера
docker stop <container_name>

# Запуск остановленного контейнера
docker start <container_name>

# Перезапуск контейнера
docker restart <container_name>
```

### Дополнительно
```bash
# Выполнение команды в Запущенном контейнере
docker exec -it <container_name> /bin/bash

# Просмотр детальной информации о контейнере
docker inspect <container_name>

# Просмотр статистики использования ресурсов
docker stats <container_name>

# Копирование файлов между хостом и контейнером
docker cp file.txt <container_name>:/path/in/container

# Смотрим изменения через docker diff
docker diff <container_name>
```

## Простые примеры
### Веб-приложение с nginx

```bash
# Запуск nginx с пробросом портов
docker run -d --name web -p 8080:80 nginx:latest

# Проверка работы
curl http://localhost:8080

# Просмотр логов
docker logs web

# Остановка и удаление
docker stop web
docker rm web
```

### Интерактивная работа с контейнером

```bash
# Запуск контейнера с интерактивной оболочкой
docker run -it --name web ubuntu:20.04 bash

# Внутри контейнера:
apt update && apt install -y curl
curl --version
exit

# Перезапуск и выполнение команды
docker start web
docker exec -it web curl example.com

# Остановка и удаление
docker stop web
docker rm web
```
