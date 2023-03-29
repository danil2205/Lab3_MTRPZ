FROM python:3.9.11
WORKDIR /app
COPY requirements/backend.in /app/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["uvicorn", "spaceship.main:app", "--host=0.0.0.0", "--port=8080"]
