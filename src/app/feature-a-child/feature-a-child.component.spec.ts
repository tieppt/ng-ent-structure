import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAChildComponent } from './feature-a-child.component';

describe('FeatureAChildComponent', () => {
  let component: FeatureAChildComponent;
  let fixture: ComponentFixture<FeatureAChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureAChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureAChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
