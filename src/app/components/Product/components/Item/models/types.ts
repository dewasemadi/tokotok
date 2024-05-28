import { ProductItem } from "@/app/components/Product/models/types";

export interface Item extends ProductItem {
  image: string;
}

export interface ItemProps {
  data?: Item[];
}
