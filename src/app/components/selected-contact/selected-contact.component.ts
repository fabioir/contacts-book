import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IContact } from 'src/app/models/contacts.model';
import { IContactsBookState } from 'src/app/store/reducers/contacts-book.reducer';
import { selectSelectedContact } from 'src/app/store/selectors/contacts-book.selectors';

@Component({
  selector: 'app-selected-contact',
  templateUrl: './selected-contact.component.html',
  styleUrls: ['./selected-contact.component.scss']
})
export class SelectedContactComponent implements OnInit, OnDestroy {
  public selectedContact!: IContact | null;

  private subscriptions = new Subscription();

  constructor(private store: Store<{ contactsBook: IContactsBookState }>) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.store
        .select(selectSelectedContact)
        .subscribe((contact) => (this.selectedContact = contact))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
