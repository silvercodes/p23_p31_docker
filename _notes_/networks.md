### Базовые команды управления сетями
```bash
# Список сетей
docker network ls

# Создание сети
docker network create my-net

# Просмотр деталей сети
docker network inspect my-net

# Подключение контейнера к сети
docker network connect my-net my-container

# Отключение контейнера от сети
docker network disconnect my-net my-container

# Удаление сети
docker network rm my-net
```


### Пример создания и тестирования сети
```bash
# Создаем пользовательскую сеть
docker network create my-net

# Запускаем контейнеры в этой сети
docker run -d --name web1 --network my-net alpine sleep 3600
docker run -d --name web2 --network my-net alpine sleep 3600

# Теперь ping по имени должен работать
docker exec web1 ping -c 3 web2
```