/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {ICard, StackParamList} from '../interface/interface';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<StackParamList, 'Contacts'>;

export default function Card({user}: {user: ICard}) {
  const navigation = useNavigation<NavigationProp>();

  console.log(user);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Details', {user});
      }}>
      <View style={styles.container}>
        <Image source={{uri: user.avatar}} style={styles.image} />
        <View style={{flex: 1}}>
          <Text style={styles.textName}>{user.name}</Text>
          <Text style={styles.phone}>{user.phone}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10,
  },
  textName: {fontSize: 16, fontWeight: 'bold'},
  phone: {fontSize: 14, color: '#666'},
});
