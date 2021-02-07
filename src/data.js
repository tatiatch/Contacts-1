import firebase from './firebaseConfig';

const database = firebase.database();

export function getContacts() {
  const contacts = JSON.parse(localStorage.getItem('contacts')) || []
  return contacts
}

export function removeContact(id) {
  database.ref('contacts/' + id).remove()
}

export function addContact(contact) {
  database.ref('contacts/' + contact.id).set(contact);
  return false;
}
