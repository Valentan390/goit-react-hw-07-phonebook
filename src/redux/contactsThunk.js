import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createContactsService,
  deleteContactsService,
  getContactsService,
} from 'services/APIservices';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', () =>
  getContactsService()
);

export const addContact = createAsyncThunk('contacts/addContact', contact =>
  createContactsService(contact)
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  contactid => deleteContactsService(contactid)
);
