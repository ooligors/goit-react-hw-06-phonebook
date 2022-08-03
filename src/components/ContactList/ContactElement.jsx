import React from 'react';
import css from './ContactElement.module.css';
import PropTypes from 'prop-types';
export const ContactElement = ({ id, name, number, onDelete }) => {
  return (
    <li className={css.li} key={id}>
      <span className={css.span}>
        {name}: {number}
      </span>

      <button className={css.btn} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};
ContactElement.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,

};
