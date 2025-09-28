### Управление томами
```bash
# Создание именованного тома
docker volume create my-app-data

# Просмотр списка томов
docker volume ls

# Информация о томе
docker volume inspect my-app-data

# Удаление тома
docker volume rm my-app-data

# Очистка неиспользуемых томов
docker volume prune
```