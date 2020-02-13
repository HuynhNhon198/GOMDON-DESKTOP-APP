import { Component, OnInit, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
import { HelperService } from 'src/app/_services/helper.service';
import { IPort } from 'src/app/_models/app.model';
import { ComPythonService } from 'src/app/_services/com-python.service';
import { Subscription, BehaviorSubject } from 'rxjs';
import { SellService, Sell } from 'src/app/openapi';
@Component({
  selector: 'app-scan-barcode',
  templateUrl: './scan-barcode.component.html',
  styleUrls: ['./scan-barcode.component.scss']
})
export class ScanBarcodeComponent implements OnInit, OnDestroy {
  ports: IPort[] = [];
  currentPort = '...';
  datas: ({
    id: string;
    code: string;
    data: Sell
  })[] = [];
  loading = false;
  task = 1;
  subData: Subscription;
  constructor(
    private helper: HelperService,
    private eelSV: ComPythonService,
    private ngZone: NgZone,
    private sellSV: SellService
  ) {
  }

  ngOnInit(): void {
    this.subData = this.eelSV.dataSerial$.subscribe(async data => {
      if (data !== '') {
        this.sellSV.configuration.accessToken = await this.helper.getToken();
        this.ngZone.run(() => {
          this.loading = true;
          this.sellSV.getByIdsSell([data]).subscribe(async (res: any[]) => {
            const sell = res[0];
            if (sell.code === 'error' && sell.data.message === 'đơn không tồn tại') {
              await this.eelSV.playAudio('notfound');
            } else if (sell.code === 'success') {
              if (this.task === 1) {
                const status = sell.data.gomdon_status;
                switch (true) {
                  case status < 5:
                    await this.eelSV.playAudio('chuaguidi');
                    break;
                  case status === 5 || status === 6:
                    this.sellSV.updateSell([{
                      id: sell.data.order_sn,
                      data: {
                        gomdon_status: 8
                      }
                    }]).subscribe(async (res1) => {
                      if (res1[0].code === 'success') {
                        await this.eelSV.playAudio('hoan');
                        sell.data.gomdon_status = 8;
                      }
                    });
                    break;
                  case status === 8:
                    await this.eelSV.playAudio('dahoan');
                    break;
                }
              }
            }

            this.datas = [sell, ...this.datas];
            this.loading = false;
          });
        });
      }
    });
    this.getListPort();
  }

  ngOnDestroy() {
    this.subData.unsubscribe();
  }

  async getListPort() {
    this.loading = true;
    this.ports = await this.eelSV.getListPort();
    this.loading = false;
  }

  async openPort(e) {
    // this.helper.loading();
    const result = await this.eelSV.openPort(e.value);
    console.log(result);
    if (result.err !== '') {
      alert(result.err);
      this.currentPort = '...';
    } else {
      this.currentPort = result.port;
      this.eelSV.readDataFromSerial();
    }
    // this.helper.loading(true);
  }

}
