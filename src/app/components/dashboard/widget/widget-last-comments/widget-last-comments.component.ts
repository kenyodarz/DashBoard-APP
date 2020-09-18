import { Component, OnInit } from '@angular/core';
import { IComment } from 'src/app/models/interfaces/icomment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-widget-last-comments',
  templateUrl: './widget-last-comments.component.html',
  styleUrls: ['./widget-last-comments.component.css'],
})
export class WidgetLastCommentsComponent implements OnInit {
  listComments: IComment[] = [];

  constructor(private commentService: CommentService) {}

  getComments() {
    this.commentService.getComments().subscribe((listComments) => {
      this.listComments = listComments;
      console.log(this.listComments.length);
    });
  }

  ngOnInit(): void {
    this.getComments();
  }
}
