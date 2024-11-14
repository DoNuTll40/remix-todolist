
import axios from "../configs/axios";
import { json, redirect } from "@remix-run/node";
import { commitSession, getSession } from "../sessions.server";
import { Form, useActionData } from "@remix-run/react";
import { Button, Input, Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons/faCircleInfo";
import { useTheme } from "../contexts/ThemeContext";

export async function action({ request }) {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  try {
    const response = await axios.post("/auth/sign-in", {
      username,
      password,
    }, {
      withCredentials: true
    });

    if (response.status === 200) {
      const { token } = response.data;
      const session = await getSession(request.headers.get("Cookie"));
      session.set("token", token);

      return redirect("/todo", {
        headers: {
          "Set-Cookie": await commitSession(session),
        },
      });

    }
  } catch (error) {
    console.error("Login failed :", error.response?.data?.message || error.message);
    console.log(error)
    return json({ 
      success: false,
      message: error.response?.data?.message,
      error
    }, { status: 400 });
  }
}

export default function SignIn() {
  let actionData = useActionData();
  const { theme } = useTheme();
  const [showPass, setShowPass] = useState(false)

  const hdlShowPass = () => {
    setShowPass(!showPass)
  }

  if (theme === null) {
    return null;
  }

  return (
    <div className=" inset-0 h-screen flex justify-center items-center">
      <Form className="flex flex-col gap-2 w-[380px] border p-4 rounded-xl dark:border shadow-md" method="post">
      <h1 className="font-semibold text-xl mt-3 mb-2 text-center dark:text-white">Login</h1>
        <div className="w-full dark:text-white">
          <p>Username</p>
          <Input>
            <Input.Field type="text" placeholder="Username or Email" name="username" required />
            <Input.Icon className="data-[placement=start]:left-3.5">
              <FontAwesomeIcon icon={faUser} />
            </Input.Icon>
          </Input>
        </div>
        <div className="w-full dark:text-white">
          <p>Password</p>
          <Input className="group relative">
            <Input.Field type={showPass ? "text" : "password"} placeholder="Password" name="password" required />
            <Input.Icon className="data-[placement=start]:left-3.5">
              <FontAwesomeIcon icon={faLock} />
            </Input.Icon>
            <FontAwesomeIcon className="hover:cursor-pointer absolute right-3 top-3.5 opacity-0 group-hover:opacity-50 group-focus-within:opacity-50 transition-all ease-in-out duration-200 transfoFormark dark:text-white" icon={showPass ? faEyeSlash : faEye} onClick={ () => hdlShowPass()} />
          </Input>
        </div>
        {actionData && 
        <div className="my-1 px-1 dark:text-white">
          <FontAwesomeIcon icon={faCircleInfo} className="mr-1" />
          <Typography type="small">{actionData.message}</Typography>
        </div>
        }
        <Button className="mb-5 mt-8" type="submit">Login</Button>
      </Form>
    </div>
  );
}
