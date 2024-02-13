"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const session = useSession();
  const router = useRouter();
  // console.log(session);
  const handleGoogleSignout = async () => {
    await signOut("google");
  };
  if (session.status === "unauthenticated") {
    router.push("/");
  }
  return (
    <div>
      <h1 className="text-center text-2xl"> landing page</h1>
      <div className="flex justify-center mt-3">
        <button
          className="bg-black text-white px-6 py-2"
          onClick={() => handleGoogleSignout()}
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default page;
