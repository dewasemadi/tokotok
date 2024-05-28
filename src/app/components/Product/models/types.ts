export interface Products {
  data?: ProductItem[];
}

export interface Images {
  data: ImageItem[];
}

export interface ProductItem {
  id: string;
  name: string | null;
}

export interface ImageItem {
  id: string[];
  image: string;
}
