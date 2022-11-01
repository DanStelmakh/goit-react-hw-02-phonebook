import React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import shortid from 'shortid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  addName = (text, number) => {
    const newContact = {
      name: text,
      id: shortid.generate(),
      number,
    };
    if (this.state.contacts.some(contact => contact.name === newContact.name)) {
      return alert("Can't add already existing contact");
    }
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };
  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addName} state={this.state}></ContactForm>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}></Filter>
        <ContactList
          contacts={filteredContacts}
          onRemoveContact={this.removeContact}
        ></ContactList>
        <div>
          <span>Total number of contacts: {contacts.length}</span>
        </div>
      </div>
    );
  }
}
export { App };
