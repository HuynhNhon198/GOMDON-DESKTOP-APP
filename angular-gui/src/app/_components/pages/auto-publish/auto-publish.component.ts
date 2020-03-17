import { Component, OnInit } from '@angular/core';
import { ComPythonService } from 'src/app/_services/com-python.service';

@Component({
  selector: 'app-auto-publish',
  templateUrl: './auto-publish.component.html',
  styleUrls: ['./auto-publish.component.scss']
})
export class AutoPublishComponent implements OnInit {

  constructor(
    private eelSV: ComPythonService,
  ) { }

  async ngOnInit(): Promise<void> {

    // await this.eelSV.createServerSelelium();
    console.log('ok');

  }

}
