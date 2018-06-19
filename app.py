import os
from flask import Flask, render_template, send_from_directory

template_dir = os.path.abspath('build')
static_dir = os.path.abspath('build/static')
app = Flask(__name__, static_url_path=static_dir, template_folder=template_dir)

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

if __name__ == '__main__':
    app.run(debug=True)