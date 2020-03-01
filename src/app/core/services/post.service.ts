import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { ResourceService } from './resource.service';

import { Post } from '../models/post.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService extends ResourceService<Post> {

  constructor(
    protected http: HttpClient,
    protected messageService: MessageService
  ) {
    super(environment.endPoints.posts, http, messageService);
  }
}
