import React from 'react';
import { ContactList } from 'components/ContactList/ContactList';
import { Form, Input, Btn } from 'components/ContactForm/ContactForm.styled';
class ContactForm extends React.Component {
  state = {
    text: '',
    number: '',
  };
  resetForm = () => {
    this.setState({ text: '', number: '' });
  };

  handleChange = e => {
    this.setState({
      text: e.currentTarget.value,
    });
  };
  handleChangeNumber = e => {
    this.setState({
      number: e.currentTarget.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.text, this.state.number);
    this.resetForm();
  };

  render() {
    const { contacts } = this.props.state;
    const { onRemoveContact } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        <h1>Name</h1>

        <Input
          onChange={this.handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <h2>Number</h2>
        <Input
          onChange={this.handleChangeNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Btn type="submit">Add contact</Btn>
        <h2>Contacts</h2>

        <ContactList
          contacts={contacts}
          onRemoveContact={onRemoveContact}
        ></ContactList>

        {/*         
        <h2>Contacts</h2>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul> */}
      </Form>
    );
  }
}

export { ContactForm };
