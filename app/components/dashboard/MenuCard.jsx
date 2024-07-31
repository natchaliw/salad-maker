"use client"
import React, { useContext } from "react"
import { MenuContext } from "./MenuContextProvider";
import MenuItem from "./MenuItem"

function MenuCard({category}) {

    const {data} = useContext(MenuContext)

  return (
    <div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.map((item,index) => {
                if (category==="All" || category.toLowerCase() === item.category) {
                  return (
                    <MenuItem key={index} id={item.id} name={item.ingredient} img={item.image} cal={item.calories}/>
                )  
            }})}
        </div>      
    </div>
  )
}

export default MenuCard