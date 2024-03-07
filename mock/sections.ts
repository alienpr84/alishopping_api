import { Section } from '../src/interfaces';
import { ObjectId } from 'mongodb';

export const sections: Section[] = [
  { name: 'Beverages', _id: new ObjectId('65d26e1fa462b4f7f24d584b') },
  { name: 'Snacks', _id: new ObjectId('65d26e1fa462b4f7f24d584c') },
  { name: 'Dairy', _id: new ObjectId('65d26e1fa462b4f7f24d584d') },
  { name: 'Meat', _id: new ObjectId('65d26e1fa462b4f7f24d584e') },
  { name: 'Produce', _id: new ObjectId('65d26e1fa462b4f7f24d584f') },
  { name: 'Frozen Foods', _id: new ObjectId('65d26e1fa462b4f7f24d5850') },
  { name: 'Bakery', _id: new ObjectId('65d26e1fa462b4f7f24d5851') },
  { name: 'Canned Goods', _id: new ObjectId('65d26e1fa462b4f7f24d5852') },
  { name: 'Household', _id: new ObjectId('65d26e1fa462b4f7f24d5853') },
  { name: 'Personal Care', _id: new ObjectId('65d26e1fa462b4f7f24d5854') },
];
