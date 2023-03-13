import React, { createContext, useState } from 'react';
import Router from '../Router/Router';

export const StrogeData = createContext()

const Context = () => {
    const [cartCount, setCartCount] = useState([])
    return (
        <StrogeData.Provider value={[cartCount,setCartCount]}>
           <Router />
        </StrogeData.Provider>
    );
};

export default Context;