import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Post } from 'src/app/core/models/post.model';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.scss']
})
export class PostTableComponent implements OnInit {
  @Input() posts: Post[];
  displayedColumns = ['id', 'title'];
  displayedColumnsExpand = ['id', 'title', 'actions'];
  dataSource = new MatTableDataSource<Post>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.data = this.posts;
    this.dataSource.paginator = this.paginator;
  }

}
