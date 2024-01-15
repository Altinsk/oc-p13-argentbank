export default class Service {
    static baseUrl = '';

    static async fetchData(path, options) {
        const response = await fetch(`${this.baseUrl}${path}`, options);
        const data = await response.json();
        return data;
    }
}
