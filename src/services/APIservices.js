import axios from 'axios';

const contactsAPI = axios.create({
  baseURL: 'https://652be498d0d1df5273eeddde.mockapi.io/',
});

export const getContactsService = async () => {
  const { data } = await contactsAPI.get('contacts');

  return data;
};

export const deleteContactsService = async id => {
  const { data } = await contactsAPI.delete(`contacts/${id}`);
  return data;
};

export const createContactsService = async contact => {
  const { data } = await contactsAPI.post('contacts', contact);
  return data;
};
