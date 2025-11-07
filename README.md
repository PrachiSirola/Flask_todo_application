# Flask_todo_application
A simple and elegant To-Do web app built with Flask.
This app lets users add, edit, delete, and mark tasks as complete — all from a minimal web interface.
# Features
- Add new tasks
- Edit existing tasks
- Mark tasks as completed
- Delete tasks
- Persistent storage using SQLite
- Clean and responsive UI with HTML/CSS + Bootstrap
# Tech Stack
- Backend: Flask (Python)
- Frontend: HTML, CSS, Bootstrap
- Database: SQLite (via Flask-SQLAlchemy)
# Setup Instructions
- Clone the repository
```bash
git clone https://github.com/PragathiGajula/Flask_todo_application.git
cd Flask_todo_application
```
- Create a virtual environment (optional but recommended)
```bash
python -m venv venv
source venv/bin/activate   # On macOS/Linux
venv\Scripts\activate      # On Windows
```
# Install dependencies
```bash
pip install -r requirements.txt
```
# Run the application
```bash
python app.py
```
# Project Structure
```bash
flask-todo-app/
│
├── app.py                # Main Flask application
├── requirements.txt      # Dependencies
├── templates/            # HTML templates
│   ├── index.html
│   └── base.html
└── static/               # CSS, JS, and images
    └── style.css
```
# Example Features
- Add a Task: Enter a task and click “Add”.
- Mark Complete: Click the checkbox to mark it done.
- Edit Task: Update text easily.
- Delete Task: Remove tasks you no longer need.
