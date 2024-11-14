import { useLoaderData } from "@remix-run/react";
import Dashboard from "../../components/Dashboard";
import FormAddTodo from "../../components/FormAddTodo";
import TodoContainer from "../../components/TodoContainer";
import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { requireUserSession } from "../../utils/auth.server";

export const meta = () => {
  return [{ title: "TODO-LIST" }];
};

export async function loader({ request }) {
  await requireUserSession(request); // ตรวจสอบการล็อกอิน
  try {
    const apiUrl = "https://snru-react-tdl-demo.onrender.com/todos/";
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return {};
  }
}

export default function Index() {
  const data = useLoaderData();
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [action, setAction] = useState(""); // all = "", complete = true, incomplete = false

  const filteredTodos = data
    .filter((todo) =>
      todo.todo
        .replace(/\s+/g, "")
        .toLowerCase()
        .includes(searchQuery.replace(/\s+/g, "").toLowerCase())
    )
    .filter((todo) => {
      if (action === "") return true;
      return action === "true" ? todo.completed : !todo.completed;
    });

  const hdlSearch = (query) => {
    setSearchQuery(query);
  };

  if (theme === null) {
    return null;
  }

  return (
    <div className="max-w-[90rem] mx-auto text-black dark:text-white relative">
      <div className="fixed bottom-20 right-[1rem] sm:right-[2rem] md:right-[10rem] lg:right-[16rem] xl:right-[24.9rem] z-10">
        <Button className="z-10 rounded-full py-[0.9rem] text-xl" onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>
      <div className="max-w-[45rem] mx-auto flex flex-col gap-2 inset-0 justify-center mt-10 p-4">
        <Dashboard onSearch={hdlSearch} setAction={setAction} action={action} />
        <FormAddTodo isOpen={isOpen} setIsOpen={setIsOpen} />
        <TodoContainer todos={filteredTodos} />
      </div>
    </div>
  );
}
