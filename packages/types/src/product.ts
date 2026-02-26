import type { product, Category} from "@repo/product-db";

export type ProductType = product;

export type Productstype = ProductType[];

export type StripeProductType = {
    id: string;
    name: string;
    price: number;
};

export type CategoryType = Category;