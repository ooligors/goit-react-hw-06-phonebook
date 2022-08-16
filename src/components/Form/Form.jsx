import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './Form.module.css';
import { useState } from 'react';

export const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
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

  const onFormSubmit = event => {
    event.preventDefault();

    // console.log(event.target.elements.name.value);

    const contact = {
      id: nanoid(),
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    };

    onSubmit(contact);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={onFormSubmit}>
      <label className={css.label} htmlFor="name">
        Name
      </label>

      <input
        className={css.input}
        type="text"
        name="name"
        value={name}
        onChange={onInputChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label className={css.label} htmlFor="number">
        Number
      </label>

      <input
        className={css.input}
        type="tel"
        name="number"
        value={number}
        onChange={onInputChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <button className={css.btn} type="submit">
        Add Contact
      </button>
    </form>
  );
};
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
