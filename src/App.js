import React, { Component } from 'react';
import './global.css';

import ContactForm from './component/ContactForm';
import Filter from './component/Filter';
import ContactList from './component/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleContactFormSubmit = ({ name, number, id }) => {
    const { contacts } = this.state;
    const isNameInContacts = contacts.some(contact => name === contact.name);

    if (isNameInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(() => ({
      contacts: [{ name, id, number }, ...contacts],
    }));
  };

  deleteContact = deleteId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== deleteId),
    }));
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  filteredContacts = (contacts, filter) => {
    const normilizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normilizedFilter),
    );
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <>
        <section>
          <h2>Phonebook</h2>
          <ContactForm onSubmit={this.handleContactFormSubmit} />
        </section>
        <section>
          {contacts.length > 0 && <h2>Contacts</h2>}
          {contacts.length > 3 && (
            <Filter onChange={this.handleChange} filter={filter} />
          )}
          {contacts.length > 0 && (
            <ContactList
              contacts={this.filteredContacts(contacts, filter)}
              onDeleteContact={this.deleteContact}
            />
          )}
        </section>
      </>
    );
  }
}

export default App;
