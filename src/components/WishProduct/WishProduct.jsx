import React, { useContext } from 'react';
import './wishproduct.css';
import { StrogeData } from '../context/Context';


const wishProduct = () => {
    const { wishCart, } = useContext(StrogeData)
    const [wishItem, setWishItem] = wishCart
    return (
        <>
            <div className="wishContainer">
                <h2 className="title">My wishlist on Shopping Cart</h2>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Image</th>
                            <th>Unit Price</th>
                            <th>Stock Status</th>
                            <th>Add to Cart</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            wishItem ? wishItem.map((elem) => {
                                console.log(elem);
                                return (
                                    <>
                                        <tr>
                                            <td>{elem?.title.substring(0, 12)}</td>
                                            <td><img src={elem?.image} alt="" /></td>
                                            <td>${elem?.price}</td>
                                            <td>in a stock</td>
                                            <td><span>add to cart</span></td>
                                            <td><i class="fa-solid fa-trash-can"></i></td>
                                        </tr>
                                    </>
                                )
                            })
                                :
                                'WishItem Not Found'
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default wishProduct;