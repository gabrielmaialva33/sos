import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Professional from '../models/Professional';

export default {
  // -> create
  async create(req: Request, res: Response): Promise<Response> {
    const professinalRepository = getRepository(Professional);

    const { id } = req.body;

    const professinalExist = await professinalRepository.findOne({
      where: { id: id.toUpperCase() },
    });

    if (!professinalExist) {
      return res.status(404).json({ error: 'Professional not found' });
    }

    return res.json(professinalExist);
  },
};
