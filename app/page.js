"use client"

import { useContext, useState } from "react";
import Image from "next/image";
import Head from "./components/dashboard/Head";
import { category_list } from "@/public/category/category";
import MenuCard from "./components/dashboard/MenuCard";
import Footer from "./components/dashboard/Footer";
import Sidemenu from "./components/Sidemenu";
import { MenuContext } from "./components/dashboard/MenuContextProvider";

// =========================== Import Image ===========================
import poster from "../public/poster/poster.png";
import CreateRecipe from "./components/dashboard/CreateRecipe";




export default function Home() {

  const {showFooter} = useContext(MenuContext)

  const [category,setCategory] = useState('All')
  const [showModal,setShowModal] = useState(false)

  return (
    <>
    <div className="flex gap-10 w-full min-h-screen">
      <Sidemenu/>
      <div className="w-full min-h-screen py-12 pr-10 pl-0 gap-8 flex flex-col items-center">
        <Head/>
        <div className="flex flex-col gap-10">

          {/* ============== Poster ==============*/}
          <div className="relative">
            <Image 
              src={poster} 
              alt="poster"
              className="rounded-2xl"/>
            <div className="absolute bottom-10 left-10">
              <h2 className="text-[32px] font-bold leading-[48px] text-darkbluecolor">Fresh &</h2>
              <h2 className="text-[32px] font-bold leading-[48px] text-darkbluecolor">tasty salads</h2>
              <p className="text-sm font-normal text-darkbluecolor mt-5">Relax please, we've got you</p>
              <p className="text-sm font-normal leading-6 text-darkbluecolor">covered every day of the week</p>
            </div>
          </div>

          {/* ============== Select Category ==============*/}
          <div className="gap-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold leading-9">
              Select Category
            </h3>
            <div className="flex justifly-start gap-6 flex-wrap ">
              {category_list.map((item, index)=> {
                return (
                  <div 
                    onClick={()=>setCategory(prev=>prev===item.category_name?"All":item.category_name)}
                    key={index} 
                    className = {`w-40 h-40 py-8 px-6 gap-4 bg-white rounded-2xl flex flex-col justify-center items-center relative cursor-pointer hover:scale-105 hover:duration-200 hover:shadow-category hover:duration-100 hover:ease-linear ${category===item.category_name?"active":""}`}>
                    <div className="w-[74px] h-[74px]">
                      <Image
                        src={item.category_img} 
                        alt={item.category_name} 
                      />
                    </div>               
                    <p className="text-lg leading-[27px] font-normal text-center text-graycolor">{item.category_name}</p>
                    <Image 
                      src={item.category_status}
                      alt="checked_block" 
                      width={21} 
                      height={21}
                      className={`absolute top-3 right-3 hidden ${category=== item.category_name?"status":""}`}/>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ============== Popular Dish ==============*/}
          <div className="gap-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold leading-9">
              Choose your ingredients to make a salad
            </h3>
          </div>
          <div className="w-full">
            <MenuCard category={category}/>
          </div>
        </div>
      </div>
      {/*========================= Footer =========================*/}
      <div>
        <Footer isVisible={showFooter} setShowModal={setShowModal}/>
      </div>
    </div>
    <CreateRecipe isVisible={showModal} setShowModal={setShowModal} />
    </>
  );
}
