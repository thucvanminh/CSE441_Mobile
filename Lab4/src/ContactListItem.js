import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Image } from 'react-native';

const ContactListItem = ({name,avatar,phone, onPress}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor="grey"
      style = {styles.container}>
      <View style = {styles.contactInfo}>
        <Image src={{uri:avatar}} style = {styles.avatar}></Image>
      </View>
    </TouchableHighlight>
  );
}
