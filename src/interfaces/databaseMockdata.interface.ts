export interface DatabaseMockdata {
  sections: SectionMockdata[];
}

export interface SectionMockdata {
  name: string;
  categories: CategoryMockdata[];
}

interface CategoryMockdata {
  name: string;
  products: ProductMockdata[];
}

interface ProductMockdata {
  name: string;
  image: string;
  price: number;
  units: number;
  productionDate: string;
  expiryDate: string;
  description: string;
}