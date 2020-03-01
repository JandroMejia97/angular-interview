import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListContainer } from './post-list.container';

describe('PostListContainer', () => {
  let component: PostListContainer;
  let fixture: ComponentFixture<PostListContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
