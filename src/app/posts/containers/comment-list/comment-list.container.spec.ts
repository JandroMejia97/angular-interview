import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentListContainer } from './comment-list.container';

describe('CommentListContainer', () => {
  let component: CommentListContainer;
  let fixture: ComponentFixture<CommentListContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentListContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentListContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
