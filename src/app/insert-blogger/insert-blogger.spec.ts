import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertBlogger } from './insert-blogger';

describe('InsertBlogger', () => {
  let component: InsertBlogger;
  let fixture: ComponentFixture<InsertBlogger>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertBlogger]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertBlogger);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
