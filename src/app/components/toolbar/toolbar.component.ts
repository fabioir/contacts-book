import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { IContact } from 'src/app/models/contacts.model';
import { addContact } from 'src/app/store/contacts-book.actions';
import { IContactsBookState } from 'src/app/store/reducers/contacts-book.reducer';
import { AddContactDialogComponent } from '../add-contact-dialog/add-contact-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
  constructor(
    private store: Store<{ contactsBook: IContactsBookState }>,
    private dialog: MatDialog
  ) {}

  public addContact(): void {
    this.dialog
      .open(AddContactDialogComponent)
      .afterClosed()
      .subscribe(
        (newContact: IContact) =>
          newContact && this.store.dispatch(addContact({ newContact }))
      );
  }
}
