import { Collection, Db, InsertOneWriteOpResult, MongoClient } from 'mongodb';

import IRead from './IRead';
import IWrite from './IWrite';

export default abstract class BaseRepository<T extends { _id: string }>
  implements IWrite<T>, IRead<T> {
  public readonly _collection: Collection;

  constructor(db: Db, collectionName: string) {
    this._collection = db.collection(collectionName);
  }

  async find(item: T): Promise<T[]> {
    throw new Error('Method not implemented.');
  }

  async findOne(id: string): Promise<T> {
    throw new Error('Method not implemented.');
  }

  async create(item: T): Promise<boolean> {
    const result: InsertOneWriteOpResult<T> = await this._collection.insertOne(
      item
    );

    return !!result.result.ok;
  }

  async update(id: string, item: T): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  async delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
