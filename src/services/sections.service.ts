import { Section } from '../interfaces';

class SectionsService {
  getAll(): Section[] {
    try {
      return [
        { name: 'Beverages', _id: 'abde' },
        { name: 'Snacks', _id: 'abde' },
        { name: 'Dairy', _id: 'abde' },
        { name: 'Meat', _id: 'abde' },
      ];
    } catch (error) {
      throw error;
    }
  }
}

export default new SectionsService();
