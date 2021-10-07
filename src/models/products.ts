export interface Product {
    id: number,
    subcategory: {
        category: number,
        name: string
    },
    "prod_set": string,
    "name": string,
    "vendor_code": string,
    "color": string,
    "fabric": string,
    "price": number,
    "discount": number,
    "sale": boolean,
    "hit": boolean,
    "date_added": string,
    "image": string,
    "image2"?: string,
    "image3"?: string,
    "image4"?: string,
    "image5"?: string,
    "image6"?: string,
    description: string
}

