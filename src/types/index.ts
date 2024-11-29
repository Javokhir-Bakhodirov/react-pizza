export interface CategoryI {
    id: number;
    name: string;
}

export interface PizzaI {
    id: number;
    name: string;
    description: string;
    price: number;
    size: number[];
    type: string[];
    category: string[];
    categoryId: number;
    popularity: number;
    imgUrl: string;
}
