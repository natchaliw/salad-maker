"use client"

import React, { useContext } from 'react'
import Image from "next/image";
import Add_Icon from "../../../public/add_icon.svg"
import Remove_Icon from "../../../public/remove_icon.svg"
import { MenuContext } from './MenuContextProvider';

function MenuItem({id,name,img,cal}) {

    const {cartItems, addToCart, removeFromCart} = useContext(MenuContext)

  return (
    <div className="flex flex-col justify-center w-[344px] h-[363px] rounded-2xl gap-6 px-6 py-8 bg-white" >
        <div className="bg-imgcolor">
            <Image
                src={`/Ingredient/${img}`}
                alt={name}
                width={296}
                height={180} /> 
        </div>
        <div className="flex flex-col h-[107px]">
            <div className="gap-2">
                <p className="text-lg font-medium leading-[27px]">
                    {name}
                </p>
                <div className="flex items-end gap-[10px]">
                    <h3 className="text-2xl leading-9 font-bold text-textcolor">
                        {cal}
                    </h3>
                    <span className="text-[28px] leading-[36.5px] font-bold text-yellowcolor font-sarabun ">Cal</span>
                </div>
            </div>
            <div>
                {!cartItems[id]
                    ?<div className="flex justify-end items-center gap-4">
                        <Image 
                            src={Add_Icon} 
                            alt="" 
                            onClick={()=>addToCart(id)}
                            className="hover:scale-105 hover:dulation-200 hover:ease-in cursor-pointer"
                            />
                    </div>
                    :<div className="flex justify-end items-center gap-4">
                        <Image 
                            src={Remove_Icon} 
                            alt=""
                            onClick={()=>removeFromCart(id)}
                            className="cursor-pointer"
                        />
                        <p className="text-2xl font-bold leading-9 w-[14px]">        
                            {cartItems[id]}
                        </p>
                        <Image 
                            src={Add_Icon} alt=""
                            onClick={()=>addToCart(id)}
                            className="cursor-pointer"
                        />
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default MenuItem