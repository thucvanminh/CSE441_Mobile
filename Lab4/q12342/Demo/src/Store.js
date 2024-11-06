import { createSlice, configureStore } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export const mapContact = (contact) => {
	const { name, picture, phone, cell, email } = contact;
	return {
		id: v4(),
		name: name.first + ' ' + name.last,
		avatar: picture.large,
		phone,
		cell,
		email,
		favorite: Math.random() < 0.1 ? true : false,
	};
};

const contactsSlide = createSlice({
	name: 'contact',
	initalState: {
		contact: [],
	},
	reducer: {
		fetchContactsSuccess: (state, action) => {
			state.contacts = action.payload;
		},
	},
});

export const { fetchContactsSuccess } = contactsSlide.actions;
const store = configureStore({
	reducer: contactsSlide.reducer,
});

export default store;