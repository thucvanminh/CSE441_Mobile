/* eslint-disable react-native/no-inline-styles */
import {View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import Card from '../components/Card';
import {useDispatch, useSelector} from 'react-redux';
import {fetchContactsSuccess, mapContacts} from '../Redux/Store';

export default function ContactScreen() {
  const contacts = useSelector((state: any) => state.contacts);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=50');
        const data = await response.json();
        dispatch(fetchContactsSuccess(data.results.map(mapContacts)));
      } catch (error) {
        console.error(error);
      }
    };
    fetchContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <FlatList
        data={contacts}
        renderItem={({item}) => <Card user={item} />}
        keyExtractor={item => item.id}
        style={{width: '100%'}}
        contentContainerStyle={{padding: 20}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={false}
        numColumns={1}
      />
    </View>
  );
}
