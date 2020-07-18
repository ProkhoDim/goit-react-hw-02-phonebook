import React, { Component } from 'react';
import styles from './ContactForm.module.css';
import { v4 as uuidv4 } from 'uuid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  contactId = uuidv4;

  addContactClick = e => {
    e.preventDefault();
    if (!this.state.name) {
      alert('Enter a name!');
      return;
    }
    this.props.onSubmit({ ...this.state, id: this.contactId() });
    this.formReset();
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  formReset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.addContactClick} className={styles.contactForm}>
        <label className={styles.formLabel}>
          Name
          <input
            type="input"
            name="name"
            onChange={this.handleChange}
            value={name}
            className={styles.formInput}
          />
        </label>

        <label className={styles.formLabel}>
          Phone number
          <input
            type="input"
            name="number"
            onChange={this.handleChange}
            value={number}
            className={styles.formInput}
          />
        </label>

        <button type="submit" className={styles.formBtn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
