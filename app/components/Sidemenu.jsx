import React from 'react'
import Image from 'next/image';
import { Disclosure, DisclosureButton } from '@headlessui/react';
import { GiHamburgerMenu } from "react-icons/gi";
import RestaurantLocation from '../../public/restaurantlocation.svg'
import Recipe from '../../public/recipe.svg'

function Sidemenu() {
  return (
    <div>
      <Disclosure as='nav'>
        {/* ============== Toggle Button ==============*/}
        <DisclosureButton className='absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:rind-white group hover:bg-gray-900'>
          <GiHamburgerMenu className='block md:hidden h-6 w-6' aria-hidden='true'/>
        </DisclosureButton>


        {/* ============== Side Menu ==============*/}
        <div className='relative px-11 py-14 gap-59 bg-white w-[345px] h-screen fixed top-0 -left-96  lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200 flex flex-col items-center justify-start'>

          {/* ============== Logo  ==============*/}
          <h1 className='text-logocolor text-3xl leading-[45px] font-bold'>
            SALADMAKER
            <span className='text-yellowcolor'>
              .
            </span>
          </h1>

          {/* ============== List menu ==============*/}
          <div className='flex flex-col items-center w-[252px] gap-4'>
            {/* ============== Dashboard ==============*/}
            <div className='px-6 py-4 w-[252px] h-16 gap-6 bg-yellowcolor text-white text-lg font-normal leading-[27px] text-center rounded-2xl shadow-box flex items-center justify-start'>
              <div className='w-10 h-10 flex items-center justify-center'>
                <Image src={RestaurantLocation} alt='restaurant location'/>
              </div>
                <h1>Salad maker</h1>
            </div>
            {/* ============== Food Order ==============*/}
            <div className='px-6 py-4 w-[252px] h-16 gap-6 bg-yellowcolor text-white text-lg font-normal leading-[27px] text-center rounded-2xl shadow-box flex items-center justify-start'>
              <div className='w-10 h-10 flex items-center justify-center'>
                <Image src={Recipe} alt='recipe'/>
              </div>
              <h1>Recipe</h1>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  )
}

export default Sidemenu