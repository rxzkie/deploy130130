"use server";
import { jwtDecode } from "jwt-decode";
import { FormResponse } from "../../common/interfaces/form-response.interface";
import { API_URL } from "../../common/constants/api";
import { getErrorMessage } from "../../common/util/errors";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";




export default async function login(_prevState: FormResponse, formData: FormData) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },     /* cookies */
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  const parsedRes = await res.json();
  if (!res.ok) {
    return { error: getErrorMessage(parsedRes) };
  }
  setAuthCookie(res);
  redirect("/admin/dashboard");
}

const setAuthCookie = async (response: Response) => {
  const setCookieHeader = response.headers.get("Set-Cookie");

  if (setCookieHeader) {
    const token = setCookieHeader.split(";")[0].split("=")[1];
    const cookieStore = await cookies(); // Resolver la promesa

    cookieStore.set({
      name: "Authentication",
      value: token,
      secure: true,
      httpOnly: true,
      expires: new Date(jwtDecode(token).exp! * 1000),
    });
  }
};