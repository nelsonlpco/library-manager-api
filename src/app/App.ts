import cors from 'cors';
import express, { Express } from 'express';
import ConfigurationManager from 'src/infra/configurations/ConfigurationManager';

import router from './Router';

export default class App {
  config: ConfigurationManager;
  app: Express;

  constructor(config: ConfigurationManager) {
    this.config = config;
    this.app = express();
  }

  async create(): Promise<void> {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors({ credentials: true }));
    this.app.use('/api', router);
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
