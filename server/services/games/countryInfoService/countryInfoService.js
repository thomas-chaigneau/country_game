const GamesApiService = require('../gamesApiService');

const gamesApiService = new GamesApiService();

const countryInfoService = {
    getNameByAlphaCode: (alphCode) => {
        return gamesApiService.get(`alpha/${alphCode}`)
        .then((res) => res.data.name);
    },
};

module.exports = countryInfoService;