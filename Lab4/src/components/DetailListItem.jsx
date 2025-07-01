import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Icon} from 'react-native-elements';

const DetailListItem = ({icon, title, subtitle}) => {
  return (
    <View style={styles.container}>
      {/* <MaterialCommunityIcons
        name={icon}
        size={24}
        color="#663399"
        style={styles.icon}
      /> */}
      <Icon
        name={icon}
        type="material"
        color="#663399"
        size={24}
        containerStyle={{marginRight: 16}}
      />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  icon: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: '#888',
    fontSize: 14,
  },
  subtitle: {
    color: '#000',
    fontSize: 16,
  },
});

export default DetailListItem;
