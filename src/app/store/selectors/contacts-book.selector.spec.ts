import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { mockContact } from 'src/app/mocks/contact.mock';
import { mockInitialState } from 'src/app/mocks/state.mock';
import { IContact } from 'src/app/models/contacts.model';
import { addContact, selectContact } from '../contacts-book.actions';
import {
  contactsBookReducer,
  IContactsBookState
} from '../reducers/contacts-book.reducer';
import {
  selectContactsBook,
  selectContactsList,
  selectSelectedContact,
  selectSelectedContactEmail
} from './contacts-book.selectors';

describe('Contacts Book Selectors', () => {
  let store: Store<{ contactsBook: IContactsBookState }>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({ contactsBook: contactsBookReducer })]
    });
    store = TestBed.inject(Store);
  });
  describe('selectContactsBook', () => {
    it('should select contactsBook from application state', () => {
      const selectedContactsBook = selectContactsBook(mockInitialState);
      expect(selectedContactsBook).toBeTruthy();
      expect(selectedContactsBook).toBe(mockInitialState.contactsBook);
    });

    it('selectContactsBook integration test', (done) => {
      store
        .select(selectContactsBook)
        .pipe(take(1))
        .subscribe((state) => {
          expect(state).toBeTruthy();
          expect((state as IContactsBookState).contacts).toBeDefined();
          expect((state as IContactsBookState).selectedContact).toBeNull();
          done();
        });
    });
  });

  describe('selectContactsList', () => {
    it('should select the contacts list', () => {
      const selectedContactsList = selectContactsList.projector(
        mockInitialState.contactsBook
      );
      expect(selectedContactsList).toBeTruthy();
      expect(selectedContactsList).toBe(mockInitialState.contactsBook.contacts);
    });

    it('should select the contacts list integration test', (done) => {
      store.dispatch(addContact({ newContact: mockContact }));

      store
        .select(selectContactsList)
        .pipe(take(1))
        .subscribe((contacts) => {
          expect(contacts).toBeTruthy();
          expect((contacts as IContact[]).length).toBe(1);
          expect((contacts as IContact[])[0]).toBe(mockContact);
          done();
        });
    });
  });

  describe('selectSelectedContact', () => {
    it('should select the selected contact', () => {
      const selectedSelectedContact = selectSelectedContact.projector(
        mockInitialState.contactsBook
      );
      expect(selectedSelectedContact).toBeTruthy();
      expect(selectedSelectedContact).toBe(
        mockInitialState.contactsBook.selectedContact
      );
    });

    it('should select the selected contact integration test', (done) => {
      store.dispatch(selectContact({ selectedContact: mockContact }));

      store
        .select(selectSelectedContact)
        .pipe(take(1))
        .subscribe((selectedContact) => {
          expect(selectedContact).toBeTruthy();
          expect(selectedContact as IContact).toBeTruthy();
          expect(selectedContact as IContact).toBe(mockContact);
          done();
        });
    });
  });

  describe('selectSelectedContactEmail', () => {
    it('should select the selected contact email', () => {
      const selectedSelectedContactEmail = selectSelectedContactEmail.projector(
        mockInitialState.contactsBook
      );
      expect(selectedSelectedContactEmail).toBeTruthy();
      expect(selectedSelectedContactEmail).toBe(
        (mockInitialState.contactsBook.selectedContact as IContact).email
      );
    });

    it('should select the selected contact email integration test', (done) => {
      store.dispatch(selectContact({ selectedContact: mockContact }));

      store
        .select(selectSelectedContactEmail)
        .pipe(take(1))
        .subscribe((selectedContactEmail) => {
          expect(selectedContactEmail).toBeTruthy();
          expect(selectedContactEmail).toBe(mockContact.email);
          done();
        });
    });
  });
});
