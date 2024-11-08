import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "@remix-run/react";
import { useState } from "react";

export const meta = () => {
  return [{ title: "Welcome | ยินดีตอนรับ" }];
};

export default function Index() {

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const hdlClick = () => {
    setIsLoading(true)
    navigate('/todo')
  }

  return (
    <div className="flex flex-col gap-2 inset-0 justify-center items-center mt-10 p-4 text-md">
      <h1 className="text-xl font-semibold my-2 line-clamp-1 font-noto-thai">Welcome to Remix | ยินดีตอนรับสู่ Remix</h1>
      <p className="line-clamp-2 max-w-[455px] text-center">เราเพิ่งเริ่มหัดใช้งาน Remix และโปรเจกต์แรกที่เราวางแผนจะทำคือระบบ To-Do List เพื่อฝึกฝนการพัฒนาแอปพลิเคชันด้วย Remix</p>
      <Button variant="outline" className="flex gap-1 hover:gap-2 items-center transition-all transform duration-150 ease-in-out outline-none rounded px-4 py-[0.4rem] text-black border-black hover:bg-black hover:text-white" type="button" onClick={hdlClick}>View Todo<FontAwesomeIcon icon={faAngleRight} /></Button>
      {isLoading && (
        <div className="flex flex-col gap-2 items-center justify-center mt-4 absolute top-0 left-4">
          <span className='border-gray-300 h-8 w-8 animate-spin rounded-full border-[5px] border-t-black'></span>
      </div>
      )}
    </div>
  );
}
