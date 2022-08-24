import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofilModifyComponent } from './userprofil-modify.component';

describe('UserprofilModifyComponent', () => {
  let component: UserprofilModifyComponent;
  let fixture: ComponentFixture<UserprofilModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserprofilModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprofilModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
