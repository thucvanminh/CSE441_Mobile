import {fetchContactsSuccess, mapContacts} from './Store';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import ContactListItem from './ContactListItem';
import {FlatList, StyleSheet, View} from 'react-native';

const keyExtractor = ({phone}) => phone;

const fetchContacts = async () => {
  const data = await fetch('https://randomuser.me/api/?results=50');
  const ContactData = await data.json();
  return ContactData.results.map(mapContacts);
};

const Contacts = ({navagation}) => {
  const {contacts} = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchContacts()
      .then(contacts => {
        dispatch(fetchContactsSuccess(contacts));
      })
      .catch(e => {
        console.error('Error fetching contacts:', e);
      });
  }, [dispatch]);

  const renderContacts = ({item}) => {
    const {name, avatar, phone} = item;
    return (
      <ContactListItem name={name}>
        avatar={avatar}
        phone={phone}
        onPress=
        {() => {
          navagation.navigate('ProfileContact', {contact: item});
        }}
      </ContactListItem>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={keyExtractor}
        renderItem={renderContacts}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Contacts;
