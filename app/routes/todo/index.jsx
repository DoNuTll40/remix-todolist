
import { useLoaderData } from "@remix-run/react";
import Dashboard from "../../components/Dashboard";
import FormAddTodo from "../../components/FormAddTodo";
import TodoContainer from "../../components/TodoContainer";
import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";

export async function loader() {
    try{
        const apiUrl = 'https://snru-react-tdl-demo.onrender.com/todos/';
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    }catch(err){
        console.error(err)
        return {}
    }
}

export default function Index() {
    const data = useLoaderData();
    const { theme } = useTheme();
    const [searchQuery, setSearchQuery] = useState("");

    const filteredTodos = data.filter(todo =>
        todo.todo.replace(/\s+/g, '').toLowerCase().includes(searchQuery.replace(/\s+/g, '').toLowerCase())
    );

    const hdlSearch = (query) => {
        setSearchQuery(query);
    };

    if(theme === null){
        return null
    }

  return (
    <div className="max-w-[90rem] mx-auto text-black dark:text-white">
        <div className="max-w-[45rem] mx-auto flex flex-col gap-2 inset-0 justify-center mt-10 p-4 relative">
            <Dashboard onSearch={hdlSearch} />
            <FormAddTodo />
            <TodoContainer todos={filteredTodos} />
        </div>
    </div>
  )
}
