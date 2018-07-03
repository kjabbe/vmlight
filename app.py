import os
import json
import sys
import xlrd
from subprocess import Popen, PIPE
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

@app.route('/static/bets/<path:path>')
def send_bets(path):
    return send_from_directory('bets', path)

# Actual stuff
@app.route('/rest/result')
def result():
    response = jsonify(showjson())
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/refresh')
def refresh():
    #subprocess.call("./getExcel.sh", shell=True)
    p1 = Popen(["./getExcel.sh"], stdout=PIPE)
    p1.communicate()
    createJSON()
    #subprocess.call(, shell=True)
    #sed -i 's/\"\": \"Toppscorer i VM:\", \"Diff, antall gjettede m\\u00e5l \(jo lavere, jo bedre\)\": \"\", \"Navn\": \"M\\u00e5lscorere\", \"Poeng\": \"M\\u00e5l\",//g' fasit.json
    #{
    #    "": "Toppscorer i VM:",
    #    "Diff, antall gjettede m\u00e5l (jo lavere, jo bedre)": "",
    #    "Navn": "M\u00e5lscorere",
    #    "Poeng": "M\u00e5l"
    #},
    p2 = Popen("sed -i 's/\"\": \"Toppscorer i VM:\", \"Diff, antall gjettede m\\u00e5l \(jo lavere, jo bedre\)\": \"\", \"Navn\": \"M\\u00e5lscorere\", \"Poeng\": \"M\\u00e5l\",//g' fasit.json", stdout=PIPE)
    p2.communicate()
    return Response("{s:'o'}", status=201, mimetype='application/json')
    #try:
    #    subprocess.run("pwd", shell=True, check=True, capture_output=True)
    #    subprocess.run("/app/getExcel.sh", shell=True, check=True)
    #except:
    #    print('fail')
    #    #return Response("{s:'f'}", status=502, mimetype='application/json')
    #return Response("{s:'o'}", status=201, mimetype='application/json')

def showjson():
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, "fasit.json")
    data = json.load(open(json_url))
    return data

def createJSON():
    workbook = xlrd.open_workbook("Netlight VM-tipping2018_resultater.xlsx")
    worksheet = workbook.sheet_by_name("Resultater")
    data = []
    keys = [v.value for v in worksheet.row(0)]
    for row_number in range(worksheet.nrows):
        if row_number == 0:
            continue
        row_data = {}
        for col_number, cell in enumerate(worksheet.row(row_number)):
            row_data[keys[col_number]] = cell.value
        data.append(row_data)

    with open("fasit.json", 'w') as json_file:
        json_file.write(json.dumps(data))

if __name__ == '__main__':
    #app.run(debug=True)
    app.run(host='0.0.0.0', port=os.environ.get('PORT', 5000), debug=True)
