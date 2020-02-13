import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/_services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public fbSV: FirebaseService
  ) { }

  ngOnInit(): void {
  }

}
