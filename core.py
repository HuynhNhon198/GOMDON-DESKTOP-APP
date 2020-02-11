import io
import eel
import requests
import atexit
from classes.scanner import Scanner

eel.init('web')
scanner = Scanner()

def exit_handler():
    scanner.close_port()

atexit.register(exit_handler)

URL = "https://jsonplaceholder.typicode.com/todos/"

def getLocation(id):
    # sending get request and saving the response as response object
    r = requests.get(url=(URL+id))
    data = r.json()
    return data
@eel.expose
def close_port():
    scanner.close_port()
    return

@eel.expose
def get_ports():
    ports = scanner.get_list_port()
    return ports

@eel.expose
def read_data_serial():
    a = scanner.read_data()
    return a

@eel.expose
def open_port(port):
    scanner.open_port(port)
    return port
try:
    eel.start('index.html', block=True, size=(900, 730))
except (SystemExit, MemoryError, KeyboardInterrupt):
    # We can do something here if needed
    # But if we don't catch these safely, the script will crash
    pass 

print ('This is printed when the window is closed!')

