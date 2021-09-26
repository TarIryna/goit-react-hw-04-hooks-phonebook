import React from 'react';
import PropTypes from 'prop-types';
import s from './Phonebook.module.css';

export default function Contact({ name, number, onClick }) {
  return (
    <>
      {name}: <span className={s.number}> {number} </span>
      <button className={s.button} type="button" onClick={onClick}>
        Delete
      </button>
    </>
  );
}

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onClick: PropTypes.func,
};
