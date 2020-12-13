import { NextFunction, Request, Response, Router } from 'express';
import AuthorDTO from 'src/domain/dtos/AuthorDTO';
import CreateAuthorDTO from 'src/domain/dtos/CrateAuthorDTO';
import AuthorService from 'src/services/AuthorService';

import IRouterBase from './IRouterBase';

export default class AuthorRouter implements IRouterBase {
  readonly _authorService: AuthorService;
  readonly path = '/author';

  constructor() {
    this._authorService = new AuthorService();
  }

  register(router: Router): void {
    router.get(
      this.path,
      async (
        req: Request,
        resp: Response<AuthorDTO[]>,
        next: NextFunction
      ): Promise<void> => {
        try {
          const authors = await this._authorService.getAll();
          resp.send(authors);

          return next();
        } catch (error) {
          next(`Erro ao selecionar autores: ${error.message}`);
        }
      }
    );

    router.get(
      `${this.path}/:id`,
      async (
        req: Request,
        resp: Response<AuthorDTO>,
        next: NextFunction
      ): Promise<void> => {
        try {
          const params = req.params;
          const author = await this._authorService.findById(params.id);
          resp.send(author);

          return next();
        } catch (error) {
          next(`Erro ao selecionar autor: ${error.message}`);
        }
      }
    );

    router.post(
      this.path,
      async (
        req: Request<CreateAuthorDTO>,
        resp: Response<AuthorDTO>,
        next: NextFunction
      ): Promise<void> => {
        try {
          const result = await this._authorService.saveAuthor(req.body);
          resp.send(result);

          return next();
        } catch (error) {
          next(error.message);
        }
      }
    );

    router.put(
      `${this.path}/:id`,
      async (
        req: Request<AuthorDTO>,
        resp: Response<AuthorDTO>,
        next: NextFunction
      ): Promise<void> => {
        try {
          const params = req.params;
          const author = await this._authorService.updateAuthor(params.id, req.body)
          resp.send(author);

          return next();
        } catch (error) {
          next(error.message);
        }
      }
    );

    router.delete(
      `${this.path}/:id`,
      async (req: Request, resp: Response, next: NextFunction): Promise<void> => {
        try {
          const params = req.params;

          await this._authorService.delete(params.id);

          resp.send();
          return next();
        }catch(error) {
          console.log(error);
          throw new Error(error.message);
        }
      }
    )
  }
}
