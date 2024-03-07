import { Section } from '../interfaces';
import databaseMockdata from '../../mock/mock-utils';

class SectionsService {
  getAll(): Section[] {
    try {
      return databaseMockdata.getSections();
    } catch (error) {
      throw error;
    }
  }
}

export default Object.freeze(new SectionsService());