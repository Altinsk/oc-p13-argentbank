import MockedUsers from "../mocks/UsersData";

export default class MockedService {
  static async fetchData(id) {
    id = parseInt(id.replace("/", ""));
    return MockedUsers.find(user => user.id === id);
  }
}
