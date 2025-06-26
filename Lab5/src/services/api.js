const BASE_URL = 'https://kami-backend-5rs0.onrender.com';

class ApiService {
  // Đăng nhập
  static async login(phone, password) {
    try {
      const response = await fetch(`${BASE_URL}/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, password }),
      });

      const data = await response.json();
      if (response.ok) {
        return { success: true, token: data.token };
      } else {
        return { success: false, message: data.message || 'Login failed' };
      }
    } catch (error) {
      return { success: false, message: 'Network error: ' + error.message };
    }
  }

  // Lấy tất cả dịch vụ
  static async getAllServices() {
    try {
      const response = await fetch(`${BASE_URL}/services`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      if (response.ok) {
        return { success: true, services: data };
      } else {
        return { success: false, message: 'Failed to fetch services' };
      }
    } catch (error) {
      return { success: false, message: 'Network error: ' + error.message };
    }
  }

  // Lấy chi tiết một dịch vụ
  static async getService(id) {
    try {
      const response = await fetch(`${BASE_URL}/services/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      if (response.ok) {
        return { success: true, service: data };
      } else {
        return { success: false, message: 'Failed to fetch service' };
      }
    } catch (error) {
      return { success: false, message: 'Network error: ' + error.message };
    }
  }

  // Thêm dịch vụ mới
  static async addService(name, price, token) {
    try {
      const response = await fetch(`${BASE_URL}/services`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ name, price }),
      });

      const data = await response.json();
      if (response.ok) {
        return { success: true, service: data };
      } else {
        return { success: false, message: data.message || 'Failed to add service' };
      }
    } catch (error) {
      return { success: false, message: 'Network error: ' + error.message };
    }
  }

  // Cập nhật dịch vụ
  static async updateService(id, name, price, token) {
    try {
      const response = await fetch(`${BASE_URL}/services/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ name, price }),
      });

      const data = await response.json();
      if (response.ok) {
        return { success: true, service: data };
      } else {
        return { success: false, message: data.message || 'Failed to update service' };
      }
    } catch (error) {
      return { success: false, message: 'Network error: ' + error.message };
    }
  }

  // Xóa dịch vụ
  static async deleteService(id, token) {
    try {
      const response = await fetch(`${BASE_URL}/services/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        return { success: true };
      } else {
        const data = await response.json();
        return { success: false, message: data.message || 'Failed to delete service' };
      }
    } catch (error) {
      return { success: false, message: 'Network error: ' + error.message };
    }
  }
}

export default ApiService;
