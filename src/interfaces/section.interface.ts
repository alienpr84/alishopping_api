import { ObjectId } from 'mongodb';

interface Section {
  _id?: ObjectId | string;
  name: string;
}

export default Section;
