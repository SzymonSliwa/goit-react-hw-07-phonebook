import { useSelector, useDispatch } from 'react-redux';

import { selectContactsFilter } from 'redux/selectors';
import { filterContact } from '../../redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectContactsFilter);
  const dispatch = useDispatch();
  const filterContacts = ev => {
    dispatch(filterContact(ev.currentTarget.value));
  };

  return (
    <div>
      <h3 className="section_title">Find contacts by name</h3>
      <input
        value={filter}
        onChange={filterContacts}
        className="input"
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};
