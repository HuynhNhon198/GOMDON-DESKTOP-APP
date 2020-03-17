import io
import eel
import requests
import atexit
from playsound import playsound
from flask import Flask, jsonify
from classes.scanner import Scanner
# import time

eel.init('angular-gui/dist/angular-gui')
scanner = Scanner()

# app = Flask(__name__)

data = {
    'name': 'Huin Nhon',
    'age': 13
}

# @app.route('/product/<id>')
# def product(id):
#     data['id'] = id
#     response = jsonify(data)
#     response.headers.add('Access-Control-Allow-Origin', '*')
#     return response

def exit_handler():
    scanner.close_port()

def run_mp3(filePath):
    playsound(filePath)

atexit.register(exit_handler)

URL = "https://jsonplaceholder.typicode.com/todos/"

def getLocation(id):
    # sending get request and saving the response as response object
    r = requests.get(url=(URL+id))
    data = r.json()
    return data

# @eel.expose
# def start_server():
#     app.run()
#     return True

@eel.expose
def close_port():
    scanner.close_port()
    return

@eel.expose
def play_audio(fileName):
    run_mp3('audio/'+fileName+'.mp3')
    return True

@eel.expose
def get_ports():
    print('get')
    ports = scanner.get_list_port()
    return ports

@eel.expose
def read_data_serial():
    a = scanner.read_data()
    # while True:
    #     a = scanner.read_data()
    #     if a == '':
    #         a = scanner.read_data()
    #     else:
    #         break
    #     print('1' + a)
    #     time.sleep(1)
    return a

@eel.expose
def open_port(port):
    err = scanner.open_port(port)
    return {
        'port': port,
        'err': err
    }
try:
    eel.start('index.html', block=True, size=(800, 630), port=1988)
except (SystemExit, MemoryError, KeyboardInterrupt):
    # We can do something here if needed
    # But if we don't catch these safely, the script will crash
    pass 

print ('This is printed when the window is closed!')

