import { ObjectId } from 'mongodb';

interface Product {
  _id?: ObjectId;
  name: string;
  image: string;
  price: number;
  units: number;
  productionDate: string;
  expiryDate: string;
  description: string;
  category: ObjectId;
}

export default Product;
