import { Outlet } from "@remix-run/react";
// import { requireUserSession } from "../utils/auth.server";

// export async function loader({ request }) {
//   await requireUserSession(request); // ตรวจสอบการล็อกอิน
//   return null;
// }

export default function todo() {
  return <Outlet />;
}
