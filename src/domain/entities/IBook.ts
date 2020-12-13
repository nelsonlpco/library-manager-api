import IAuthor from './IAuthor';
import IEntity from './IEntity';
import IGenre from './IGenre';
import IPublisher from './IPublisher';

export default interface IBook extends IEntity {
  title: string;
  description: string;
  isbn: string;
  publishingDate: string;
  author: IAuthor[];
  publisher?: IPublisher;
  genre: IGenre;
}
