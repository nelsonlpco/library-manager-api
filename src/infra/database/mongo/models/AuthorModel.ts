import { model, Schema } from 'mongoose';

import IAuthorSchema from './interfaces/IAuthorSchema';

export const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

export default model<IAuthorSchema>('Author', authorSchema);
