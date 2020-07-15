import React, { Component } from 'react';
import styles from './ContactForm.module.css';
import { v4 as uuidv4 } from 'uuid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  contactId = uuidv4;
  nameInputId = uuidv4();
  numberInputId = uuidv4();

  addContactClick = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state, id: this.contactId() });
    this.formReset();
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  formReset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.addContactClick} className={styles.contactForm}>
        <p>
          <label htmlFor={this.nameInputId} className={styles.formLabel}>
            Name
          </label>
          <input
            id={this.nameInputId}
            type="input"
            name="name"
            onChange={this.handleChange}
            value={name}
            className={styles.formInput}
          />
        </p>
        <p>
          <label htmlFor={this.numberInputId} className={styles.formLabel}>
            Phone number
          </label>
          <input
            id={this.numberInputId}
            type="input"
            name="number"
            onChange={this.handleChange}
            value={number}
            className={styles.formInput}
          />
        </p>

        <button type="submit" className={styles.formBtn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
