
# Базовый образ
FROM node AS builder

# Метаданные
LABEL maintainer="vasia"
LABEL descriptio="....."
LABEL version="1.0"
LABEL org.opencontainers.image.source="https://github.com/........./repo"

# Рабочая директория
WORKDIR /usr/src/app

# Копирование файлов
COPY package*.json .
COPY --chown=node:node . /usr/src/app

# Копирование с доп возможностями (разархивирование)
ADD https://lib.com/data.tar.gz /var/tmp

# Выполнение команд
RUN npm install
RUN npm run builde
RUN npm cache clean --force && \
    rm -rf /tmp/* var/tmp/*

# Переменные окружения
ENV NODE_ENV=production
ENV PORT=3000
ENV APP_VERSION=1.0.0

# Аргументы сборки
# Можно переопределять ---->>  docker build --build-arg NODE_VERSION=18.16.0
ARG NODE_VERSION=20.12.0
ARG APP_DIR=/usr/src/app

FROM node:${NODE_VERSION}
WORKDIR ${APP_DIR}

# Открытие портов (разрешение на открытие)
EXPOSE 3000
EXPOSE 3000/tcp
EXPOSE 3000/udp

# Монтирование томов
VOLUME ["./src", "/usr/src"]

# Команда по-умолчанию
# Можно переопределить ------>> docker run my-img npm start
CMD ["node", "server.js"]
#CMD node server.js

# Точка входа
# Можно переопределить ------>> docker run my-img --entrypoint bash
ENTRYPOINT [ "node" ]

# Изменить shell
SHELL ["/bin/sh"]




#####################################################
FROM node

ENTRYPOINT [ "node" ]

CMD ["app.js"]

# docker run my-img                         > node app.js
# docker run my-img server.js               > node server.js
# docker run --entrypoint npm my-img start  > npm start


#####################################################
FROM node

COPY docker-entrypoint.sh /usr/local/bin
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

WORKDIR /app

COPY . .

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]

CMD ["start"]

# #!/bin/sh
# if ["$1" = 'start']; then
#   exec node app.js
# elif ["$1" = 'debug']; then
#   exec node --env=debug app.js
#....