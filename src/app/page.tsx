"use client"; // Required because `useSession()` is a client-side hook

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  console.log(session,'dddddddddd');
  
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {!session ? (
        <>
          <h2>Not signed in</h2>
          <button onClick={() => signIn("facebook")}>Sign in with Facebook</button>
        </>
      ) : (
        <>
          <h2>Welcome, {session.user?.name}</h2>
          <img src={session.user?.image ?? ""} alt="Profile" width={100} height={100} />
          <p>Email: {session.user?.email}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      )}
    </div>
  );
}
