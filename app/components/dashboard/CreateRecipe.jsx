"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import restaurant_icon from "../../../public/restaurant_icon.png"
import close_icon from "../../../public/close_icon.png"
import { MenuContext } from './MenuContextProvider'


function CreateRecipe({isVisible, setShowModal}) {

  const {cartItems, setCartItems, nameNewMenu, setNameNewMenu, createSalad, getTotalCal} = useContext(MenuContext)

  const handleOnSubmit = (e) => {
    const totalCalories = getTotalCal(cartItems);
    e.preventDefault()
    createSalad(nameNewMenu, cartItems, totalCalories);
    setNameNewMenu('')
    setShowModal(false)
    setCartItems([])
    }
    
  if (!isVisible) return null
  return (
    <div className="fixed inset-0 bg-bgcolor w-full h-screen flex flex-col items-center gap-10">
      <div 
        className="absolute top-1/4 flex flex-col bg-white w-1/4 rounded-xl">
        <span>
          <Image
            src={close_icon}
            alt="closeIcon"
            width={11.31}
            height={11.31}
            className="absolute top-4 right-4 cursor-pointer"
            onClick={()=>setShowModal(false)}/>
        </span>
        <div className="flex flex-col items-center justify-center gap-4 py-6 px-8">
          <Image
            src={restaurant_icon}
            alt="restaurantIcon"
            width={72}
            height={72}/>
          <p className="text-xl font-bold leading-7 text-blackcolor">
            Recipe Name
          </p>
          <input
            type="text"
            value={nameNewMenu}
            placeholder="input your recipe name....."
            required
            className="bg-white border-2 border-inputcolor rounded-lg gap-1 py-3 px-2 text-sm font-normal leading-[21.15px] w-full"
            onChange={(e)=>setNameNewMenu(e.target.value)}
          />
        </div>
        <div className="flex justify-center pt-4 pb-6 px-8">
          <button 
            className="rounded-lg text-blackcolor py-4 px-3 text-base leading-6 font-bold font-notto w-1/2 "
            onClick={()=>setShowModal(false)}>Cancle
          </button>
          <button
            type="submit"
            className="bg-greencolor rounded-lg text-white py-4 px-3 text-base leading-6 font-bold font-notto w-1/2"
            onClick={handleOnSubmit}
            >Create New Recipe</button>
        </div>
      </div>
    </div>
  )
}

export default CreateRecipe