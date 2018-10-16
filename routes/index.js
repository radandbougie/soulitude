var express = require('express');
var router = express.Router();
// 1
const Review = require('../models/review');

router.get('/', (req, res) => {
  // 1
  Review.find({}, (err, reviews) => {
    if (err) {
      console.log(err);
    }

    res.render('reviews/index', {
      reviews: reviews
    });
  });
});
/* GET home page. */


// create new route below
router.get('/', (req, res) => {
  res.render('reviews/index', {
    reviews: reviews
  });
});

router.get('/reviews/new', (req, res) => {
  res.render('reviews/new');
});

// 1
router.get('/reviews/:id', (req, res) => {
  // 2
  Review.findById(req.params.id, (err, review) => {
    if (err) {
      console.log(err);
    }

    // 3
    res.render('reviews/show', {
      review: review
    });
  });
});

router.post('/reviews', (req, res) => {
  const review = new Review(req.body);

  review.save(function(err, review) {
    if (err) {
      console.log(err);
    }

    // 1
    return res.redirect('/reviews/' + review.id);
  });
});

module.exports = router;
