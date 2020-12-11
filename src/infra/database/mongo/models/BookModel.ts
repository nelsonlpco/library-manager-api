import { Document, model, Schema } from 'mongoose';
import IBook from 'src/domain/interfaces/IBook';

interface IBookSchema extends Document, IBook {}

const bookModel = new Schema({
  title: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  description: {
    type: String,
  },
});

export default model<IBookSchema>('Book', bookModel);
