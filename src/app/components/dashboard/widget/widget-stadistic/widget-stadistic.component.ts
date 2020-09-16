//Angular
import { Component, OnInit } from '@angular/core';
//Services
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-widget-stadistic',
  templateUrl: './widget-stadistic.component.html',
  styleUrls: ['./widget-stadistic.component.css'],
})
export class WidgetStadisticComponent implements OnInit {
  numUsers: number;
  numComments: number;
  numPost: number;

  constructor(public config: ConfigService) {}

  ngOnInit(): void {
    this.numUsers = this.config.numUsers;
    this.numPost = 20;
    this.numComments = 5;
  }
}
