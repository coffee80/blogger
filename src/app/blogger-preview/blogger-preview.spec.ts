import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggerPreview } from './blogger-preview';

describe('BloggerPreview', () => {
  let component: BloggerPreview;
  let fixture: ComponentFixture<BloggerPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloggerPreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloggerPreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
