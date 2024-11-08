
import { useLoaderData } from "@remix-run/react";
import Dashboard from "../../components/Dashboard";
import FormAddTodo from "../../components/FormAddTodo";
import TodoContainer from "../../components/TodoContainer";

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

  return (
    <div className="max-w-[90rem] mx-auto">
        <div className="max-w-[25rem] mx-auto flex flex-col gap-2 inset-0 justify-center items-center mt-10 p-4">
            <Dashboard />
            <FormAddTodo />
            <TodoContainer todos={data} />
        </div>
    </div>
  )
}
