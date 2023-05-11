"use client";
import { useTransition } from "react";
import { signOutUserOnServer } from "./_actions";


export default function Nav() {

//   let [isPending, startTransition] = useTransition();

  const signOutUserOnClient = () => {
    console.log('User wants to Sign Out!')
  }

  return(  
    <nav className="flex flex-row-reverse w-full  m-2">
    <button onClick={() => signOutUserOnClient()} className="m-2 p-2 rounded-xl bg-violet-500 hover:bg-violet-600">
      Sign Out
    </button>
    {/* <button onClick={() => startTransition(() => signOutUserOnServer())} className="m-2 p-2 rounded-xl bg-violet-500 hover:bg-violet-600">
      Sign Out
    </button> */}
  </nav>
  )
}