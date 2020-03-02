const axios = require('axios');

const URL = 'https://restcountries.eu/rest/v2';

let instance = null;

class GamesApiService {
  constructor() {
    if (!instance) instance = this;
    this.gamesApiService = axios.create({
      baseURL: URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return instance;
  }

  get(fields) {
    return this.gamesApiService.get(fields);
  }
}

module.exports = GamesApiService;
