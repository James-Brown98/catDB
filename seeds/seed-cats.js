
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cats').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('cats').insert({id: 1, name: 'jim', image: 'http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg', story: 'I love my other-half, Beam', age: 3, lives: 10}),
        knex('cats').insert({id: 2, name: 'fizz', image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQodQEqiu0r3eGFJ_zHaOqZ8oWtXMDn8AIOdyw4mCiVerbA571zQ', story: "I'm like mentos and coke", age: 5, lives: 9}),
        knex('cats').insert({id: 3, name: 'felix', image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMOgeaekcbJYQA6hc8Yrz-FAyplENlJrMBwf6pKeoi_I2mF85fRw', story: "I'm a bone", age: 7, lives: 7})
      ]);
    });
};
