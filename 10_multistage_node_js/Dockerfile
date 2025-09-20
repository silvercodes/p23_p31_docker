# Этап 1
# Сборка зависимостей
FROM node AS dependencies
WORKDIR /app
COPY package.json .
RUN npm install

# Этап 2
# Сборка финального образа
FROM node
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]