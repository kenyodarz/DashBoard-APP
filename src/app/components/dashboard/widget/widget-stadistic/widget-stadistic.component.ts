//Angular
import { Component, OnInit } from '@angular/core';
//Services
import { ConfigService } from 'src/app/services/config.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-widget-stadistic',
  templateUrl: './widget-stadistic.component.html',
  styleUrls: ['./widget-stadistic.component.css'],
})
export class WidgetStadisticComponent implements OnInit {
  numUsers: number;
  numComments: number;
  numPost: number;

  constructor(public config: ConfigService, private post: PostService) {}

  ngOnInit(): void {
    this.numUsers = this.config.numUsers;
    this.post.getPost().subscribe(listPost => {
      this.numPost = listPost.length;
    })
    this.numComments = 5;
  }
}
