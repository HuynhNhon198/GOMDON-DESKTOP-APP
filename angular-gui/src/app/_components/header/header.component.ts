import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/_services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public fbSV: FirebaseService
  ) { 
  }

  ngOnInit(): void {
  }

}
