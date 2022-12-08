const getProductModule = async () => {
    const dataCore = process.env.DATACORE;
    if(dataCore == 'MEMORY'){
        const ModuleSurce = await import('./memoryProducts.service.js');
        return moduleSurce.default;
    }else if(dataCore == 'FS'){
        const ModuleSource = await import('./fsProducts.service.js')
        return ModuleSource.default
    }
}

export const productService = async () => {
    const ProductsClass = await getProductModule();
    const productService = new ProductsClass();
    return productService.getAllProducts();
}

export default productService;