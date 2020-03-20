from flask import Flask, jsonify, request
from classes.scanner import Scanner

app = Flask(__name__)
scanner = Scanner()

data = {
    'name': 'Huin Nhon',
    'age': 13
}

white = ['http://localhost:4200','https://banhang.ctvbanhang.com']

@app.after_request
def apply_caching(response):
    if request.headers['Origin'] in white:
        response.headers['Access-Control-Allow-Origin'] = request.headers['Origin'] 
        response.headers['Access-Control-Allow-Methods'] = 'PUT,GET,POST,DELETE'
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type,Authorization'
    return response

@app.route('/scan/get-ports-serial')
def get_port():
    response = jsonify(data)
    return response

@app.route('/scan/open-port/<port>')
def open_port(port):
    err = scanner.open_port(port)
    return jsonify({
        'port': port,
        'err': err
    })

@app.route('/scan/listen-data')
def listen_data():
    a = scanner.read_data()
    return jsonify(a)

@app.route('/scan/close-port')
def listen_data():
    scanner.close_port()
    return

app.run()
