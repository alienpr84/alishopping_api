import { ObjectId } from 'mongodb';
import Category from './category.interface';

interface Section {
  _id?: ObjectId;
  name: string;
}

export default Section;
