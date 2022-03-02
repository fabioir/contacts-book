import { IAppState } from '../store/app.state';
import { mockContact } from './contact.mock';

export const mockInitialState: IAppState = {
  contactsBook: {
    contacts: [mockContact],
    selectedContact: mockContact
  }
};
