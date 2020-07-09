import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  const filterInputId = uuidv4();
  return (
    <>
      <label htmlFor={filterInputId} className={styles.labelFilter}>
        Find contacts by name
      </label>
      <input
        id={filterInputId}
        type="input"
        name="filter"
        onChange={onChange}
        value={filter}
        className={styles.inputFilter}
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
