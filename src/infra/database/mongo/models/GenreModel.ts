import { Document, model, Schema } from 'mongoose';
import IGenre from 'src/domain/interfaces/IGenre';

interface IGenereSchema extends Document, IGenre {}

const genreModel = new Schema({
  description: {
    type: String,
    required: true,
    unique: true,
  },
});

export default model<IGenereSchema>('Genere', genreModel);
