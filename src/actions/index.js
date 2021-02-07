import * as db from '../data'
import firebase from '../firebaseConfig';

import { LOAD_CONTACTS, REMOVE_CONTACT, ADD_CONTACT, SEARCH_CONTACT } from './actionTypes'

export const loadContacts = () => async dispatch => {
  firebase.database().ref('contacts/').on("value", snapshot => {
    const contacts = snapshot.val();

    dispatch({
      type: LOAD_CONTACTS,
      payload: contacts && Object.keys(contacts) ? Object.keys(contacts).map(key => contacts[key]) : []
    });
  });
};

export const removeContact = (id) => async dispatch => {
  db.removeContact(id);

  firebase.database().ref('contacts/').on("value", snapshot => {
    const contacts = snapshot.val();

    dispatch({
      type: REMOVE_CONTACT,
      payload: contacts && Object.keys(contacts) ? Object.keys(contacts).map(key => contacts[key]) : []
    });
  });
}

export const addContact = (contact) => {
  db.addContact(contact)

  return {
    type: ADD_CONTACT,
    payload: contact,
  }
}

export const searchContact = (value) => {
  return {
    type: SEARCH_CONTACT,
    payload: value,
  }
}
