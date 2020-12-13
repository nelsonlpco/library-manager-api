import { model, Schema } from 'mongoose';

import IPublisherSchema from './interfaces/IPublisherSchema';

export const publisherSchema = new Schema({
  description: {
    type: String,
    required: true,
    unique: true,
  },
  cnpj: {
    type: String,
    required: true,
    unique: true,
  },
  books: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
  },
});

export default model<IPublisherSchema>('Genre', publisherSchema);
