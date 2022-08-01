import React from 'react';

import { ContactElement } from './ContactElement';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onClick }) => {
  return (
    <div className={css.div}>
      <h2 className={css.h2}>Contacts:</h2>
      <ul className={css.ul}>
        {contacts.map(({ id, name, number }) => (
          <ContactElement
            key={id}
            name={name}
            number={number}
            onClick={() => {
              onClick(id);
            }}
          />
        ))}
      </ul>
    </div>
  );
};
