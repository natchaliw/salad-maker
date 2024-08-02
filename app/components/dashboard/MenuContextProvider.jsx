"use client"

import { createContext, useEffect, useState } from "react";
import getData from "../../api/ingredient/route.js"

export const MenuContext = createContext()

const MenuContextProvider = (props) => {

  const [cartItems,setCartItems] = useState({})
  const [data, setData] = useState([])
  const [nameNewMenu, setNameNewMenu] = useState("")
  const [totalCaloriesUpdate, setTotalCaloriesUpdate] = useState(0);
  

  // ดึงข้อมูลเมนูสร้างใหม่ใน localStorage มาใช้
  const [newMenu, setNewMenu] = useState(() => {
    const savedNewMenu = localStorage.getItem("newMenu")
    if (savedNewMenu) {
      return JSON.parse(savedNewMenu)
    }
    else {
      return []
    }
  })

  // เก็บข้อมูลเมนูสร้างใหม่ใน localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("newMenu", JSON.stringify(newMenu))
    }
  }, [newMenu])


  // ดึงข้อมูล Ingredients จาก JSON File
  useEffect(() => {
    const fetchData = async () => {
        const result = await getData()
        setData(result)
    };
    fetchData()
  }, [])


  // เพิ่ม Ingredient ใส่ลงในตะกร้า
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
        setCartItems((prev)=>({...prev,[itemId]:1}))
    }
    else {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
  }


  // ลบ Ingredient ออกจากตะกร้า
  const removeFromCart = (itemId) => {
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }


  // นับจำนวน Ingredient ในตะกร้า
  const getTotalItems = () => {
    return Object.values(cartItems).reduce((total, item) => total + item, 0)
  }


  // นับจำนวน Calories รวม
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


  // สร้างเมนูใหม่ Post
  const createSalad = async (name, ingredients, calories, img) => {
    try {
        const res = await fetch('/api/newmenu', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, ingredients, calories, img })
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)
        }
        const newmenu = await res.json()
        setNewMenu(newmenu)

    } catch (error) {
        console.error("Error creating salad:", error)
    }
  }


  // ลบเมนูที่สร้าง Delete
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/newmenu/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      })

      if (res.ok) {
        // ลบข้อมูลจาก State
        setNewMenu((prevList) => prevList.filter(menu => menu.id !== id))
        localStorage.removeItem("newMenu")
      } else {
        console.error('Failed to delete salad:', res.statusText)
      }
    } catch (error) {
      console.error('Error deleting salad:', error)
    }
  }

  // แก้ไขและอัพเดตเมนู Patch
  const EditMenu = async (menuId, updateData) => {
    try {
        // ดึงข้อมูล salads จาก localStorage
        const salads = JSON.parse(localStorage.getItem("newMenu") || '[]');

        // ส่งข้อมูล salads ไปกับ request header
        const response = await fetch(`/api/newmenu/${menuId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'newMenu': JSON.stringify(salads),
            },
            body: JSON.stringify({ menuId, updateData })
        });

        if (response.ok) {
            const data = await response.json()
            console.log(data.message)

            // อัพเดตข้อมูล salads ใน localStorage
            localStorage.setItem('salads', JSON.stringify(data.salads));
        } else {
            console.error('Failed to update ingredient', response.status, await response.text())
        }
    } catch (error) {
        console.error('Error in EditMenu function:', error)
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
    newMenu,
    setNewMenu,
    handleDelete,
    EditMenu,
    totalCaloriesUpdate,
    setTotalCaloriesUpdate
  }

  if (!data || data.length === 0) {
    return <div>No data available!</div>
  }

  return (
    <MenuContext.Provider value={menucontext}>
      {props.children}
    </MenuContext.Provider>
  )
}

export default MenuContextProvider