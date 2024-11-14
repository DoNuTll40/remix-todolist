/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

export default function TodoContainer({ todos }) {

  if (!todos || todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center">
        <img className="max-w-[220px] select-none pointer-events-none" src="https://cdn.website-editor.net/s/5c230b50d83f4a5e8bd311e079983bac/dms3rep/multi/detective-check-footprint.svg?Expires=1733294339&Signature=lv98QoIEgXTZuZKsg50BjVd5VK0POOK7Iqu-d~fzO9YqHELsFwzatdDq650Oit4I9coTEWoY3R9Vjbit3DxKvfmA7PAiG8a7Sgx8yk4eCtRfSy~PuYN7fEdLa6lVEZ81bTL15Wx47XP-zQDdJlO0kPU4ToY2QCxQNSAQ-4RCsi9fqd3zkPa6UXjwC6LQy2YdtID~cbsZxN6hC735aXXL36Fbg4t87~DlOygr4lgMMTzeHqT8xY3EZjJX0Tyu3ub-ykV6DMYEJ0UelvgqF05eCZiZmJKLIXAhTeatbBBWTTxDGBnMSt3i6xGnJDqWqb3J-GaHoV~c0WO0OzEGaG6qYw__&Key-Pair-Id=K2NXBXLF010TJW" alt="icon" />
        <p>Empty...</p>
      </div>
    )
  }

  const length = todos.length;

  return (
    <div className="px-3 flex flex-col gap-4 pt-3">
      {todos.map((el, index) => (
        <TodoItem key={el.id} job={el} status={el.completed} count={index + 1} length={length} />
      ))}
    </div>
  );
}
