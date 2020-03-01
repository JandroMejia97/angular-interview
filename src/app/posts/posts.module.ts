import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PostsRoutingModule } from './posts-routing.module';

import { HomeComponent } from './components/home/home.component';
import { PostListContainer } from './containers/post-list/post-list.container';
import { PostTableComponent } from './components/post-table/post-table.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { CommentListContainer } from './containers/comment-list/comment-list.container';
import { DialogEntryComponent } from './components/dialog-entry/dialog-entry.component';
import { CommentTableComponent } from './components/comment-table/comment-table.component';


@NgModule({
  declarations: [
    HomeComponent,
    PostListContainer,
    PostTableComponent,
    PostDetailComponent,
    CommentListContainer,
    DialogEntryComponent,
    CommentTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PostsRoutingModule
  ],
  entryComponents: [
    HomeComponent,
    PostDetailComponent
  ]
})
export class PostsModule { }
