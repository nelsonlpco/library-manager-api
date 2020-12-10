import { Document, model, Schema } from 'mongoose';

export interface AuthorModel {
  name: string;
  description: string;
}

interface AuthorSchema extends Document, AuthorModel {}

const authorModel = new Schema<AuthorSchema>({
  name: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default model<AuthorSchema>('Author', authorModel);
