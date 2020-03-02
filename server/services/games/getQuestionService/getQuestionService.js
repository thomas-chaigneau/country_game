const GamesApiService = require('../gamesApiService');

const gamesApiService = new GamesApiService();

const questionTitles = {
    population: `Estimez la population d'un pays`,
    borders:  `Trouvez les pays limitrophes`,
};

const fields = {
    population: ``,
    borders:  `borders;alpha3Code`,
};

const hasOption = {
    population:  false,
    borders:  true,
};

const additionalFilter = {
    population:  null,
    borders:  3,
};

const getQuestionService = {
    getQuestion: (gameType) => {
        return gamesApiService.get(`?fields=name;flag;population;${fields[gameType]}`)
        .then((res) => {
            const allCountries = res.data;
            const selectedCountries = allCountries.filter(country => {
                if (additionalFilter[gameType]) {
                    return country.population > 1000000 && country[gameType].length > additionalFilter[gameType];
                }
                return country.population > 1000000
            });
            const choosenCountry = selectedCountries[Math.floor(Math.random() * selectedCountries.length)];
            let options = null;
            if (hasOption[gameType]) {
                options = selectedCountries.map(country => ({label: country.name, value: country.alpha3Code}))
            }
            const question = {
                countryName: choosenCountry.name,
                questionTitle: questionTitles[gameType],
                countryFlag: choosenCountry.flag,
                requiredAnswerIds: Array.isArray(choosenCountry[gameType]) ? choosenCountry[gameType].map((v, i) => i + 1) : null,
                options,
            };
            return question;
        });
    },
};

module.exports = getQuestionService;