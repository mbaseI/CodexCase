export interface Book {
  author?: string;
  description?: string;
  price?: string;
  image?: string;
  bookName?: string;
  id?: string;
  isBestSeller?: boolean;
  isOnSale?: boolean;
  isNewRelease?: boolean;
  count?: number;
}

export interface Section {
  value: string;
  label: string;
}

export interface Action {
  type: string;
  [key: string | number]: any;
}
