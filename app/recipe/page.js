"use client"

import Link from "next/link"
import Image from "next/image"
import Del_Icon from "../../public/del_icon.svg"
import Edit_Icon from "../../public/edit_icon.svg"
import { useContext, useState } from "react"
import { MenuContext } from "../components/dashboard/MenuContextProvider"
import DeleteMenu from "../components/dashboard/DeleteMenu"

export default function Recipe () {

    const {newMenu, totalCaloriesUpdate} = useContext(MenuContext)

    const [showDeleteMenu, setShowDeleteMenu] = useState(false)
    const [selectedItemId, setSelectedItemId] = useState(null)


    return (
        <>
        <div className=" flex gap-10 w-full h-screen">
            <div className="w-full min-h-full py-12 pr-10 pl-0 gap-8 flex flex-col items-center">
                <h1 className="flex justify-start text-4xl font-bold leading-[54px] text-textcolor w-full">Recipe</h1>
                <div className="gap-10 bg-white flex flex-col justify-start w-full min-h-screen py-10 px-6 rounded-2xl">
                    <h3 className="text-2xl font-bold leading-9 text-textcolor">
                        Your Recipe
                    </h3>

                    {/* ======================= Recipe Card =======================*/}
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {(!newMenu || newMenu.length === 0) ? (
                            <div>No Recipe!!</div>
                        ) : (
                            newMenu.map((item) => (
                                <div key={item.id} className="relative w-[344px] h-[363px] rounded-2xl bg-recipe_card bg-cover bg-center bg-repeat flex flex-col justify-center">
                                    <div className="flex flex-col items-center justify-center gap-6">
                                        <div className="bg-white w-[296px] h-[145.5px] rounded-2xl p-4 gap-4 flex flex-col justify-center">
                                            <div className="text-lg font-normal leading-[27px] text-textcolor">
                                                {item.name}
                                            </div>
                                                <div className="flex gap-[10px]">
                                                    <h2 className="text-[32px] font-bold leading-[48px] text-textcolor">
                                                        {totalCaloriesUpdate[item.id] || item.calories}
                                                    </h2>
                                                    <span className="text-[32px] font-bold leading-[48px] text-yellowcolor">
                                                        Cal
                                                    </span>
                                                </div>
                                            </div> 
                                            <div className="w-[296px] h-[145.5px] gap-[10px] flex items-end">
                                                <div 
                                                    className="w-[143px] h-[40px] bg-white rounded-[20px] flex justify-center items-center cursor-pointer"
                                                    onClick={()=> {
                                                        setSelectedItemId(item.id)
                                                        setShowDeleteMenu (true)
                                                    }}
                                                >
                                                    <div className="flex gap-[10px]">
                                                        <Image
                                                            src={Del_Icon}
                                                            alt="del-icon"
                                                            width={24}
                                                            height={24}
                                                            />
                                                        <span className="text-lg font-medium leading-[27px] text-redcolor">Delete</span>
                                                    </div>
                                                </div>
                                                <Link
                                                    href={`/recipe/edit/${item.id}`}
                                                    className="w-[143px] h-[40px] bg-white rounded-[20px] flex justify-center items-center">
                                                    <div className="flex gap-[10px]">
                                                        <Image
                                                            src={Edit_Icon}
                                                            alt="edit-icon"
                                                            width={24}
                                                            height={24}
                                                            />
                                                        <span className="text-lg font-medium leading-[27px] text-textcolor">Edit</span>
                                                    </div>
                                                </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
        {/* =================== Delete Modal =================== */}
        <DeleteMenu isVisible={showDeleteMenu} setShowDeleteMenu={setShowDeleteMenu} selectedItemId={selectedItemId}/>
        </>
    )
}