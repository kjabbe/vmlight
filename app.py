import os
from flask import Flask, render_template, send_from_directory, jsonify, json

template_dir = os.path.abspath('build')
static_dir = os.path.abspath('build/static')
app = Flask(__name__, static_url_path=static_dir, template_folder=template_dir)

#React stuff
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/static/js/<path:path>')
def send_js(path):
    return send_from_directory('build/static/js', path)

@app.route('/static/css/<path:path>')
def send_css(path):
    return send_from_directory('build/static/css', path)

@app.route('/static/media/<path:path>')
def send_media(path):
    return send_from_directory('build/static/media', path)

# Actual stuff
@app.route('/rest/result')
def result():
    response = jsonify(showjson())
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

def showjson():
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, "25062018.json")
    data = json.load(open(json_url))
    return data

if __name__ == '__main__':
    app.run(debug=True)