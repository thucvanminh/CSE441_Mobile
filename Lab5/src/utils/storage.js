import AsyncStorage from '@react-native-async-storage/async-storage';

class StorageService {
  // Lưu token
  static async saveToken(token) {
    try {
      await AsyncStorage.setItem('userToken', token);
      return true;
    } catch (error) {
      console.error('Error saving token:', error);
      return false;
    }
  }

  // Lấy token
  static async getToken() {
    try {
      const token = await AsyncStorage.getItem('userToken');
      return token;
    } catch (error) {
      console.error('Error getting token:', error);
      return null;
    }
  }

  // Xóa token (logout)
  static async removeToken() {
    try {
      await AsyncStorage.removeItem('userToken');
      return true;
    } catch (error) {
      console.error('Error removing token:', error);
      return false;
    }
  }

  // Lưu user info
  static async saveUserInfo(userInfo) {
    try {
      await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      return true;
    } catch (error) {
      console.error('Error saving user info:', error);
      return false;
    }
  }

  // Lấy user info
  static async getUserInfo() {
    try {
      const userInfo = await AsyncStorage.getItem('userInfo');
      return userInfo ? JSON.parse(userInfo) : null;
    } catch (error) {
      console.error('Error getting user info:', error);
      return null;
    }
  }

  // Xóa user info
  static async removeUserInfo() {
    try {
      await AsyncStorage.removeItem('userInfo');
      return true;
    } catch (error) {
      console.error('Error removing user info:', error);
      return false;
    }
  }

  // Clear all data
  static async clearAll() {
    try {
      await AsyncStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing storage:', error);
      return false;
    }
  }
}

export default StorageService;
