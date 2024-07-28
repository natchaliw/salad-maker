import React from "react"
import Image from "next/image"
import SearchIcon from "../../public/search.svg"

function Head() {
  return (
    <div className="w-full flex justify-between items-center">
        {/* ============== Welcome Title ==============*/}
        <h1 className="text-4xl font-bold leading-[54px] text-textcolor w-2/3">
            Let's Create...your own salad!!!
        </h1>
        {/* ============== Seacrh Bar ==============*/}
        <div className="py-0.5 pr-8 pl-6 w-1/3 h-[60px] rounded-2xl gap-2 bg-white flex justify-start items-center">
            <div className="w-8 h-8 flex justify-center items-center">
                <Image src={SearchIcon} alt="search"/>
            </div>
            <input 
                type="text" 
                placeholder="Search ingredients to make a salad..."
                className="w-full h-[27px] text-lg font-normal leading-[27px] placeholder-graycolor focus:outline-none"
            />
        </div>
    </div>
  )
}

export default Head