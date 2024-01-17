import React from 'react'
import toggle from "./images/but_toggle.png"

export default function Nav() {
  return (    
    <div className="w-full h-[75px] flex items-center justify-between" >
        {/* 왼쪽: 타이틀 */}
        <div>
            <h1 className=" text-white font-bold text-[25px] italic px-12">HANJIN.</h1>
        </div>
        {/* 오른쪽: 햄버거메뉴 */}
        <div className="px-12">
            <div className="w-[20px] h-[20px] ">
            <img src={toggle} />
            </div>
        </div>
    </div>     
  )
}
