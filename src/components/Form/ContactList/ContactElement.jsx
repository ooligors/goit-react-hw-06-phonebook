import React from 'react';
import css from './ContactElement.module.css';
export const ContactElement = ({ id, name, number, onClick }) => {
  return (
    <li className={css.li} key={id}>
      <span className={css.span}>
        {name}: {number}
      </span>

      <button className={css.btn} onClick={() => onClick(id)}>Delete</button>
    </li>
  );
};
