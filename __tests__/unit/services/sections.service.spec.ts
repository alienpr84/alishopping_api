import { Section } from '../../../src/interfaces';
import { SectionsService } from '../../../src/services';
import data from '../../../mock/data.json';
import { DatabaseMockdata as IDatabaseMockdata } from '../../../src/interfaces/databaseMockdata.interface';


describe('services/SectionsService', () => {
  it('SectionsService must be frozen', () => {
    expect(Object.isFrozen(SectionsService)).toBe(true);
  });

  const sections: Section[] = SectionsService.getAll();

  describe('getSections', () => {
    const sections: Section[] = SectionsService.getAll();
    it(' Should return a Sections[]', () => {
      expect(sections).toBeDefined();
      expect(Array.isArray(sections)).toBe(true);
      sections.forEach((section: Section) => {
        expect(section).toEqual(
          expect.objectContaining({
            name: expect.any(String),
            _id: expect.any(Object),
          })
        );
        expect(Object.keys(section).length).toBe(2);
      });
    });

    it('Should return the same length of sections that original data', () => {
      expect(sections.length).toBe((data as unknown as IDatabaseMockdata[]).length);
    })
  })

  

  
})