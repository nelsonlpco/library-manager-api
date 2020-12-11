import express, { NextFunction, Request, Response } from 'express';

const router = express.Router();

router.get(
  '/author',
  async (req: Request, resp: Response, next: NextFunction) => {
    resp.send('autores');

    return next();
  }
);

export default router;
