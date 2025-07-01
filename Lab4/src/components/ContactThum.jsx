import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

const ContactThum = ({name, phone, avatar, textColor, onPress}) => {
  const colorStyle = {color: textColor};
  const ImageContact = onPress ? TouchableOpacity : View;

  return (
    <View style={styles.container}>
      <ImageContact onPress={onPress}>
        <Image source={{uri: avatar}} style={styles.avatar} />
      </ImageContact>
      {name !== '' && <Text style={[styles.name, colorStyle]}>{name}</Text>}
      {phone !== '' && (
        <View style={styles.phoneSection}>
          <Icon name="phone" size={16} style={{color: textColor}} />
          <Text style={[styles.phone, colorStyle]}>{phone}</Text>
        </View>
      )}
    </View>
  );
};

ContactThum.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  phone: PropTypes.string,
  textColor: PropTypes.string,
  onPress: PropTypes.func,
};

ContactThum.defaultProps = {
  name: '',
  phone: '',
  textColor: 'white',
  onPress: null,
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    marginHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f7fa', // Light blue background
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  avatar: {
    width: 92,
    height: 92,
    borderRadius: 46,
    borderColor: '#4fc3f7', // Blue border
    borderWidth: 3,
    backgroundColor: '#e1f5fe',
  },
  name: {
    fontSize: 21,
    marginTop: 22,
    marginBottom: 3,
    fontWeight: 'bold',
    color: '#0277bd', // Dark blue text
  },
  phoneSection: {
    flexDirection: 'row',
    marginTop: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    marginLeft: 6,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#01579b', // Even darker blue
  },
});

export default ContactThum;
