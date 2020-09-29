// Angular
import { Component, OnInit } from '@angular/core';
// PrimeNG
// Services
import { ConfigService } from 'src/app/services/config.service';
import { AuthService } from 'src/app/services/auth.service';
// Models

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(public config: ConfigService, private auth: AuthService) {}

  logout() {
    this.auth.logout();
  }

  ngOnInit(): void {}
}
