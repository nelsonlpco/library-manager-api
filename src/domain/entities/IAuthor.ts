import IBook from './IBook';
import IEntity from './IEntity';

export default interface IAuthor extends IEntity {
  name: string;
  cpf: string;
  age: string;
  books?: IBook[];
}
