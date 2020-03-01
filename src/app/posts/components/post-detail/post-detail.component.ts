import { Component, OnInit, Input, Inject } from '@angular/core';
import { Post } from 'src/app/core/models/post.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  date: Date;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Post,
    public dialogRef: MatDialogRef<PostDetailComponent>,
  ) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  getLastCommentDate($event: any) {
    this.date = $event;
  }

}
