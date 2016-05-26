const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({

  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true, select: false },

});

UserSchema.pre('save', function preSave(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  return bcrypt.hash(user.password, null, null, (err, hash) => {
    if (err) return next(err);
    user.password = hash;
    return next();
  });
});

UserSchema.methods.comparePassword = function comparePassword(password) {
  const user = this;
  return bcrypt.compareSync(password, user.password);
};

module.exports = mongoose.model('User', UserSchema);
