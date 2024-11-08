/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem"

export default function TodoContainer({ todos }) {

    if(!todos){
        return null
    }

  return (
    <div>
        {todos.map(el => (
        <TodoItem key={el.id} job={el}/>
      ))
      }
    </div>
  )
}
