## Бызовые команды

```bash
# Показать запущенные контейнеры
docker ps

# Показать все контейнеры
docker ps -a

docker images

docker stop <container_id>

docker start <container_id>

docker rm <container_id>

docker rmi <image_id>

docker build -t <image_tag>

docker logs <container_id>

docker logs -f <container_id>

docker logs --tail 100 <container_id>
```

## Запуск контейнера

```bash
docker run -it ubuntu bash

docker exec -it <container_name> bash

docker run -d -p 8080:80 --name web_con nginx

docker run -d --name web_con -p 8080:80 --memory=512m --cpus=1 nginx
```

## Лайфхаки
```bash
# Удалить все остановленные контейнеры
docker rm $(docker ps -aq)
```