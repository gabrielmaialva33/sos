import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Professional from '../models/Professional';

export default {
  // -> show
  async show(req: Request, res: Response): Promise<Response> {
    const professinalRepository = getRepository(Professional);

    const professinal_id = req.headers.authorization;

    const professinal = await professinalRepository.findOne({
      where: { id: professinal_id },
    });

    if (!professinal) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    return res.json(professinal);
  },
};
