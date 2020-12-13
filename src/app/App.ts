import cors from 'cors';
import express, { Express } from 'express';
import morgan from 'morgan';
import ConfigurationManager from 'src/infra/configurations/ConfigurationManager';
import MongodbContext from 'src/infra/database/mongo/MongodbContext';
import IContext from 'src/infra/interfaces/IContext';

import RouterManager from './RouterManager';

export default class App {
  config: ConfigurationManager;
  app: Express;
  readonly _routerManager: RouterManager;
  readonly _dbContext: IContext;

  constructor(config: ConfigurationManager) {
    this.config = config;
    this.app = express();
    this._routerManager = new RouterManager();
    this._dbContext = new MongodbContext(this.config);
  }

  async create(): Promise<void> {
    await this._dbContext.connect();

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(morgan('tiny'));
    this.app.use(cors({ credentials: true }));
    this.app.use('/api', this._routerManager.router);
  }

  async start(): Promise<string> {
    await this.create();

    return new Promise<string>((resolve) => {
      this.app.listen(this.config.serverPort, () => {
        resolve(`🚀 server is running on ${this.config.serverPort}`);
      });
    });
  }
}
