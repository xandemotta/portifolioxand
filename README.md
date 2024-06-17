pipenv install




pipenv shell


docker build -t backend-image .


docker run -d -p 8000:8000 backend-image


docker build -t frontend-image .


docker run -d -p 8080:8080 frontend-image



uvicorn app.main:app --reload
