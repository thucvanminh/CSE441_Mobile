import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from '@react-native-vector-icons/fontawesome6';

export default function TabIcon({
  onPress,
  onLongPress,
  routeName,
  isFocused,
}: {
  isFocused: boolean;
  onPress: () => void;
  onLongPress: () => void;
  routeName: string;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        backgroundColor: 'blue',
      }}>
      <Text
        style={{
          color: 'black',
          fontSize: 16,
        }}>
        {IconDisplayed[routeName as keyof typeof IconDisplayed].icon(isFocused)}
      </Text>
    </TouchableOpacity>
  );
}

const IconDisplayed = {
  Contacts: {
    icon: (isFocused: boolean) => (
      <Icon
        name="bars"
        size={30}
        iconStyle="solid"
        color={isFocused ? 'white' : 'black'}
      />
    ),
    label: 'Contacts',
  },
  Favorite: {
    icon: (isFocused: boolean) => (
      <Icon
        name="star"
        iconStyle="solid"
        size={30}
        color={isFocused ? 'white' : 'black'}
      />
    ),
    label: 'Favorite',
  },
};
