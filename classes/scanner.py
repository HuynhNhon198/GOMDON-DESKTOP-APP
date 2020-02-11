
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
        self.ser.port = port
        try: 
            if self.ser.isOpen():
                self.ser.close()
            self.ser.open()
            if callback:
                callback(port)
            print('open port')
        except (Exception):
            print (Exception)
            self.ser.close()
            exit()
        return

    def close_port(self):
        self.ser.close()

    def get_list_port(self):
        arr = []
        ports = serial.tools.list_ports.comports()
        for port, desc, hwid in sorted(ports):
            arr.append(port)
        # print(arr)
        return arr

    def read_data(self):
        if self.ser.isOpen():
            a = ''
            try:
                while True:
                    if self.ser.isOpen() == False:
                        break
                    else:
                        s = self.ser.readline()
                        if s:
                            a=s.decode()
                            break
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