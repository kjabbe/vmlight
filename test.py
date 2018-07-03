import os
import json
import sys
import xlrd
from subprocess import Popen, PIPE

#p1 = Popen(["./getExcel.sh"], stdout=PIPE)
#p1.communicate()

#subprocess.call(, shell=True)
#sed -i 's/\"\": \"Toppscorer i VM:\", \"Diff, antall gjettede m\\u00e5l \(jo lavere, jo bedre\)\": \"\", \"Navn\": \"M\\u00e5lscorere\", \"Poeng\": \"M\\u00e5l\",//g' fasit.json
#{
 #    "": "Toppscorer i VM:",
    #    "Diff, antall gjettede m\u00e5l (jo lavere, jo bedre)": "",
    #    "Navn": "M\u00e5lscorere",
    #    "Poeng": "M\u00e5l"
    #},
    #try:
    #    subprocess.run("pwd", shell=True, check=True, capture_output=True)
    #    subprocess.run("/app/getExcel.sh", shell=True, check=True)
    #except:
    #    print('fail')
    #    #return Response("{s:'f'}", status=502, mimetype='application/json')
    #return Response("{s:'o'}", status=201, mimetype='application/json')

#SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
#json_url = os.path.join(SITE_ROOT, "fasit.json")
#data = json.load(open(json_url))

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


p2 = Popen("sed -i 's/{\"Navn\": \"M\\u00e5lscorere\", \"Poeng\": \"M\\u00e5l\", \"Diff, antall gjettede m\\u00e5l \(jo lavere, jo bedre\)\": \"\", \"\": \"Toppscorer i VM:\"},//g' fasit.json") 
p2.communicate()
