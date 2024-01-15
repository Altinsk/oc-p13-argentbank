/* IMPORTS */
import MockedService from "./MockedService";
import Service from "./Service";

export default class UserService extends Service {
  static baseUrl = "http://localhost:3001/api/v1/user";

  static async login(email, password) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    };

    try {
      return await this.fetchData("/login", requestOptions);
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getUserData(token) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    };

    try {
      return await this.fetchData("/profile", requestOptions);
    } catch (error) {
      throw new Error(error);
    }
  }

  static async updateUserData(token, firstName, lastName) {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ firstName, lastName })
    };

    try {
      return await this.fetchData("/profile", requestOptions);
    } catch (error) {
      throw new Error(error);
    }
  }
}
