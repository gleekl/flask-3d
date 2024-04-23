from flask import (
    Flask,
    redirect,
    jsonify,
    request,
    g,
    session,
    render_template
)

app = Flask(__name__)

@app.before_request
def connect_to_db():
    get_db()
