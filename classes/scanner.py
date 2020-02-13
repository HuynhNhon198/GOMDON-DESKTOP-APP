
import serial.tools.list_ports
import serial

class Scanner(object):
    ser = serial.Serial()
    clients_scanner = []
    def __init__(self ):
        self.ser.baudrate = 115200
        self.ser.bytesize = serial.EIGHTBITS #number of bits per bytes
        self.ser.parity = serial.PARITY_NONE #set parity check: no parity
        self.ser.stopbits = serial.STOPBITS_ONE #number of stop bits
        self.ser.timeout = 1            #non-block read
        self.ser.xonxoff = False     #disable software flow control
        self.ser.rtscts = False     #disable hardware (RTS/CTS) flow control
        self.ser.dsrdtr = False       #disable hardware (DSR/DTR) flow control
        self.ser.writeTimeout = 2     #timeout for write

    def open_port(self, port, callback = None):
        print(port)
        
        err = ''
        try: 
            self.ser.port = port
            if self.ser.isOpen():
                self.ser.close()
            self.ser.open()
            if callback:
                callback(port)
            print('open port')
        except Exception as e:
            
            self.ser.close()
            err = str(e)
            print('Failed: '+ err)
            # exit()
            pass
            return err
        return err

    def close_port(self):
        self.ser.close()

    def get_list_port(self):
        arr = []
        ports = serial.tools.list_ports.comports()
        for port, desc, hwid in sorted(ports):
            arr.append({
                'port': port,
                'desc': desc,
                'hwid': hwid
            })
        # print(arr)
        return arr

    def read_data(self):
        a = ''
        try:
            if self.ser.isOpen():
                barcode = self.ser.read(15)
                if barcode != b'':
                    a = barcode.decode()
            # print('start')
            # self.ser.flushInput() #flush input buffer, discarding all its contents
            # self.ser.flushOutput()#flush output buffer, aborting current output 
            #         #and discard all that is in buffer
            # response = self.ser.read(11)
            # print(response.decode())
            # if callback:
            #     print('callback')
            #     callback('reply', response.decode(), namespace='/scanner', room=self.clients_scanner[0])
        except (Exception):
            print("error communicating...: " + str(Exception))        
        return a