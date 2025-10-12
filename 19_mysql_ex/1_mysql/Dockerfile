FROM mysql:8.4

# Копируем конфиг с правильными правами
COPY ./conf.d/custom-config.cnf /etc/mysql/conf.d/custom-config.cnf
RUN chmod 644 /etc/mysql/conf.d/custom-config.cnf