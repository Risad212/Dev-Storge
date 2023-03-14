import React from 'react';
import Product from '../Product/Product';

const ShopProduct = ({ allProduct }) => {
    return (
        <>
            {
                allProduct ?
                    allProduct.map((product) => {
                        return (
                            <>
                                <Product item={product} key={product.title} />
                            </>
                        )
                    })
                    :
                    'shop not found'
            }
        </>
    );
};

export default ShopProduct;