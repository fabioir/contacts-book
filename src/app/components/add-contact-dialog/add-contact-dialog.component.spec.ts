import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { AddContactDialogComponent } from './add-contact-dialog.component';

describe('AddContactDialogComponent', () => {
  let component: AddContactDialogComponent;
  let fixture: ComponentFixture<AddContactDialogComponent>;

  const mockDialogRef = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddContactDialogComponent],
      providers: [{ provide: MatDialogRef, useValue: mockDialogRef }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContactDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
