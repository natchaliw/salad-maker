import React from "react"
import Image from "next/image";
import Link from "next/link";
import RestaurantLocation from "../../public/restaurantlocation.svg"
import Recipe from "../../public/recipe.svg"


function Sidemenu() {
  return (
    <aside className="h-screen">
      {/* ============== Side Menu ==============*/}
      <div className="lg:w-[250px] xl:w-[300px] 2xl:w-[345px] h-screen gap-[59px] relative px-11 py-14 bg-white fixed top-0 left-0 flex flex-col items-center justify-start">

        {/* ============== Logo  ==============*/}
        <Link href={'/'} className="2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-darkbluecolor leading-[45px] font-bold text-textcolor cursor-default">
          SALADMAKER
          <span className="text-yellowcolor">
            .
          </span>
        </Link>

        {/* ============== List menu ==============*/}
        <div className="flex flex-col items-center gap-4">
          {/* ============== Dashboard ==============*/}
          <Link href={'/'} 
                className="md:w-[150px] lg:w-[180px] xl:w-[200px] 2xl:w-[252px] h-16 xl:text-base 2xl:text-lg font-normal leading-[27px] text-center px-3 2xl:px-6 py-4 gap-6 bg-yellowcolor text-white rounded-2xl shadow-box flex items-center justify-start hover:scale-105 hover:duration-200">
            <div className="w-10 h-10 flex items-center justify-center">
              <Image src={RestaurantLocation} alt="restaurant location"/>
            </div>
              <h1>Salad maker</h1>
          </Link>
          {/* ============== Food Order ==============*/}
          <Link href={'/recipe'} className="md:w-[150px] lg:w-[180px] xl:w-[200px] 2xl:w-[252px] h-16 xl:text-base 2xl:text-lg font-normal leading-[27px] text-center px-3 2xl:px-6 py-4 gap-6 bg-yellowcolor text-white rounded-2xl shadow-box flex items-center justify-start hover:scale-105 hover:duration-200">
            <div className="w-10 h-10 flex items-center justify-center">
              <Image src={Recipe} alt="recipe"/>
            </div>
            <h1>Recipe</h1>
          </Link>
        </div>
      </div>
    </aside>
  )
}

export default Sidemenu