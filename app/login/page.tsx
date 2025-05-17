"use server";
import { SignOutButton } from "../components/SignOutButton";
import { auth } from "@/auth";
import { SignInButton } from "../components/SignInButton";

export default async function page() {
  const session = await auth();

  if (session?.user) {
    return (
      <>
        <div className="h-screen w-screen flex items-center justify-center flex-col">
          <p>Next Auth v5 + Next 15</p>
          <p> User signed in with name: {session?.user.name}</p>
          <p> User signed in with name: {session?.user.email}</p>
          <SignOutButton />
        </div>
      </>
    );
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <p>You are Not signed in</p>
      <SignInButton />
    </div>
  );
}
