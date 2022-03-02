import { mockContact } from 'src/app/mocks/contact.mock';
import { mockInitialState } from 'src/app/mocks/state.mock';
import { IContact } from 'src/app/models/contacts.model';
import { addContact, selectContact } from '../contacts-book.actions';
import { contactsBookReducer } from './contacts-book.reducer';

describe('Contacts Book Reducer', () => {
  it('should return non-altered state on not registered action', () => {
    const unknownAction = { type: 'inexisting' };

    const newState = contactsBookReducer(
      mockInitialState.contactsBook,
      unknownAction
    );
    expect(JSON.stringify(newState)).toBe(
      JSON.stringify(mockInitialState.contactsBook)
    );
  });

  it('should add a contact', () => {
    const newContact: IContact = {
      email: 'newContactEmail'
    } as IContact;

    const newState = contactsBookReducer(
      mockInitialState.contactsBook,
      addContact({ newContact })
    );

    expect(newState.contacts.pop()?.email).toBe('newContactEmail');
  });

  it('should select a contact', () => {
    const newContact: IContact = {
      email: 'newContactEmail'
    } as IContact;

    const newState = contactsBookReducer(
      mockInitialState.contactsBook,
      selectContact({ selectedContact: mockContact })
    );

    expect(newState.selectedContact).toBe(mockContact);
  });
});
