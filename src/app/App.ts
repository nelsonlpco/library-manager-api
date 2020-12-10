import cors from 'cors';
import express, { Express } from 'express';
import Configuration from 'src/configs/Configuration';

export default class App {
  config: Configuration;
  logger: any;
  app: Express;

  constructor(config: Configuration) {
    this.config = config;
    this.app = express();
  }

  async create() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors({ credentials: true }));
    // this.app.use(morgan('dev'));
  }

}
