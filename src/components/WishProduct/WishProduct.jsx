import React from 'react';
import './wishproduct.css';

const WishProduct = () => {
    return (
        <>
            <div className="wishContainer">
                <h2 className="title">My wishlist on Shopping Cart</h2>
                <table class="table table-bordered">
                   <thead>
                       <tr>
                         <th>Product Name</th>
                         <th>Product Image</th>
                         <th>Unit Price</th>
                         <th>Stock Status</th>
                         <th>Add to Cart</th>
                         <th>Delete</th>
                       </tr>
                   </thead>
                   <tbody>
                      <tr>
                         <td>T-shirt Black</td>
                         <td><img src="https://demo.themefreesia.com/shoppingcart/wp-content/uploads/sites/47/2019/03/woman-female-standing-fashion-clothing-outerwear-527825-pxhere.com_-300x300.jpg" class="img-fluid" alt="" /></td>
                         <td>$54</td>
                         <td>in a stock</td>
                         <td><button>add to cart</button></td>
                         <td><i class="fa-solid fa-circle-xmark"></i></td>
                      </tr>
                   </tbody>
              </table>
            </div>
        </>
    );
};

export default WishProduct;