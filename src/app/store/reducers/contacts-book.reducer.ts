import { Action, createReducer, on } from '@ngrx/store';
import { IContact } from '../../models/contacts.model';
import { addContact, selectContact } from '../contacts-book.actions';

export interface IContactsBookState {
  contacts: IContact[];
  selectedContact: IContact | null;
}

const initialState: IContactsBookState = {
  contacts: [],
  selectedContact: null
};

const _contactsBookReducer = createReducer(
  initialState,
  on(addContact, (state, { newContact }) => ({
    ...state,
    contacts: [...state.contacts, newContact]
  })),
  on(selectContact, (state, { selectedContact }) => ({
    ...state,
    selectedContact
  }))
);

export function contactsBookReducer(
  state: IContactsBookState | undefined,
  action: Action
) {
  return _contactsBookReducer(state, action);
}
