const GamesApiService = require('../gamesApiService');

const gamesApiService = new GamesApiService();

const countryInfoService = require('../countryInfoService/countryInfoService');

const getBordersByName = (bordersByAlphaCode) => bordersByAlphaCode.map(boder => countryInfoService.getNameByAlphaCode(boder))

const getAnswer = {
    population: (country, userPost) => {
        return gamesApiService.get(`name/${country}`)
        .then((res) => {
            const [countryInfo] = res.data;
            const userAnswer = parseInt(userPost);
            const goodAnswer = countryInfo.population;

            const diffInPercent = Math.round(Math.abs(userAnswer - goodAnswer) / goodAnswer * 100);
            const isGoodAnswer = Boolean(diffInPercent < 20);
            const points = (diffInPercent < 20) ? (200 - diffInPercent) : ((diffInPercent > 80) ? -100 : -diffInPercent)

            return {isGoodAnswer, goodAnswer, country, points}
        })
    },
    borders: (country, userAnswer) => {
        return gamesApiService.get(`name/${country}`)
        .then((res) => {
            const [countryInfo] = res.data;
            const goodAnswer = countryInfo.borders;
            const findedBorders = Object.values(userAnswer).filter(userBorder => goodAnswer.indexOf(userBorder) !== -1)
            const isGoodAnswer = findedBorders.length > 0;
            countryInfoService.getNameByAlphaCode('NOR')
            const points = findedBorders.length * 150 - ((goodAnswer.length - findedBorders.length) * 30);
            return Promise.all(getBordersByName(goodAnswer))
            .then(res => ({isGoodAnswer, goodAnswer: res, country, points}))
        })
    }
};

module.exports = getAnswer;