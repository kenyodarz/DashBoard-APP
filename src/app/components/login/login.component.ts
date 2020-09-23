// Angular
import { Component, OnInit } from '@angular/core';
// Services
import { ConfigService } from 'src/app/services/config.service';
// Models
import { ILogin } from 'src/app/models/interfaces/ilogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  showLoginError: boolean;
  infoLogin: ILogin;

  constructor(public config: ConfigService) {
    this.showLoginError = false;
    this.infoLogin = {
      email: null,
      password: null
    }
  }

  onSubmit() {}

  ngOnInit(): void {}
}
