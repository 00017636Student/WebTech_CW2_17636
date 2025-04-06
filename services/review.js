const fs = require('fs');
const path = require('path');

if (!global.reviews_db) {
global.reviews_db = path.join(__dirname, '../data', 'reviews_db.json');
}
const reviews = require(global.reviews_db); 

const reviewService = {

// Get all reviews
get(req, res) {
return reviews;
},


// Get exact review's data based on ID

getById(req, res) {
const id = req.params.id;
return reviews.find(item => item.id === id);
},


// Insert a new review

insert(req, res) {
let new_id = genRandId(4);
const body = req.body;

const review = {
title: body.title,
author: body.author,
genre: body.genre,
rating: body.rating,
fullReview: body.fullReview
};

reviews.push({
id: new_id,
review: review
});

writeToFile(reviews);

return {
id: new_id,
review: review
};
},


//Updates data of exact review based on ID and if there was no review returns null

update(req, res) {
const id = req.params.id;
const index = reviews.findIndex(item => item.id === id);

if (index === -1) {
return null;
}

reviews[index].review = {
title: req.body.title,
author: req.body.author,
genre: req.body.genre,
rating: req.body.rating,
fullReview: req.body.fullReview
};

writeToFile(reviews);
return reviews[index];
},


// This code deletes exact review based on ID and if there was no review returns null

delete(req, res) {
const id = req.params.id;
const index = reviews.findIndex(item => item.id === id);

if (index === -1) {
return false;
}

reviews.splice(index, 1);
writeToFile(reviews);
return true;
}
};


//This function converts reviews objects to JSON string and saves it in database

let writeToFile = async (reviews) => {
await fs.writeFileSync(
global.reviews_db,
JSON.stringify(reviews, null, 4),
'utf8'
);
};


// This part creates unique random ID 

let genRandId = (count) => {

let result = '';
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters.length;

for (let i = 0; i < count; i++) {
result += characters.charAt(Math.floor(Math.random() * charactersLength));
}
return result;
};

module.exports = reviewService;