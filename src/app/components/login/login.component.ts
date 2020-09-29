// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Services
import { ConfigService } from 'src/app/services/config.service';
import { AuthService } from 'src/app/services/auth.service';
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

  constructor(
    public config: ConfigService,
    private auth: AuthService,
    private router: Router
  ) {
    this.showLoginError = false;
    this.infoLogin = {
      email: null,
      password: null,
    };
  }

  onSubmit() {
    this.auth.login(this.infoLogin).then(
      (success) => {
        console.log(success);
        if (success) {
          localStorage.setItem('logged', '1');
          this.router.navigate(['/resume']);
        }
      },
      (error) => {
        this.showLoginError = true;
        console.error('Error en el Login ' + error);
      }
    );
  }

  ngOnInit(): void {}
}
