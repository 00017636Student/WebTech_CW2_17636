const fs = require('fs');
const path = require('path');

if (!global.reviews_db) {

global.reviews_db = path.join(__dirname, '../data', 'reviews_db.json');

}

const reviews = require(global.reviews_db);


const reviewService = {

// get all reviews

get(req, res) {

return reviews;

},


// get a review by ID

getById(req, res) {

const id = req.params.id;

return reviews.find(item => item.id === id);

},


// insert a new review

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


// update an existing review

update(req, res) {

const id = req.params.id;

const index = reviews.findIndex(item => item.id === id);

if (index === -1) {

return null; // or you could throw an error

}

// update the review data

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


// delete a review

delete(req, res) {

const id = req.params.id;

const index = reviews.findIndex(item => item.id === id);

if (index === -1) {

return false; // or you could throw an error

}

reviews.splice(index, 1);

writeToFile(reviews);

return true;

}

};


// function for overwriting the json file with updated review data

let writeToFile = async (reviews) => {

await fs.writeFileSync(

global.reviews_db,

JSON.stringify(reviews, null, 4),

'utf8'

);

};


// generate a random id (similar to a simplified UUID)

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