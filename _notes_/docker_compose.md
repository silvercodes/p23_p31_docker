### Основные команды для docker compose
```bash
# Запуск всего стека сервисов. Флаг -d запускает в фоновом режиме, --build принудительно пересобирает образы.
docker compose up --build -d

# Остановка и удаление контейнеров и сетей. Флаг `-v` также удаляет тома.
docker compose down -v

# Просмотр статуса контейнеров в текущем проекте.
docker compose ps

# Просмотр статуса контейнеров в текущем проекте.
docker compose logs -f

# Выполнение команды внутри запущенного контейнера определенного сервиса.
docker compose exec mysql bash
```



### 2. Таблица всех элементов Docker Compose

| Группа | Подгруппа | Элемент | Описание |
|--------|-----------|---------|----------|
| <span style="background-color:#2e7d32;color:white;padding:2px 6px;border-radius:3px;display:inline-block">**Корневой уровень**</span> | - | `docker-compose.yml` | Основной файл конфигурации |
| | - | `version` | Версия схемы Compose |
| <span style="background-color:#1565c0;color:white;padding:2px 6px;border-radius:3px;display:inline-block">**Services**</span> | **Базовые настройки** | `image` | Docker образ для запуска |
| | | `container_name` | Имя контейнера |
| | | `restart` | Политика перезапуска |
| | | `hostname` | Имя хоста в контейнере |
| | **Сборка образа** | `build` | Конфигурация сборки |
| | | `context` | Путь для сборки |
| | | `dockerfile` | Имя Dockerfile |
| | | `args` | Аргументы сборки |
| | **Сеть и порты** | `ports` | Проброс портов |
| | | `expose` | Открытие портов |
| | | `networks` | Подключение сетей |
| | **Переменные окружения** | `environment` | Переменные окружения |
| | | `env_file` | Файл с переменными |
| | **Тома и монтирования** | `volumes` | Монтирование томов |
| | | `tmpfs` | Временные ФС |
| | **Выполнение команд** | `command` | Команда запуска |
| | | `entrypoint` | Точка входа |
| | **Зависимости** | `depends_on` | Зависимости сервисов |
| | | `healthcheck` | Проверка здоровья |
| | **Ресурсы** | `deploy` | Настройки развертывания |
| | | `resources` | Ограничения ресурсов |
| <span style="background-color:#388e3c;color:white;padding:2px 6px;border-radius:3px;display:inline-block">**Networks**</span> | **Конфигурация** | `driver` | Драйвер сети |
| | | `external` | Внешняя сеть |
| | | `ipam` | Управление IP |
| <span style="background-color:#7b1fa2;color:white;padding:2px 6px;border-radius:3px;display:inline-block">**Volumes**</span> | **Конфигурация** | `driver` | Драйвер тома |
| | | `external` | Внешний том |
| | | `driver_opts` | Опции драйвера |
| <span style="background-color:#e65100;color:white;padding:2px 6px;border-radius:3px;display:inline-block">**Configs**</span> | **Источники** | `file` | Локальный файл |
| | | `external` | Внешний конфиг |
| <span style="background-color:#c2185b;color:white;padding:2px 6px;border-radius:3px;display:inline-block">**Secrets**</span> | **Типы** | `file` | Файл секрета |
| | | `environment` | Переменная окружения |

