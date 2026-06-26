from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import json
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

FILE_NAME = "tasks.json"


def load_tasks():

    if not os.path.exists(FILE_NAME):
        return []

    with open(FILE_NAME, "r") as file:

        try:
            return json.load(file)

        except:
            return []


def save_tasks(tasks):

    with open(FILE_NAME, "w") as file:
        json.dump(tasks, file, indent=4)


class Task(BaseModel):
    title: str


@app.get("/tasks")
def get_tasks():

    return load_tasks()


@app.post("/tasks")
def add_task(task: Task):

    tasks = load_tasks()

    new_task = {
        "id": len(tasks) + 1,
        "title": task.title,
        "completed": False,
    }

    tasks.append(new_task)

    save_tasks(tasks)

    return new_task


@app.put("/tasks/{task_id}")
def toggle_task(task_id: int):

    tasks = load_tasks()

    for task in tasks:

        if task["id"] == task_id:

            task["completed"] = not task["completed"]

    save_tasks(tasks)

    return {
        "message": "Task updated"
    }


@app.delete("/tasks/{task_id}")
def delete_task(task_id: int):

    tasks = load_tasks()

    updated_tasks = [

        task for task in tasks

        if task["id"] != task_id
    ]

    save_tasks(updated_tasks)

    return {
        "message": "Task deleted"
    }