import { Document } from 'mongoose';
import IBook from 'src/domain/entities/IBook';

export default interface IBookSchema extends Document, IBook {}
