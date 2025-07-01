import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Image } from 'react-native';
import * as Stylesheet from 'react-native/Libraries/StyleSheet/StyleSheet';

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
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 50,
    marginTop: 0
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 24,
    borderBottomColor: "grey",
    borderBottomWidth: Stylesheet.hairlineWidth,

  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  details: {
    flex: 1,
    marginLeft: 25,
    justifyContent: 'center',
  },
});

export default ContactListItem;
