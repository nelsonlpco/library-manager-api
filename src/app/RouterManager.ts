import { Router } from 'express';

import AuthorRouter from './Routes/AuthorRouter';
import IRouterBase from './Routes/IRouterBase';

export default class RouterManager {
  readonly router: Router;
  readonly routes: IRouterBase[];

  constructor() {
    this.router = Router();
    this.routes = [new AuthorRouter()];

    this.register();
  }

  register(): void {
    this.routes.forEach((route) => route.register(this.router));
  }
}
