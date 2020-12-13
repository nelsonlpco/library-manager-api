import { model, Schema } from 'mongoose';

import IGenreSchema from './interfaces/IGenereSchema';

const genreModel = new Schema({
  description: {
    type: String,
    required: true,
    unique: true,
  },
});

export default model<IGenreSchema>('Genre', genreModel);
