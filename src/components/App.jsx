import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onFormSubmitHandler = contact => {
    if (this.state.contacts.some(item => item.name === contact.name)) {
      // alert(`${contact.name} is already in the contacts list`);
      Notify.warning(`${contact.name} is already in the contacts list`);
      return;
    }
    this.setState(() => {
      return {
        contacts: this.state.contacts.concat(contact),
      };
    });
  };

  onChangeFilter = event => {
    console.log(event.target.value);
    this.setState(() => {
      return {
        filter: event.target.value,
      };
    });
  };

  filterList = () => {
    const normilizedFilter = this.state.filter.toLowerCase();
    const filterList = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
    return filterList;

    // return this.state.contacts.filter(item => {
    //   return item.name.toLowerCase().includes(this.state.filter.toLowerCase());
    // });
  };

  onDelete = id => {
    this.setState({
      contacts: [...this.state.contacts.filter(contact => contact.id !== id)],
    });
  };
  // onNameChange = (event) => {
  //   this.setState({name: event.target.value})
  // }
  // onNumberChange = (event) => {
  //   this.setState({number: event.target.value})

  //  }

  render() {
    return (
      <div
        className={css.app}
        style={{
          backgroundColor: '#f0f0f0',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <>
          <h1 className={css.h1}>Phonebook</h1>
          <Form onSubmit={this.onFormSubmitHandler}></Form>

          <Filter value={this.state.filter} onChange={this.onChangeFilter} />

          <ContactList contacts={this.filterList()} onDelete={this.onDelete} />
        </>
      </div>
    );
  }
}
