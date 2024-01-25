"use client"
import { useEffect, useState } from "react";
import OutsideAlerter from "./OutSideDetecter";
import { motion } from "framer-motion"
import Login from "./Auth/Login";
import NaveBarItems from "./NavBar/NavbarItems";
import Cookies from 'universal-cookie';

interface dropDownObject{
    display: string;
    to:string;
}
interface DropDownProps{
    items : Array<dropDownObject>;
    setVisible:any;
    visible:any;
    firstVisite:boolean;
    
}
export default function dropDown(config : DropDownProps) {
  


    const[loginActive,setLoginActive] = useState(false);
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
        {loginActive && <Login isVisible={setLoginActive}/>}
        {config.visible && <OutsideAlerter classOfIt="" setVisible={config.setVisible}>
          <motion.div animate={config.visible ? 'open' : 'closed'} initial={{ opacity: 0 }} variants={menuVariants} className="bg-white rounded-xl flex flex-col  w-[240px] shadow-new1 absolute ml-[-148px] mt-2 py-2 ">
        
                {config.items.map((item,i) =>(
                    item.display !== "split" ?(<div key={i} className={`${item.to === "/login" && config.firstVisite === false ?  "font-semibold": item.to === "/signUp" && config.firstVisite === true ? "font-semibold" : "font-normal" } hover:bg-gray-100 flex items-center w-full text-sm p-[0.60rem] pl-4 cursor-pointer`} onClick={() => {
                       if(item.to === "/login" || item.to === "/signUp"){
                        config.setVisible(false);
                        setLoginActive(true)
                       }else{
                        config.setVisible(false);
                        setLoginActive(false)
                       } 
                    }}>
                    {item.display}
                    </div>): (<div key={i} className="h-1 border-b w-full"></div>)
                ))} 
                <div className="inline-block md:hidden" onClick={()=>config.setVisible(false)}>
                <div className="h-1 border-b w-full" ></div>
                <NaveBarItems type="1" classNav=""/>
                </div>        
            </motion.div>
        </OutsideAlerter>}
        </>
    )
}
