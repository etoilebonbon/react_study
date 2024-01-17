import React from 'react'
import Nav from './Nav'

export default function SecondPage() {
  return (
    <div className="w-full h-screen" /*style={{backgroundColor:"black"}} style={{background: `url(${이미지 import 변수명})`}}*/ >
        {/* 페이지 감싸는 div */}
        <div className="flex justify-center">
            {/* 왼쪽 */}
            <div className="w-[20%]" h-screen>
                <div>
                    <p className="text-blue-500 font-bold text-[100px]">3</p>
                    <p className="text-blue-500 font-bold text-[30px]">+</p>
                </div>
                <div>
                    <p className="text-gray-400 text-[30px]">
                        Years<br/>Experience<br/>Working
                    </p>
                </div>
            </div>

            {/* 오른쪽 */}
            <div className="bg-red-500 w-[70%] flex flex-col">
                <div className="flex">
                    <div>
                        <p className="text-gray-500 font-bold text-[35px]">
                        I'm Lee HanJin<br/>an AI Engineer.
                        </p>
                    </div>
                    <div className="w-[200px] rounded-lg bg-gray-200 p-3">
                        <p className="text-gray-500 font-bold">Research Area</p>
                        <ul className="list-disc">
                            <li>ML / DL</li>
                            <li>CV (Computer-Vision)</li>
                            <li>Security for AI & AI for Security</li>
                        </ul>
                    </div>
                </div>                
                <div>
                    <p>I'm Lee Han Jin, an AI engineer with a passion for deep thinking.</p>
                    <p>I am currently a senior student in the Department of Computer Information and Communication Engineering at Yonsei University's Mirae Campus and also an Undergraduate Researcher in AISLab.</p>
                    <p>Additionally, I am currently pursuing the integrated undergraduate-graduate program in the Department of Computer Science at Yonsei University.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
