export type creationAt = string;
export type uptatedAt = string;
export interface product {
        id: number,
        title: string,
        price: number,
        description: string,
        images: string[],
        creationAt: creationAt,
        uptatedAt: uptatedAt,
        category: category
}
export interface category {
        id: number,
        name: string,
        image: string,
        creationAt: creationAt,
        uptatedAt: uptatedAt
}