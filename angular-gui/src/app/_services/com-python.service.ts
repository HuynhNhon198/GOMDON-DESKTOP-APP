import { Injectable } from '@angular/core';
import { IPort, IResultOpenPort } from '../_models/app.model';
import { HelperService } from './helper.service';
import { BehaviorSubject } from 'rxjs';

declare var eel: any;
@Injectable({
  providedIn: 'root'
})
export class ComPythonService {

  dataSerial$ = new BehaviorSubject<string>('');

  constructor(
  ) { }

  playAudio(fileName) {
    return new Promise(r => {
      eel.play_audio(fileName)(() => {
        r();
      });
    });
  }

  getListPort(): Promise<IPort[]> {
    return new Promise(r => {
      console.log('get');
      eel.get_ports()((data: IPort[]) => {
        r(data);
      });
    });
  }

  openPort(port: string): Promise<IResultOpenPort> {
    return new Promise(r => {
      eel.open_port(port)((data: IResultOpenPort) => {
        r(data);
      });
    });
  }

  readDataFromSerial() {
    eel.read_data_serial()(data => {
      if (data !== '') {
        this.dataSerial$.next(data);
      }
      this.readDataFromSerial();
    });
  }
  
  createServerSelelium(): Promise<any> {
    return new Promise(r => {
      eel.start_server()(() => {
        r();
      });
    });
  }

}
