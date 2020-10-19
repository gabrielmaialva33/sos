import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Professional from '../models/Professional';
import parseStringAsArray from '../utils/parseStringAsArray';

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

  // -> update
  async update(req: Request, res: Response): Promise<Response> {
    const professinalRepository = getRepository(Professional);

    const professinal_id = req.headers.authorization;
    const { name, email, whatsapp, knowledges, bio } = req.body;

    const professional = await professinalRepository.findOne({
      where: { id: professinal_id },
    });
    if (!professional) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    professional.name = name || professional.name;
    professional.email = email || professional.email;
    professional.whatsapp = whatsapp || professional.whatsapp;
    professional.knowledges = knowledges
      ? parseStringAsArray(knowledges)
      : professional.knowledges;
    professional.bio = bio || professional.bio;

    await professinalRepository.save(professional);

    return res.json(professional);
  },
};
