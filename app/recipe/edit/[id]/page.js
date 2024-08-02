"use client"

import Image from "next/image"
import { useContext, useEffect, useState } from "react"
import { MenuContext } from "@/app/components/dashboard/MenuContextProvider"
import { useRouter, useParams } from "next/navigation"

export default function Edit () {
    const {data, newMenu, setNewMenu, EditMenu, setTotalCaloriesUpdate} = useContext(MenuContext)
    const [menu, setMenu] = useState([])
    const param = useParams()
    const router = useRouter()

    useEffect(() => {
        if (param.id && newMenu) {
            const foundMenu = newMenu.find(m => m.id === parseInt(param.id))
            setMenu(foundMenu)
        }
    }, [param.id, newMenu])

    // ดีบัคไว้ดูการแก้ไขของเมนู
    useEffect(() => {
        console.log('Updated Menu:', menu)
    }, [menu])


    // คำนวณแคลอรี่รวม
    const totalCalories = Object.keys(menu.ingredients || {}).reduce((acc, ingredientId) => {
        const ingredient = data.find((item) => item.id === parseInt(ingredientId))
        if (ingredient) {
            acc += ingredient.calories * menu.ingredients[ingredientId]
        }
        return acc;
            
    }, 0)

    // ปุ่ม Delete ingredient
    const handleDeleteIngredient = (ingredientId) => {
        const updatedIngredients = { ...menu.ingredients }
        delete updatedIngredients[ingredientId]

        // อัปเดตสถานะของเมนู
        setNewMenu(prevMenu => prevMenu.map(m => 
            m.id === menu.id ? { ...m, ingredients: updatedIngredients } : m
        ))
    }

    // ปุ่ม Update ข้อมูล
    const handleEdit = async () => {
        try {
            const updateData = Object.keys(menu.ingredients).map(ingredientId => ({
                ingredientId,
                quantity: menu.ingredients[ingredientId]
            }))
    
            await EditMenu(menu.id, updateData)
            router.push('/recipe')
        } catch (error) {
            console.error('Failed to update recipe', error)
        }
    }
    
    useEffect(() => {
        if (setTotalCaloriesUpdate) {
            setTotalCaloriesUpdate(prev => ({ ...prev, [menu.id]: totalCalories }));
        }
    }, [totalCalories, setTotalCaloriesUpdate, menu.id]);

    return (
        <div className="w-full min-h-full py-12 pr-10 pl-0 gap-8 flex flex-col items-center">
            <h1 className="flex justify-start text-4xl font-bold leading-[54px] text-textcolor w-full">
                Edit Recipe
            </h1>
            <div className="gap-10 bg-white flex flex-col justify-start w-full min-h-screen py-10 px-6 rounded-2xl">
                <div className="flex flex-col gap-6">
                    <h3 className="text-2xl font-bold leading-9 text-textcolor">
                        Your ingredients to make a salad Recipe
                    </h3>

                    <div className=" flex flex-col gap-4">
                    {Object.keys(menu.ingredients || {}).map((ingredientId) => {
                            const ingredient = data.find((item) => item.id === parseInt(ingredientId));
                            if (!ingredient) return null;
                        return (
                            <div key={ingredientId} className="flex justify-between items-center gap-6">
                                <div className="bg-red-300 w-[80px] h-[80px] flex justify-center gap-[10px]">
                                    <Image
                                        src={`/ingredient/${ingredient.image}`}
                                        alt={ingredient.ingredient}
                                        width={80}
                                        height={80}
                                        />
                                </div>
                                <div className="w-2/5 gap-1 flex flex-col items-start">
                                    <p className="text-lg font-semibold leading-[27px] text-textcolor">
                                        {ingredient.ingredient}
                                    </p>
                                    <div className="flex gap-4">
                                        <p className="text-sm font-normal leadind-[21px] text-graycolor">
                                        X <span>{menu.ingredients[ingredientId]}</span>
                                        </p>
                                        <button 
                                            className="text-sm font-normal leadind-[21px] text-redcolor underline"
                                            onClick={() => handleDeleteIngredient(ingredientId)}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                                <div className="flex gap-[10px] w-3/6 justify-end items-center">
                                    <p className="text-lg font-semibold leading-[27px] text-textcolor">
                                        + <span>{ingredient.calories*menu.ingredients[ingredientId]}</span>
                                    </p>
                                    <p className="text-lg font-semibold leading-[27px] text-yellowcolor">Cal</p>
                                </div>
                            </div>
                        )

                    })}
                    </div>
                </div>

                <hr className="border-t-1 border-hrcolor"></hr>

                <div className="flex justify-between">
                    <p className="text-lg font-medium leading-[27px] text-textcolor">
                        Total Calories
                    </p>
                    <p className="text-2xl font-medium leading-9 text-textcolor">
                    {totalCalories}  <span className="font-bold text-yellowcolor">Cal</span>
                    </p>
                </div>
                <button 
                    className="gap-[10px] p-4 rounded-2xl bg-yellowcolor text-lg font-bold leading-[27px] text-white"
                    onClick={handleEdit}>
                    Update Recipe
                </button>
            </div>
        </div>
    )
}