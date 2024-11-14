
// app/sessions.js
import { createCookieSessionStorage } from "@remix-run/node";

const sessionSecret = process.env.SESSION_SECRET || "3arth@016";

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "session",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    maxAge: 2 * 60 * 60 
  },
});

export const { getSession, commitSession, destroySession } = sessionStorage;
