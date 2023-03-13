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
                    <div>
                        <div className="col-4">
                            <Skeleton height={350} count={3} />
                        </div>
                        <div className="col-4">
                            <Skeleton height={350} count={3} />
                        </div>
                        <div className="col-4">
                            <Skeleton height={350} count={3} />
                        </div>
                    </div>
            }
        </>
    );
};

export default ShopProduct;