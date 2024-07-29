import Image from "next/image";
import Head from "./components/Head";
import Menu from "./components/Menu";

// =========================== Import Image ===========================
import poster from "../public/poster/poster.png"
import vetgetables from "../public/category/vetgetables.png"
import fruit from "../public/category/fruit.png"
import protein from "../public/category/protein.png"
import toppings from "../public/category/toppings.png"
import dressing from "../public/category/dressing.png"
import checked_block from "../public/category/checked-block.png"


export default function Home() {
  return (
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
            {/* ============== vetgetables ==============*/}
            <div className="w-40 h-40 py-8 px-6 gap-4 bg-white rounded-2xl flex flex-col justify-center items-center shadow-category relative">
              <Image 
                src={vetgetables} 
                alt="vetgetables" 
                width={74} 
                height={74}/>
              <p className="text-lg leading-[27px] font-normal text-center text-graycolor">Vetgetables</p>
              <Image 
                src={checked_block} 
                alt="checked_block" 
                width={21} 
                height={21}
                className="absolute top-3 right-3"/>
            </div>
            {/* ============== fruit ==============*/}
            <div className="w-40 h-40 py-8 px-6 gap-4 bg-white rounded-2xl flex flex-col justify-center items-center shadow-category relative">
              <Image 
                src={fruit} 
                alt="fruit" 
                width={74} 
                height={74}/>
              <p className="text-lg leading-[27px] font-normal text-center text-graycolor">Fruit</p>
              <Image 
                src={checked_block} 
                alt="checked_block" 
                width={21} 
                height={21}
                className="absolute top-3 right-3"/>
            </div>
            {/* ============== Toppings ==============*/}
            <div className="w-40 h-40 py-8 px-6 gap-4 bg-white rounded-2xl flex flex-col justify-center items-center shadow-category relative">
              <Image 
                src={toppings} 
                alt="toppings" 
                width={74} 
                height={74}/>
              <p className="text-lg leading-[27px] font-normal text-center text-graycolor">Toppings</p>
              <Image 
                src={checked_block} 
                alt="checked_block" 
                width={21} 
                height={21}
                className="absolute top-3 right-3"/>
            </div>
            {/* ============== Protein ==============*/}
            <div className="w-40 h-40 py-8 px-6 gap-4 bg-white npm run devrounded-2xl flex flex-col justify-center items-center shadow-category relative">
              <Image 
                src={protein} 
                alt="protein" 
                width={74} 
                height={74}/>
              <p className="text-lg leading-[27px] font-normal text-center text-graycolor">Protein</p>
              <Image 
                src={checked_block} 
                alt="checked_block" 
                width={21} 
                height={21}
                className="absolute top-3 right-3"/>
            </div>
            {/* ============== Dressing ==============*/}
            <div className="w-40 h-40 py-8 px-6 gap-4 bg-white rounded-2xl flex flex-col justify-center items-center shadow-category relative">
              <Image 
                src={dressing} 
                alt="dressing" 
                width={74} 
                height={74}/>
              <p className="text-lg leading-[27px] font-normal text-center text-graycolor">Dressing</p>
              <Image 
                src={checked_block} 
                alt="checked_block" 
                width={21} 
                height={21}
                className="absolute top-3 right-3"/>
            </div>
          </div>
        </div>

        {/* ============== Popular Dish ==============*/}
        <div className="gap-6 flex flex-col justify-center">
          <h3 className="text-2xl font-bold leading-9">
            Choose your ingredients to make a salad
          </h3>
        </div>
        <div className="w-full">
          <Menu/>
        </div>
      </div>
    </div>
    
  );
}
