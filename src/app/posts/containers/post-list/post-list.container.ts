import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/core/services/post.service';
import { Post } from 'src/app/core/models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.container.html',
  styleUrls: ['./post-list.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class PostListContainer implements OnInit {
  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getList().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

}
