const mongoose = require('mongoose');
/** creating schema */ const addressSchema = new mongoose.Schema({
  city: String,
  street: String,
});
const userSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 10,
    max: 60,
    validate: {
      validator: (v) => v % 2 == 0,
      message: (props) => ` ${props.value} is not match`,
    },
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    // uppercase : true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
  updatedAt: Date,
  bestFriend: mongoose.SchemaTypes.ObjectId,
  hobbies: [String],
  address: addressSchema,
});

/*Creating Model */

const userModel = mongoose.model('user', userSchema);

/**Exporting module */
module.exports = userModel;
