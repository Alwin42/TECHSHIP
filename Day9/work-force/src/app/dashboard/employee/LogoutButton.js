
"use client";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button onClick={() => signOut({ callbackUrl: "/login" })} className="text-red-600 hover:text-red-800 transition-colors font-bold uppercase">
      LOGOUT
    </button>
  );
}