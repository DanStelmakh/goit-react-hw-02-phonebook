import React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import shortid from 'shortid';
class App extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addName = (text, number) => {
    const newContact = {
      name: text,
      id: shortid.generate(),
      number,
    };
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
    return (
      <ContactForm
        onSubmit={this.addName}
        state={this.state}
        onRemoveContact={this.removeContact}
      ></ContactForm>
    );
  }
}
export { App };
