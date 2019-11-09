const data = require('./data');


// Prob 1. Make parsed data.
const parsedData = data.map(e => {
    return {
        id: e.id,
        title: e.title,
        year: e.year,
        rating: e.rating,
        genres: e.genres,
    }
});

// Prob 2. Filter parsed data.
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