import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) throw new Error('Email is invalid');
      },
    },
    isAdmin: { type: Boolean, default: false },
    password: { type: String, required: true, trim: true, minLength: 8 },
    isVerified: { type: Boolean, default: false },

    // Store hashed version of token (sha256) for security.
    verificationToken: { type: String },
    verificationTokenExpiry: { type: Date },
  },
  { timestamps: true }
);

// Hash the plain text password before saving
userSchema.pre('save', async function () {
  const user = this;

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 12);
  }
});

// Compare password helper
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);
export default User;
