import mongoose from 'mongoose';
import Configuration from 'src/configs/Configuration';
import IContext from 'src/infra/interfaces/IContext';

export default class MongodbContext implements IContext {
  config: Configuration;

  constructor(config: Configuration) {
    this.config = config;
  }

  async connect(): Promise<boolean> {
    try {
      await mongoose.connect(this.config.mongodbUri, {
        dbName: this.config.mongodbDatabaseName,
        user: this.config.mongodbAdminUser,
        pass: this.config.mongodbAdminPassword,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      });

      mongoose.connection.on('connected', () => {
        console.log('Mongoose connected to db');
      });

      mongoose.connection.on('error', (error) => {
        console.log('Error on mongoose connection: ', error.message);
      });

      mongoose.connection.on('disconnected', () => {
        console.log('Mongoose disconnected.');
      });

      return true;
    } catch (error) {
      console.log(`Error on connect to mongodb: ${error.message}`);
      return false;
    }
  }

  async close(): Promise<boolean> {
    //TODO: ADD LOGGER
    try {
      await mongoose.connection.close();
      return true;
    } catch {
      //TODO: add logger
      return false;
    }
  }
}
