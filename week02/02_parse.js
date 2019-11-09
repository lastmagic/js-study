const data = require('./data');
const _ = require('lodash');

// Prob 1-1. Make parsed data.
const parsedData = data.map(e => {
    return {
        id: e.id,
        title: e.title,
        year: e.year,
        rating: e.rating,
        genres: e.genres,
    }
});

// Prob 2-1. Filter parsed data.
const filteredData = parsedData.filter(e => e.rating > 3.0);

// Prob 3. Extract unique genre.
const generList = [];
parsedData.forEach(e => {
    e.genres.forEach(ee => {
        if (generList.indexOf(ee) === -1) {
            generList.push(ee);
        }
    });
})

// Prob 1-2. Make parsed data by lodash.
const parsedData2 = _.map(data, e => {
    return {
        id: e.id,
        title: e.title,
        year: e.year,
        rating: e.rating,
        genres: e.genres,
    }
});

// Prob 2-2. Filter parsed data by lodash.
const filteredData2 = _.filter(parsedData2, e => e.rating > 3.0);

// Prob 3-2. Extract unique genre by lodash.
const generList2 = [];
_.forEach(parsedData2, e => {
    _.forEach(e.genres, ee => {
        if (generList2.indexOf(ee) === -1) {
            generList2.push(ee);
        }
    });
})