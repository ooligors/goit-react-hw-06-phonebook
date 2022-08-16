
import { ContactList } from './ContactList/ContactList';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState,useEffect, } from 'react';

export const App=()=> {
  const [contacts, setContacts] = useState([{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]);
  const [filter, setFilter] = useState('')


  useEffect(() => { 
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }

  }, []);
  

  const onFormSubmitHandler = contact => {
   console.log("я функція onFormSubmitHandler");
    if (contacts.some(item => item.name === contact.name)) {
     
      Notify.warning(`${contact.name} is already in the contacts list`);
      return;
   }
    setContacts(prevState => [...prevState, contact]);
 
  };

  const onChangeFilter = event => {
    console.log("я функція onChangeFilter");
    setFilter(event.target.value);
   
  };

  const filterList = () => {
   console.log("я функція filterList");
    const normilizedFilter = filter.toLowerCase();
    const filterList = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
    return filterList;

 
  };

  const onDelete = id => {
    console.log("я функція onDelete");
    setContacts(contacts.filter(contact => contact.id !== id));
    
  };


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
          <Form onSubmit={onFormSubmitHandler}></Form>

          <Filter value={filter} onChange={onChangeFilter} />

          <ContactList contacts={filterList()} onDelete={onDelete} />
        </>
      </div>
    );
  
}
