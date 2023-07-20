import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { selectContacts, selectLoading, selectError } from 'redux/selectors';
import { fetchContacts } from '../redux/operations';

const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      className="container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <h1 className="section_title">Phonebook</h1>
      <ContactForm />
      <h2 className="section_title">Contacts </h2>
      {!contacts.length ? (
        <p>There are no contacts in your phonebook</p>
      ) : (
        <Filter />
      )}
      {loading && <p>Loading contacts...</p>}
      {error && <p>Error {error}</p>}
      <ContactList />
    </div>
  );
};

export default App;
