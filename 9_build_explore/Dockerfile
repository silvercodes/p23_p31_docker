FROM ubuntu

LABEL maintainer="silver.itstep@gmail.com"

RUN apt update && apt install -y curl

COPY script.sh /usr/local/bin

RUN chmod +x /usr/local/bin/script.sh

ENV LOG_LEVEL=info

ENTRYPOINT ["/usr/local/bin/script.sh"]

