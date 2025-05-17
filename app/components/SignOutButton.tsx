"use client";
import { logout } from "@/lib/actions/auth";
export const SignOutButton = () => {
  return (
    <button className="text-white" onClick={() => logout()}>
      Sign out
    </button>
  );
};
