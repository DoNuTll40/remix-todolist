/* eslint-disable react/prop-types */

import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card, CardBody, Textarea } from "@material-tailwind/react"
import { useState } from "react"

export default function FormAddTodo({ isOpen, setIsOpen }) {

  const [input, setInput] = useState("");

  const hdlClose = () => {
    setInput("")
    setIsOpen(false)
  }

  return (
    <Card className={`fixed inset-0 flex z-20 ${isOpen ? "backdrop-blur-sm opacity-100 animate-fadeInDown" : "opacity-0 pointer-events-none"} justify-center items-center h-screen bg-slate-400/30 dark:bg-transparent transition-all transform ease-in-out duration-200`}>
        <CardBody className="bg-white dark:bg-black w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] h-[35%] p-7 rounded-lg shadow-xl border flex justify-between flex-col gap-4 overflow-hidden -translate-y-10">
            <div className="flex justify-between px-1 select-none">
                <p></p>
                <p className="text-lg text-center font-bold font-noto-thai dark:text-white">NEW NOTE</p>
                <button className="text-lg font-semibold rotate-0 scale-100 hover:scale-110 hover:rotate-90 hover:cursor-pointer transition-all ease-in-out duration-150" onClick={hdlClose}><FontAwesomeIcon icon={faXmark} /></button>
            </div>
            <Textarea size="lg" rows={3} value={input} onChange={ (e) => setInput(e.target.value)} className="" placeholder="New Jobs" />
            <div className="flex justify-end gap-1 mt-3">
                <button className="px-6 py-1.5 rounded-full hover:bg-slate-200 text-[#2659da]" onClick={hdlClose}>ยกเลิก</button>
                <button className="px-6 py-1.5 rounded-full hover:bg-[#3257b3] bg-[#2659da] text-white border-none">ยืนยัน</button>
            </div>
        </CardBody>
    </Card>
  )
}
