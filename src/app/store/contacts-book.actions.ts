import { createAction, props } from '@ngrx/store';
import { IContact } from '../models/contacts.model';

export const addContact = createAction(
  '[Contact Form] Contact Added',
  props<{ newContact: IContact }>()
);

export const selectContact = createAction(
  '[Contact Details] Contact Selected',
  props<{ selectedContact: IContact }>()
);
