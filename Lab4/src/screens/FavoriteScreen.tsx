import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {ICard, StackParamList} from '../interface/interface';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<StackParamList, 'Favorite'>;

const keyExtractor = ({phone}: any) => phone;

export default function FavoriteScreen() {
  const contacts = useSelector((state: any) => state.contacts);

  const navigation = useNavigation<NavigationProp>();

  const renderFavoriteThumbnail = ({item}: any) => {
    return (
      <TouchableOpacity
        style={styles.avatarContainer}
        onPress={() =>
          navigation && navigation.navigate
            ? navigation.navigate('Details', {user: item})
            : null
        }>
        <Image source={{uri: item.avatar}} style={styles.avatar} />
      </TouchableOpacity>
    );
  };
  const favorites = contacts.filter((contact: ICard) => contact.favorite);
  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={keyExtractor}
        numColumns={3}
        contentContainerStyle={styles.list}
        renderItem={renderFavoriteThumbnail}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f2fd', // Light blue
    paddingTop: 40,
  },
  list: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 8,
  },
  avatarContainer: {
    margin: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#eee',
  },
});
