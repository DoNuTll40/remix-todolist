import { Outlet } from "@remix-run/react";

export default function todo() {
  return (
    <div>
        <h1>TodoApp</h1>
        <Outlet />
    </div>
  )
}
