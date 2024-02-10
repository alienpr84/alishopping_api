import { ObjectId } from 'mongodb';

interface Client {
  _id: ObjectId,
  name: string;
  age: number;
  sex: string;
  email: string;
  phone: string;
  isActive: boolean;
  address: string;
}

export default Client;