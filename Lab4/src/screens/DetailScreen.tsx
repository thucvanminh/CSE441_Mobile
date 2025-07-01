import {View, StyleSheet} from 'react-native';
import React from 'react';
import {IconButton} from 'react-native-paper';
import DetailListItem from '../components/DetailListItem';
import ContactThum from '../components/ContactThum';

export default function DetailScreen({route}: any) {
  const {user} = route.params;
  console.log(user.name);

  return (
    <View style={styles.container}>
      <View style={styles.avatarSection}>
        <ContactThum
          avatar={user.avatar}
          name={user.name}
          phone={user.phone}
          onPress={true}
        />
      </View>
      <View style={styles.detailsSection}>
        <DetailListItem icon="email" title="Email" subtitle={user.email} />
        <DetailListItem icon="phone" title="Work" subtitle={user.phone} />
        <DetailListItem icon="person" title="Personal" subtitle={user.cell} />
        <View style={{alignItems: 'center'}}>
          <IconButton
            icon={user.favorite === true ? 'star-check' : 'star-check-outline'}
            iconColor="#663399"
            size={20}
            onPress={() => {
              // updateFavorite();
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  detailsSection: {
    flex: 1,
    backgroundColor: 'white',
  },
});
