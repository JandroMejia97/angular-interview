import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/core/models/comment.model';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-comment-table',
  templateUrl: './comment-table.component.html',
  styleUrls: ['./comment-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class CommentTableComponent implements OnInit {
  @Input() comments: Comment[];
  displayedColumns = ['name', 'email'];
  dataSource = new MatTableDataSource<Comment>();
  expandedComment: Comment | null;

  constructor() { }

  ngOnInit() {
    this.dataSource.data = this.comments;
  }

}
