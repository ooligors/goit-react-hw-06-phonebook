import React from 'react';
import PropTypes from 'prop-types';

import { ContactElement } from './ContactElement';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDelete }) => {
    return (
    <div className={css.div}>
      <h2 className={css.h2}>Contacts:</h2>
      <ul className={css.ul}>
        {contacts.map(({ id, name, number }) => (
          <ContactElement
            key={id}
            
            name={name}
            number={number}
            onDelete={() => { onDelete(id) }}  />
        ))}
      </ul>
    </div>
  );
};
ContactList.propType = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
