import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, trim: true, required: true },
    author: { type: String, trim: true, required: true },
    category: { type: String, trim: true, required: true },
    pages: { type: String },
    rating: { type: String },
    coverImageUrl: { type: String },
    fileUrl: { type: String },
  },
  { timestamps: true }
);

const Book = mongoose.model('Book', bookSchema);
export default Book;
