import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedContainerComponent } from './top-rated-container.component';

describe('TopRatedContainerComponent', () => {
  let component: TopRatedContainerComponent;
  let fixture: ComponentFixture<TopRatedContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRatedContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
