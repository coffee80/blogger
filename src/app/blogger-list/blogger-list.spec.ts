import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggerList } from './blogger-list';

describe('BloggerList', () => {
  let component: BloggerList;
  let fixture: ComponentFixture<BloggerList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloggerList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloggerList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
