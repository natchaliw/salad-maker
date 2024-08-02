"use client"

import React, { useContext }from 'react'
import { MenuContext } from './MenuContextProvider'

function footer({setShowModal}) {

    const {getTotalItems, getTotalCal} = useContext(MenuContext)

  return (
    <div className="gap-4 flex items-center py-6 px-8 bg-white w-[1200px] 2xl:w-[1575px] h-[100] 2xl:h-[144px]">
        <div className="flex justify-between items-center w-[826px] 2xl:w-[1201px] h-[100px] 2xl:h-[96px] rounded-2xl py-4 px-8 gap-6 bg-yellowcolor">
            <div className="flex gap-4 justify-center items-center">
                <div className="text-[32px] font-bold leading-[48px] text-yellowcolor bg-white py-2 px-6 gap-[10px] rounded-2xl">
                    {getTotalItems()}
                </div>
                <div className="text-[32px] font-bold leading-[48px] text-white">
                    your ingredients
                </div>
            </div>
            <div className="flex justify-center items-center gap-2">
                <div className="text-[32px] font-bold leading-[48px] text-white">
                    {getTotalCal()}
                </div>
                <span className="text-[32px] font-bold leading-[48px] text-white">
                    cal
                </span>
            </div>
        </div>
        <div
            className="bg-greencolor rounded-2xl py-4 px-8 gap-6 text-[32px] font-bold leading-[48px] text-white w-[294px] h-[96px] flex justify-center items-center cursor-pointer"
            onClick={()=>setShowModal(true)}>
            Create Recipe
        </div>
    </div>
  )
}

export default footer