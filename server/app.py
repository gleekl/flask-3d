from flask import Flask, redirect, jsonify, request, g, session, render_template
import requests
from flask_cors import CORS

app = Flask(__name__)
# Had to install flask_cors to enable Cross Origin Resource Sharing(CORS).
CORS(app)

base_url = "https://botw-compendium.herokuapp.com/api/v3/compendium"


@app.route("/", methods=["GET"])
def index():
    return "This is the home server page"


# Entire Compendium
@app.route("/api/compendium", methods=["GET", 'POST'])
def compendium():
    if request.method == "GET":
        url = f"{base_url}"
        compendium = requests.get(url)
        return compendium.json()
    elif request.method == "POST":
        search_name = request.form["search"]
        url = f"{base_url}/entry/{search_name}"
        entry = requests.get(url)
        return entry.json()
        


# Single Entry (ID)
@app.route("/api/compendium/entry/<entry_id>", methods=["GET"])
def entry(entry_id):
    url = f"{base_url}/entry/{entry_id}"
    entry = requests.get(url)
    return entry.json()


# Single Entry (Name)
@app.route("/api/compendium/entry/<entry_name>", methods=["GET"])
def entry(entry_name):
    if request.method == "GET":
        url = f"{base_url}/entry/{entry_name}"
        entry = requests.get(url)
        return entry.json()


# Categories
# @app.route("/api/categories/<category>", methods=["GET"])
# def categories(category):
#     url = f"{base_url}{category}"
#     single_category = requests.get(url)
#     return single_category.json()


# @app.route('/api/compendium', methods=['GET'])
# def compendium():
#     url = f"{base_url}"
#     compendium = requests.get(url)
#     return compendium.json()

if __name__ == "__main__":
    app.run(debug=True)
