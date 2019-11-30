import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAndroidLoaderComponent } from './mat-android-loader.component';

describe('MatAndroidLoaderComponent', () => {
  let component: MatAndroidLoaderComponent;
  let fixture: ComponentFixture<MatAndroidLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatAndroidLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatAndroidLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
