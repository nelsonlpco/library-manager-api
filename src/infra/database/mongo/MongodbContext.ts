import mongoose from 'mongoose';

export default class MongodbContext {
  config: any;
  logger: any;

  constructor(config, logger) {
    this.config = config;
    this.logger = logger;
  }

  async connect() {
    let credentials = '';

    if (this.config.auth) {
      credentials = `${this.config.user}:${this.config.password}@`;
    }

    const connection = `mongodb://${credentials}${this.config.host}:${this.config.port}/${this.config.database}`;
    const options = this.config.ENV === 'prod' ? { autoIndex: false} : {};
    try {

    }catch( error ) {
      //TODO: add logger error
      process.exit(1);
    }

  }

  async close() {
    //TODO: ADD LOGGER

    await mongoose.connection.close().catch(erro => {
      //TODO: add logger
      process.exit(1);
    });
  }

}
