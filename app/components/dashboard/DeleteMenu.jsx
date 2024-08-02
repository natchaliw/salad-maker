"use client"
import Image from "next/image"
import React, { useContext } from "react"
import notice_icon from "../../../public/notice_icon.png"
import close_icon from "../../../public/close_icon.png"
import { MenuContext } from "./MenuContextProvider"


function DeleteMenu ({isVisible, setShowDeleteMenu, selectedItemId}) {

  const {handleDelete} = useContext(MenuContext)

    
  if (!isVisible) return null
  return (
    <div className="fixed inset-0 bg-bgcolor w-full h-screen flex flex-col items-center gap-10">
      <div 
        className="absolute top-1/4 flex flex-col bg-white w-1/4 rounded-2xl ">
        <span>
          <Image
            src={close_icon}
            alt="closeIcon"
            width={11.31}
            height={11.31}
            className="absolute top-4 right-4 cursor-pointer"
            onClick={()=>setShowDeleteMenu(false)}/>
        </span>
        <div className="flex flex-col items-center justify-center gap-4 py-6 px-8">
          <Image
            src={notice_icon}
            alt="noticeIcon"
            width={72}
            height={72}/>
          <p className="text-xl font-bold leading-7 text-blackcolor">
            Recipe Name
          </p>
        </div>
        <div className="flex justify-center pt-4 pb-6 px-8">
          <button 
            className="rounded-lg text-blackcolor py-4 px-3 text-base leading-6 font-bold font-notto w-1/2 "
            onClick={()=>setShowDeleteMenu(false)}>Cancle
          </button>
          <button
            type="submit"
            className="bg-redcolor2 rounded-lg text-white py-4 px-3 text-base leading-6 font-bold font-notto w-1/2"
            onClick={()=> {
              handleDelete(selectedItemId)
              setShowDeleteMenu(false)
            }}
            >Delete</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteMenu