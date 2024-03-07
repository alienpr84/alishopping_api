import { SectionsService } from '../../../src/services';

describe('services/SectionsService', () => {
  describe('getAll', () => {
    const sections = SectionsService.getAll();

    it('Should return a Sections[]', () => {
      expect(sections).toBeDefined();
      expect(Array.isArray(sections)).toBe(true);
    });
  });
});
