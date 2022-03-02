import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IContact } from 'src/app/models/contacts.model';
import { IContactsBookState } from 'src/app/store/reducers/contacts-book.reducer';
import {
  selectContactsList,
  selectSelectedContactEmail
} from 'src/app/store/selectors/contacts-book.selectors';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit, OnDestroy {
  public contacts$!: Observable<readonly IContact[]>;
  public selectedContactEmail!: string | null;

  private subscriptions = new Subscription();

  constructor(private store: Store<{ contactsBook: IContactsBookState }>) {}

  ngOnInit(): void {
    this.contacts$ = this.store.select(selectContactsList);
    this.subscriptions.add(
      this.store
        .select(selectSelectedContactEmail)
        .subscribe((email) => (this.selectedContactEmail = email))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
