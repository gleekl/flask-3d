from flask import (
    Flask,
    redirect,
    jsonify,
    request,
    g,
    session,
    render_template
)
import requests
from flask_cors import CORS

app = Flask(__name__)
# Had to install flask_cors to enable Cross Origin Resource Sharing(CORS).
CORS(app)         

@app.route('/', methods=['GET'])
def index():
    return "This is the home server page"

# Entire Compendium
@app.route('/api/compendium', methods=['GET'])
def compendium():
    url = f"https://botw-compendium.herokuapp.com/api/v3/compendium/"
    compendium = requests.get(url)
    return compendium.json()

# Single Entry
@app.route('/api/compendium/entry/<entry_name>', methods=['POST'])
def entry(entry_name):
    url = f"https://botw-compendium.herokuapp.com/api/v3/compendium/category/{entry_name}"
    entry = requests.get(url)
    return entry.json()

# Categories
@app.route('/api/categories/<category>', methods=['GET'])
def categories(category):
    url = f"https://botw-compendium.herokuapp.com/api/v3/compendium/{category}"
    single_category = requests.get(url)
    return single_category.json()

@app.route('/api/compendium', methods=['GET'])
def compendium():
    url = f"https://botw-compendium.herokuapp.com/api/v3/compendium/"
    compendium = requests.get(url)
    return compendium.json()

if __name__ == '__main__':
    app.run(debug=True)

