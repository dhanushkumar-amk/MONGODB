const mongoose = require('mongoose');const User = require('./User');
/*Connecting data base */

mongoose
  .connect('mongodb://localhost:27017/learn')
  .then(() => console.log('Connected'))
  .catch((e) => {
    console.log('Connection error');
  });

/**Creating Module  */
// const user = new User({
//   name: 'Dhanush',
//   age: 21,
// });

// user.save().then(() => {
//   console.log('user saved');
// });

/** using async function */
async function run() {
  /** create document in async function */
  try {
    // const newUser = await User.findOne({name: 'Dhanush'});
    const newUser = await User.where('age').lt('20').gt('10');
    console.log(newUser);
    //     name: 'Dhanush',
    //     age: 14,
    //     hobbies: ['Coding', 'studying'],
    //     email: 'Dhanushkumar@gmail.com',
    //     address: {
    //       street: 'North Street',
    //     },
    //   });
    //   console.log(newUser);
    // }
  } catch (e) {
    console.log(e);
  }
}
run();
