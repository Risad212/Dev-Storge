import React, { createContext, useState } from 'react';
import Router from '../Router/Router';

export const StrogeData = createContext()

const Context = () => {
    const [cartCount, setCartCount] = useState([])
    const [wishItem, setWishItem] = useState([])
    return (
        <StrogeData.Provider value={{product: [cartCount,setCartCount], wishCart: [wishItem, setWishItem]}}>
           <Router />
        </StrogeData.Provider>
    );
};

export default Context;