import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container_default: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },

  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  number: {
    width: 80,
    height: 80,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    elevation: 1,
  },

  number0: {
    width: 170,
    height: 80,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    elevation: 1,
  },

  calculus: {
    width: 80,
    height: 80,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginHorizontal: 5,
  },

  result: {
    width: 80,
    height: 80,
    backgroundColor: '#FF9500',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginHorizontal: 5,
  },

  clear: {
    width: '100%',
    height: 80,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginTop: 10,
  },

  display: {
    fontSize: 48,
    textAlign: 'right',
    width: '100%',
    padding: 20,
    marginBottom: 20,
  },

  textCal: {
    color: '#FF9500',
    fontSize: 30,
  },

  num: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
  },
});
