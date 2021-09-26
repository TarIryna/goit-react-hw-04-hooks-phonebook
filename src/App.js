import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import Form from './components/Form';
import Container from './components/Container';
import Phonebook from './components/Phonebook';
import FilterInput from './components/FilterInput';
import shortid from 'shortid';
import './App.css';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storageContacts = localStorage.getItem('contacts');
    const parsedStorageContacts = JSON.parse(storageContacts);
    if (parsedStorageContacts) {
      setContacts(parsedStorageContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    const inputNameId = shortid.generate();
    data.id = inputNameId;
    const findName = contacts.find(contact => contact.name === data.name);
    if (findName) {
      Notiflix.Notify.failure(`${findName.name} is already in contacts`);
      return;
    }
    setContacts(state => [data, ...state]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    console.log(contacts);
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  const deleteContact = contactId => {
    setContacts(state => state.filter(({ id }) => id !== contactId));
  };

  return (
    <Container>
      <h1> Phonebook </h1> <Form onSubmit={addContact} /> <h2> Contacts </h2>{' '}
      <FilterInput filter={filter} onChange={changeFilter} />{' '}
      <Phonebook contacts={getVisibleContacts()} onDelete={deleteContact} />{' '}
    </Container>
  );
}
