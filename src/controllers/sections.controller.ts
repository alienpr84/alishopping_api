import { Request, Response } from 'express';
import sectionsService from '../services/sections.service';
import { Section } from '../interfaces';

class SectionsController {
  getAll(_:Request, res: Response) {
    try {
      const result: Section[] = sectionsService.getAll();
      res.status(200).json(result)
    } catch (error) {
      console.log(error);
    }
  }
}

export default Object.freeze(new SectionsController());