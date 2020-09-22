import {
  FILTERCONTACTS,
  ADDCONTACTREQUEST,
  ADDCONTACTSUCCESS,
  ADDCONTACTERROR,
  FECHCONTACTREQUEST,
  FECHCONTACTSUCCESS,
  FECHCONTACTERROR,
  REMOVECONTACTREQUEST,
  REMOVECONTACTSUCCESS,
  REMOVECONTACTERROR,
} from '../types/types';

const addContactRequest = item => {
  return {
    type: ADDCONTACTREQUEST,
    payload: item,
  };
};

const addContactSuccess = item => {
  return {
    type: ADDCONTACTSUCCESS,
    payload: item,
  };
};

const addContactError = item => {
  return {
    type: ADDCONTACTERROR,
    payload: item,
  };
};

const removeContactRequest = id => {
  return {
    type: REMOVECONTACTREQUEST,
    payload: id,
  };
};

const removeContactSuccess = id => {
  return {
    type: REMOVECONTACTSUCCESS,
    payload: id,
  };
};

const removeContactError = id => {
  return {
    type: REMOVECONTACTERROR,
    payload: id,
  };
};

const fetchContactsRequest = items => {
  return {
    type: FECHCONTACTREQUEST,
    payload: items,
  };
};

const fetchContactsSuccess = items => {
  return {
    type: FECHCONTACTSUCCESS,
    payload: items,
  };
};

const fetchContactsError = items => {
  return {
    type: FECHCONTACTERROR,
    payload: items,
  };
};

const filterContacts = value => {
  return {
    type: FILTERCONTACTS,
    payload: value,
  };
};

export {
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  filterContacts,
};

// // with toolkit__________________________________________________
// import { createAction } from '@reduxjs/toolkit';

// const addContactRequest = createAction('contacts/addRequest');
// const addContactSuccess = createAction('contacts/addSuccess ');
// const addContactError = createAction('contacts/addError');

// const fetchContactsRequest = createAction('contacts/fetchRequest');
// const fetchContactsSuccess = createAction('contacts/fetchSuccess ');
// const fetchContactsError = createAction('contacts/fetchError');

// const removeContactRequest = createAction('contacts/removeRequest');
// const removeContactSuccess = createAction('contacts/removeSuccess ');
// const removeContactError = createAction('contacts/removeError');

// const filterContacts = createAction('@phonebook/filterContacts');
// export {
//   filterContacts,
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   fetchContactsRequest,
//   fetchContactsSuccess,
//   fetchContactsError,
//   removeContactRequest,
//   removeContactSuccess,
//   removeContactError,
// };
