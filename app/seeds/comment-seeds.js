const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'That joke was so bad it was good. Like, it went full circle and became a masterpiece.',
    user_id: 6,
    post_id: 1,
  },
  {
    comment_text: 'LOL, thats hilarious',
    user_id: 6,
    post_id: 8,
  },
  {
    comment_text: 'That joke really made me laugh out loud.',
    user_id: 3,
    post_id: 10,
  },
  {
    comment_text: 'I needed a good laugh today and your joke did the trick. Thank you!',
    user_id: 3,
    post_id: 18,
  },
  {
    comment_text: 'Ha! Youre a natural comedian',
    user_id: 7,
    post_id: 5,
  },
  {
    comment_text: 'Im still chuckling from your joke. Its so funny..',
    user_id: 1,
    post_id: 20,
  },
  {
    comment_text:  'Thats a great joke. You have a talent for humor.',
    user_id: 6,
    post_id: 7,
  },
  {
    comment_text: 'Sed vel enim sit amet nunc viverra dapibus.',
    user_id: 7,
    post_id: 4,
  },
  {
    comment_text:
      'You just made my day with that joke.',
    user_id: 6,
    post_id: 12,
  },
  {
    comment_text: 'Hahaha, I cant stop laughing!',
    user_id: 6,
    post_id: 20,
  },
  {
    comment_text:
      'Your joke is so clever and witty.',
    user_id: 3,
    post_id: 14,
  },
  {
    comment_text: 'I have to remember that joke and tell it to my friends..',
    user_id: 5,
    post_id: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
