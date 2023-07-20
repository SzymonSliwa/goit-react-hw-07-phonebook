import { createSlice } from '@reduxjs/toolkit';
//import { nanoid } from 'nanoid';
import { fetchContacts, addContact, deleteContact } from './operations';

//const defaultContacts = [
// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//];

//const currentContacts =
//  JSON.parse(localStorage.getItem('contactsStorage')) === null
//    ? defaultContacts
//   : JSON.parse(localStorage.getItem('contactsStorage'));

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.err = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    list: [],
    loading: false,
    err: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.loading = false;
      state.err = null;
      state.list = action.payload;
    },

    [addContact.pending]: handlePending,
    [addContact.rejected]: handleRejected,
    [addContact.fulfilled](state, action) {
      state.loading = false;
      state.err = null;
      state.list.push(action.payload);
    },

    [deleteContact.pending]: handlePending,
    [deleteContact.rejected]: handleRejected,
    [deleteContact.fulfilled](state, action) {
      state.loading = false;
      state.err = null;
      const index = state.list.findIndex(
        contact => contact.id === action.payload.id
      );
      state.list.splice(index, 1);
    },
  },
});

export const contactReducer = contactsSlice.reducer;
