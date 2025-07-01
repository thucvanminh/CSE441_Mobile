import 'react-native-get-random-values';
import {createSlice, configureStore} from '@reduxjs/toolkit';
import {v4} from 'uuid';

export const mapContacts = contacts => {
  const {name, picture, phone, cell, email} = contacts;
  return {
    id: v4(),
    name: name.first + ' ' + name.last,
    picture: picture.large,
    phone: phone,
    cell: cell,
    email: email,
    favorite: Math.random() < -0.1 ? true : false,
  };
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    fetchContactsSuccess: (state, action) => {
      state.contacts = action.payload;
    },
  },
});

export const {fetchContactsSuccess} = contactsSlice.actions;
const Store = configureStore({
  reducer: contactsSlice.reducer,
});

export default Store;
