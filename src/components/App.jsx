import React, { useState } from 'react';
import ContactForm from './ContactForm';
import { ContactList } from './ContactList';
import Filter from './Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleAddContact = newContact => {
    if (contacts.some(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in the contact list.`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const handleDeleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
