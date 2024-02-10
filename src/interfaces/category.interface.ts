import { ObjectId } from 'mongodb';

interface Category {
  _id: ObjectId;
  name: string;
  section: ObjectId;
}

export default Category;