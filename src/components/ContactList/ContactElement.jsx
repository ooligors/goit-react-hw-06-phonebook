import React from 'react';
import css from './ContactElement.module.css';
// import PropTypes from 'prop-types';
export const ContactElement = ({ idContact, name, number, onDelete }) => {
  // console.log(idContact);
  return (
    <li className={css.li}>
      <span className={css.span}>
        {name}: {number}
      </span>

      <button id={name} className={css.btn} onClick={() => { onDelete(idContact) }}>
        Delete
      </button>
    </li>
  );
};
// ContactElement.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onDelete: PropTypes.func.isRequired,
//   id: PropTypes.string.isRequired,
// };
