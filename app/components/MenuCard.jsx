import React from 'react'
import Image from "next/image";
import Add_Icon from "../../public/add_icon.svg"

function MenuCard({key, img, name, cal}) {
  return (
    <div>
        <div>
            <div
                key={key}
                className="flex flex-col justify-center w-[344px] h-[363px] rounded-2xl gap-6 px-6 py-8 bg-white" >
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
                <div className="flex justify-end">
                    <Image
                    src={Add_Icon}
                    alt="addIcon"
                    width={40}
                    height={40} />
                </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default MenuCard