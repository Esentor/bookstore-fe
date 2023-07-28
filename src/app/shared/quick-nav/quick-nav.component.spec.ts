import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickNavComponent } from './quick-nav.component';

describe('QuickNavComponent', () => {
  let component: QuickNavComponent;
  let fixture: ComponentFixture<QuickNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuickNavComponent]
    });
    fixture = TestBed.createComponent(QuickNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
