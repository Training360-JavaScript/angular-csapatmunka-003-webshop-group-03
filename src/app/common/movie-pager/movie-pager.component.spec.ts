import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePagerComponent } from './movie-pager.component';

describe('MoviePagerComponent', () => {
  let component: MoviePagerComponent;
  let fixture: ComponentFixture<MoviePagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviePagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
