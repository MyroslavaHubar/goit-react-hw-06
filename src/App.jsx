import { useState, useEffect } from "react";
import "./App.css";
import Section from "./components/Section/Section";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("contacts");
    return savedContacts
      ? JSON.parse(savedContacts)
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  });

  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const contactsFilter = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  function addContact(newContact) {
    setContacts([...contacts, newContact]);
  }

  function deleteContact(contactId) {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  }

  return (
    <>
      <Section>
        <h1 className="title">Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox setFilterValue={setFilterValue} />
        <ContactList contacts={contactsFilter} onDelete={deleteContact} />
      </Section>
    </>
  );
}

export default App;
