import { Document, model, Schema } from 'mongoose';
import { IAuthor } from 'src/domain/interfaces/IAuthor';

interface AuthorSchema extends Document, IAuthor {}

const authorModel = new Schema<AuthorSchema>({
  name: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
});

export default model<AuthorSchema>('Author', authorModel);
