import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Form.module.css';

export default function Form({ onSubmit }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const state = { id, name, number };

  const onSubmitForm = e => {
    e.preventDefault();
    onSubmit(state);
    reset();
  };

  const onChangeInput = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'id':
        setId(value);
        break;

      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setId('');
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={onSubmitForm}>
      <div className={s.labels}>
        <label className={s.name}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={onChangeInput}
          />
        </label>
        <label className={s.name}>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            onChange={onChangeInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
      </div>
      <button className={s.button} type="submit" key="submitBtn">
        Add contact
      </button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};
