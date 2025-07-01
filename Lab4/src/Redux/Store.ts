import {createSlice, configureStore, PayloadAction} from '@reduxjs/toolkit';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
const id = uuidv4();
import {ICard} from '../interface/interface';

interface ContactsState {
  contacts: ICard[];
}

const initialState: ContactsState = {
  contacts: [],
};

export const mapContacts = (contact: {
  name: any;
  picture: any;
  phone: any;
  cell: any;
  email: any;
}) => {
  const {name, picture, phone, cell, email} = contact;
  return {
    id: uuidv4(),
    name: name.first + ' ' + name.last,
    avatar: picture.large,
    phone,
    cell,
    email,
    favorite: Math.random() < 0.1,
  };
};

const contactsSlice = createSlice({
  name: 'contacts', // Change 'counter' to 'contacts' for the slice name
  initialState,
  reducers: {
    fetchContactsSuccess: (state: any, action: PayloadAction<ICard>) => {
      state.contacts = action.payload;
    },
  },
});

export const {fetchContactsSuccess} = contactsSlice.actions;

const store = configureStore({
  reducer: contactsSlice.reducer,
});

export default store;
