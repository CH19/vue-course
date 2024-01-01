export type creationAt = string;
export type uptatedAt = string;
export type aviableSizes = 'sm' | 'md' | 'lg' | 'xl' | 'xxl'; 
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
export interface Directive{
    name: string,
    instructions: Object
}
