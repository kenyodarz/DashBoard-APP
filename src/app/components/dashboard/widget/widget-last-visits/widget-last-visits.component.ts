import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import * as moment from 'moment';

@Component({
  selector: 'app-widget-last-visits',
  templateUrl: './widget-last-visits.component.html',
  styleUrls: ['./widget-last-visits.component.css'],
})
export class WidgetLastVisitsComponent implements OnInit {
  data: any;
  option: any;

  constructor(private config: ConfigService) {}

  buidData() {
    this.data = {
      labels: [],
      datasets: [
        {
          data: [],
          borderColor: '#565656',
        },
      ],
    };

    for (let index = 0; index < 10; index++) {
      const random = Math.floor(
        Math.random() * (this.config.max - this.config.min) + this.config.min
      );
      this.data.datasets[0].data.push(random);
      const day = moment().subtract(index, 'days').format('MMM-DD');
      this.data.labels.push(day);
      this.data.labels.sort(function (a, b) {
        if (a > b) {
          return 1;
        }
        if (a < b) {
          return -1;
        }
        return 0;
      });
    }
  }

  ngOnInit(): void {
    this.option = {
      legend: {
        display: false,
      },
    };
    this.buidData();
  }
}
