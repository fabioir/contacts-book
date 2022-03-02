import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-contact-dialog',
  templateUrl: './add-contact-dialog.component.html',
  styleUrls: ['./add-contact-dialog.component.scss']
})
export class AddContactDialogComponent {
  public contactFormGroup = new FormGroup({
    name: new FormControl(),
    familyName: new FormControl(),
    email: new FormControl('', Validators.required),
    phone: new FormControl(),
    address: new FormControl()
  });
  constructor(public dialogRef: MatDialogRef<AddContactDialogComponent>) {}
}
