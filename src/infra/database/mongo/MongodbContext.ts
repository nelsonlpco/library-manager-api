import mongoose from 'mongoose';
import ConfigurationManager from 'src/infra/configurations/ConfigurationManager';
import IContext from 'src/infra/interfaces/IContext';

export default class MongodbContext implements IContext {
  config: ConfigurationManager;

  constructor(config: ConfigurationManager) {
    this.config = config;
  }

  async connect(): Promise<boolean> {
    try {
      console.log('aqui >>', this.config.mongodbUri);

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
    try {
      await mongoose.connection.close();
      return true;
    } catch {
      return false;
    }
  }
}
