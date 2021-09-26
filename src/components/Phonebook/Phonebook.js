import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';
import s from './Phonebook.module.css';

export default function Phonebook({ contacts, onDelete }) {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.name} key={id}>
          <Contact name={name} number={number} onClick={() => onDelete(id)} />
        </li>
      ))}
    </ul>
  );
}

Phonebook.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};
