export type AllCategory = {
    count: number | null,
    next: null | number,
    previous: null | number,
    results: Category[],
}

interface Category {
    name: string,
    image: string
}

export interface Discount {
    image?: string;
}

export default Category;
