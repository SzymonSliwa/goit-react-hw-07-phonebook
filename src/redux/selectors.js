export const selectContacts = state => state.contacts.list;
export const selectContactsFilter = state => state.filter.filter;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.err;
