import { IAuthor } from './IAuthor';
import IGenre from './IGenre';
import IPublisher from './IPublisher';

export default interface IBook {
  title: string;
  description: string;
  author: IAuthor;
  publisher: IPublisher;
  genre: IGenre;
  isbn: string;
}
