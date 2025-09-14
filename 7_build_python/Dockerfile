FROM python
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
RUN pip install --upgrade flask werkzeug
COPY . .
EXPOSE 5000
