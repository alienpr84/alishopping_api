import { Section, SectionMockdata } from '../src/interfaces';
import { ObjectId } from 'mongodb';
import data from './data.json';

class MockUtils {
  getSections(): Section[] {
    const sections: Section[] = (data as SectionMockdata[]).map(
      (section: SectionMockdata) => ({
        name: section.name,
        _id: new ObjectId(),
      })
    );
    return sections;
  }
}

export default Object.freeze(new MockUtils());
