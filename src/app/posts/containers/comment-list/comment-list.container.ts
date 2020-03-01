import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CommentService } from 'src/app/core/services/comment.service';
import { Comment } from 'src/app/core/models/comment.model';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.container.html',
  styleUrls: ['./comment-list.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class CommentListContainer implements OnInit {
  @Input() postId: number;
  @Output() dateEmitter = new EventEmitter<Date>();
  @Output() closeEmitter = new EventEmitter<any>();
  comments: Comment[];
  protected params: any = {};


  constructor(private commentService: CommentService) { }

  ngOnInit() {
    if (this.postId) {
      this.params.postId = this.postId;
    }
    this.getComments();
  }

  getComments() {
    this.commentService.getList(this.params).subscribe((comments: Comment[]) => {
      this.comments = comments;
    });
  }

  emit() {
    this.dateEmitter.emit(new Date());
  }
}
