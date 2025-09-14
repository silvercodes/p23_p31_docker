### docker images
```bash
# Список образов
docker images

# Список в формате JSON
docker images --format "{{.ID}}: {{.Repository}}"
```

### docker search
```bash
# Поиск образа
docker search nginx

# Поиск с фильтром по звездам
docker search --filter stars=100 nginx
```

### docker pull
**Технические детали:**
- Скачивает образ по слоям
- Проверяет цифровые подписи (если включено)
- Сохраняет в локальное хранилище
```bash
# Скачивание образа
docker pull nginx

# Скачивание с конкретным тегом
docker pull ubuntu:20.04

# Скачивание из другного registry
docker pull myregistry.local:5000/my_img:tag
```

### docker build
Сборка образа из Dockerfile.
```bash
# Сборка образа
docker build -t my_img .

# Сборка с указанием Dockerfile
docker build -f Dockerfile.dev -t my_img:dev .

# Сборка без кэша
docker build --no-cache -t my_img .
```

### docker rmi
Удаление образа(ов) из локального хранилища.
```bash
# Удаление образа
docker rmi my_img

# Удаление по ID
docker rmi abc123def456

# Удаление неиспользуемых образов
docker image prune

# Принудительное удаление
docker rmi -f my_img
```

### Дополнительно
```bash
# Пометка образа тегом
docker tag my_img:latest myregistry.com/my_img:1.0

# Загрузка образа в registry
docker push myregistry.com/my_img:1.0

# Сохранение образа в tar-архив
docker save -o my_img.tar my_img:latest

# Загрузка образа из tar-архива
docker load -i my_img.tar

# Просмотр истории образа
docker history my_img:latest
```