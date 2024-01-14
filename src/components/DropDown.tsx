"use client"
import { useState } from "react";
import OutsideAlerter from "./OutSideDetecter";

interface dropDownObject{
    display: string;
    to:string;
}
interface DropDownProps{
    items : Array<dropDownObject>;
    setVisible:any;
    visible:any;
    
}
export default function dropDown(config : DropDownProps) {
    return(
        <>
        <OutsideAlerter setVisible={config.setVisible}>
            {config.visible && <div className="bg-white rounded-xl flex flex-col  w-[240px] shadow-lg absolute ml-[-148px] mt-2 py-2 animate-[DownToUp]">
                    {config.items.map((item) =>(
                        <div className="hover:bg-gray-100 flex items-center w-full text-sm p-2 pl-3">
                        {item.display}
                        </div>
                        ))}          
            </div>}
        </OutsideAlerter>
        </>
    )
}
