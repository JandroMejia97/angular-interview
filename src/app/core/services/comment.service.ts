import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { ResourceService } from './resource.service';

import { Comment } from '../models/comment.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService extends ResourceService<Comment> {

  constructor(
    protected http: HttpClient,
    protected messageService: MessageService
  ) {
    super(environment.endPoints.comments, http, messageService);
  }
}
