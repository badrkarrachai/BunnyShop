"use client"
import { useState } from "react";
import OutsideAlerter from "./OutSideDetecter";
import { motion } from "framer-motion"

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
    const menuVariants = {
        open: {
          opacity: 1,
          y: 0,
        },
        closed: {
          opacity: 0,
          y: '20%',
        },
      }
    return(
        <>
        
        <OutsideAlerter setVisible={config.setVisible}>

          <motion.div animate={config.visible ? 'open' : 'closed'} initial={{ opacity: 0 }}
    variants={menuVariants} className="bg-white rounded-xl flex flex-col  w-[240px] shadow-new1 absolute ml-[-148px] mt-2 py-2 ">
                    {config.items.map((item) =>(
                        <div className="hover:bg-gray-100 flex items-center w-full text-sm p-[0.60rem] pl-4 cursor-pointer">
                        {item.display}
                        </div>
                        ))}          
            </motion.div>
        </OutsideAlerter>
        </>
    )
}
