import { createSelector } from '@ngrx/store';
import { IAppState } from '../app.state';
import { IContactsBookState } from '../reducers/contacts-book.reducer';

export const selectContactsBook = (state: IAppState) => state.contactsBook;

export const selectContactsList = createSelector(
  selectContactsBook,
  (state: IContactsBookState) => state.contacts
);

export const selectSelectedContact = createSelector(
  selectContactsBook,
  (state: IContactsBookState) => state.selectedContact
);

export const selectSelectedContactEmail = createSelector(
  selectContactsBook,
  (state: IContactsBookState) => state.selectedContact?.email ?? null
);
