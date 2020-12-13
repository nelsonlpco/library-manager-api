import IBook from './IBook';
import IEntity from './IEntity';

export default interface IPublisher extends IEntity {
  name: string;
  cpnj: string;
  books?: IBook[];
}
