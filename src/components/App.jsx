import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import { useState } from "react";
import { useEffect } from "react";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("contact");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return initialContacts;
  });
  const [filter, setFilter] = useState("");
  useEffect(() => {
    window.localStorage.setItem("contact", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };
  const onChange = (e) => {
    setFilter(e.target.value);
  };
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onChange={onChange} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
};
export default App;
