# TaskFlowPro

## Overview

TaskFlowPro is a full-stack task management application designed to help users organize, track, and manage daily tasks efficiently. The application provides an intuitive user interface for task creation, updating, completion tracking, and deletion.

## Features

* Create new tasks
* Update existing tasks
* Mark tasks as completed
* Delete tasks
* Persistent task storage using JSON
* Responsive and user-friendly interface
* FastAPI backend API
* React + Vite frontend

## Tech Stack

### Frontend

* React
* Vite
* JavaScript
* CSS

### Backend

* FastAPI
* Python
* Uvicorn

### Storage

* JSON File Storage

## Project Structure

TaskFlowPro/
├── frontend/
├── backend/
│   ├── main.py
│   ├── tasks.json
│   └── requirements.txt
└── README.md

## Installation

### Clone Repository

git clone https://github.com/prajwaljm123/TaskFlowPro.git

### Backend Setup

cd backend

pip install -r requirements.txt

python -m uvicorn main:app --reload

Backend runs on:
http://127.0.0.1:8000

### Frontend Setup

cd frontend

npm install

npm run dev

Frontend runs on:
http://localhost:5173

## API Documentation

FastAPI Swagger UI:

http://127.0.0.1:8000/docs

## Future Enhancements

* User authentication
* Database integration
* Task categories
* Task priorities
* Notifications and reminders
* Cloud deployment

## Author

Prajwal J Munnolli
