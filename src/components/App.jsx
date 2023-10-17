import { Section } from './section/Section';
import { FormaContacts } from './formaContacts/FormaContacts';
import { Filter } from './filter/Filter';
import { Contacts } from './contacts/Contacts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contactsThunk';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title={'Phonebook'}>
        <FormaContacts />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <Contacts />
      </Section>
    </>
  );
};
