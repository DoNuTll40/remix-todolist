// app/utils/auth.server.js
import { redirect } from "@remix-run/node";
import { getSession } from "../sessions.server";
import axios from "../configs/axios";

export async function requireUserSession(request) {
  const session = await getSession(request.headers.get("Cookie"));
  const token = session.get("token");

  if (!token) {
    // ถ้าไม่ได้ login ให้ redirect ไปหน้า login
    throw redirect("/sign-in");
  }

  // สามารถเพิ่มการตรวจสอบ token ที่นี่ (เช่น ตรวจสอบกับ API)
  const response = await axios.get("/auth/verify", {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`, // ส่ง token ไปตรวจสอบกับ API
    },
  });

  if (response.status !== 200) {
    throw redirect("/sign-in"); // ถ้า token ไม่ถูกต้อง
  }

  return response.data; // ส่ง userId กลับมา
}
