"use client"

import { createContext, useEffect, useState } from "react";
import getData from "../../api/ingredient/route.js"

export const MenuContext = createContext()

const MenuContextProvider = (props) => {

  const [cartItems,setCartItems] = useState({});
  const [data, setData] = useState([]);
  const [nameNewMenu, setNameNewMenu] = useState('');
  const [showFooter, setShowFooter] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
        const result = await getData();
        setData(result);
    };

    fetchData();
}, []);

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
        setCartItems((prev)=>({...prev,[itemId]:1}))
        console.log(cartItems)
        if (Object.keys(cartItems).length > 0) {
          setShowFooter(true)
        }
        else {
          setShowFooter(false)
        }
    }
    else {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

  }

  const getTotalItems = () => {
    return Object.values(cartItems).reduce((total, item) => total + item, 0);
  }

  const getTotalCal = () => {
    let totalCal = 0;
    for (const item in cartItems){
      if (cartItems[item]>0) {
        let itemInfo = data.find((product)=>product.id === parseInt(item))
        console.log(itemInfo)
        if (itemInfo) {
          totalCal += itemInfo.calories * cartItems[item]
        }
      }
    }
    return totalCal
  }


    // Create a new salad
async function createSalad (name, ingredients) {
  try {
      const res = await fetch('/api/newmenu', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, ingredients })
      });
      if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
      }
      const newmenu = await res.json();
      console.log(newmenu)
      return newmenu;
  } catch (error) {
      console.error("Error creating salad:", error);
  }
}

  const menucontext ={
    data,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalItems,
    getTotalCal,
    createSalad,
    nameNewMenu,
    setNameNewMenu,
    showFooter
  }

  if (!data || data.length === 0) {
    return <div>No data available!</div>;
  }

  return (
    <MenuContext.Provider value={menucontext}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;