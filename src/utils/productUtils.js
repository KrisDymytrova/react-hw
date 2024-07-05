export const addProductToOrder = (products, product) => {
    const existingProduct = products.find(p => p.id === product.id);
    if (existingProduct) {
        return products.map(p =>
            p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
    } else {
        return [...products, { ...product, quantity: 1 }];
    }
};

export const removeProductFromOrder = (products, product) => {
    const existingProduct = products.find(p => p.id === product.id);
    if (existingProduct && existingProduct.quantity > 1) {
        return products.map(p =>
            p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
        );
    } else {
        return products.filter(p => p.id !== product.id);
    }
};
