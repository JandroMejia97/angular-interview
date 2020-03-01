import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostService } from 'src/app/core/services/post.service';
import { Post } from 'src/app/core/models/post.model';
import { MatDialog } from '@angular/material';
import { PostDetailComponent } from '../post-detail/post-detail.component';

@Component({
  template: '',
})
export class DialogEntryComponent {
  post: Post;

  constructor(
    private router: Router,
    private matDialog: MatDialog,
    private route: ActivatedRoute,
    private postService: PostService,
  ) {
    console.log('DIALOG ENTRY');
    this.getPost();
  }

  getPost() {
    this.route.params.subscribe((params: Params) => {
      const id = Number(params.id);
      this.postService.getObject(id).subscribe((post: Post) => {
        this.post = post;
        this.openDialog();
      });
    });
  }

  openDialog() {
    const dialogRef = this.matDialog.open(PostDetailComponent, {
      data: this.post
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

}
