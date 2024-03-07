import { ObjectId } from 'mongodb';

interface Section {
  _id?: ObjectId;
  name: string;
}

export default Section;
