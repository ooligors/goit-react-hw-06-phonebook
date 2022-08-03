import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';
export const Filter = ({ value, onChange }) => {
  return (
    <div className={css.div}>
      <label className={css.filterLabel}>
        Find contacts by name
        <input
          className={css.filterInput}
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
