import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ filter, contacts, onDeleteContact }) => {
  const normilizedFilter = filter.toLowerCase();
  const contactsList = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normilizedFilter),
  );
  return (
    <ul className={styles.contactList}>
      {contactsList.map(({ name, id, number }) => (
        <li key={id} className={styles.contactItem}>
          {name}: <span className={styles.contactText}>{number}</span>
          <button
            type="button"
            name="delete"
            onClick={() => onDeleteContact(id)}
            className={styles.deleteBtn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ContactList;
