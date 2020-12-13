import { model,  Schema } from 'mongoose';

import IBookSchema from './interfaces/IBookSchema';
import { authorSchema } from './AuthorModel';

export const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  isbn: {
    type: String,
    required: true,
    unique: true,
  },
  publisherDate: {
    type: Date,
    required: true,
  },
  author: {
    type: authorSchema,
    required: true,
  },
  publisher:
});

export default model<IBookSchema>('Book', bookSchema);
