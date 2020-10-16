import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Professional from '../models/Professional';

export default {
  // -> index
  async index(req: Request, res: Response): Promise<Response> {
    const professinalRepository = getRepository(Professional);

    const professionals = await professinalRepository.find();

    return res.json(professionals);
  },

  // -> show
  async show(req: Request, res: Response) {
    const professinalRepository = getRepository(Professional);

    const { id } = req.params;

    const professinal = await professinalRepository.findOne({ where: { id } });

    return res.json(professinal);
  },

  // -> create
  async create(req: Request, res: Response): Promise<Response> {
    const professinalRepository = getRepository(Professional);

    const { name, email, whatsapp, knowledges, bio } = req.body;

    const professional = professinalRepository.create({
      name,
      email,
      whatsapp,
      knowledges,
      bio,
    });

    await professinalRepository.save(professional);

    return res.status(201).json(professional);
  },
};
