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
      <h1 className="text-xl font-semibold font-noto-thai my-2 line-clamp-1">Welcome to Remix | ยินดีตอนรับสู่ Remix</h1>
      <p className="line-clamp-2 max-w-[455px] text-center">เราเพิ่งเริ่มหัดใช้งาน Remix และโปรเจกต์แรกที่เราวางแผนจะทำคือระบบ To-Do List เพื่อฝึกฝนการพัฒนาแอปพลิเคชันด้วย Remix</p>
      <Button variant="outline" color="secondary" className="flex gap-1 hover:gap-2 items-center transition-all duration-150 ease-in-out outline-none rounded px-4 py-[0.4rem]" type="button" onClick={hdlClick}>View Todo<FontAwesomeIcon icon={faAngleRight} /></Button>
      {isLoading && (
        <div className="flex items-center justify-center mt-4">
        <svg
          className="animate-spin h-5 w-5 text-blue-500 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          ></path>
        </svg>
        <span className="text-blue-500">กำลังโหลดข้อมูล...</span>
      </div>
      )}
    </div>
  );
}
