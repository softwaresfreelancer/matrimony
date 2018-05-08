import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativeInfoComponent } from './relative-info.component';

describe('RelativeInfoComponent', () => {
  let component: RelativeInfoComponent;
  let fixture: ComponentFixture<RelativeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelativeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelativeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
