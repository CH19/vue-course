

export async function  getProducts(api: string, caracteristica?: string){
    console.log('Iniciada peticion de' +  caracteristica);
    const response = await fetch(api);
    const allProducts = await response.json();
    if(caracteristica){
        const products = await allProducts.map(p => p[caracteristica]);
        return products
    }
    return allProducts
}