import { Document } from 'mongoose';
import IGenre from 'src/domain/entities/IGenre';

export default interface IGenreSchema extends Document, IGenre {}
