import * as mongoose from 'mongoose';
import IAuthor from 'src/domain/entities/IAuthor';

export default interface IAuthorSchema extends mongoose.Document, IAuthor {}
