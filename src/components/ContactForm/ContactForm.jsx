import React from 'react';
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
    return (
      <Form onSubmit={this.handleSubmit}>
        <p>Name</p>

        <Input
          onChange={this.handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <p>Number</p>
        <Input
          onChange={this.handleChangeNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Btn type="submit">Add contact</Btn>
      </Form>
    );
  }
}

export { ContactForm };
