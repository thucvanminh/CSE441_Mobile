import { StyleSheet, View, Text } from 'react-native';
import ContactThum from './ContactThum';
import { IconButton } from 'react-native-paper';

const ProfileContact = ({ route }) => {
  const { contact } = route.params;
  const { avatar, name, email, phone, cell, favorite } = contact;

  return (
    <View style={styles.container}>
      <View style={styles.avatarSection}>
        <ContactThum avatar={avatar} name={name} phone={phone} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.detailsSection}>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{email}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Work Phone:</Text>
          <Text style={styles.value}>{phone}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Personal Phone:</Text>
          <Text style={styles.value}>{cell}</Text>
        </View>
        <View style={styles.favoriteRow}>
          <Text style={styles.label}>Favorite:</Text>
          <IconButton
            icon={favorite ? "star-check" : "star-check-outline"}
            iconColor="#663399"
            size={24}
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  avatarSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    paddingVertical: 20,
  },
  name: {
    marginTop: 10,
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  detailsSection: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  label: {
    width: 120,
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    flex: 1,
    color: '#555',
  },
  favoriteRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default ProfileContact;
