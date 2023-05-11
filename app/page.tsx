import { Suspense } from "react";
import DogForm from "./dogform";
import DogList from "./doglist";
import Nav from "./nav";

export default async function Home() {
  
  return (
    <main className="flex flex-col min-h-screen bg-violet-700 text-white text-xl items-center text-center">
      <Nav />
      <div className="m-auto">
        <DogForm />
        <br />
        <span className="text-3xl">Submited Dogs</span>
        <div>
          {/* @ts-expect-error Async Server Component */}
          <DogList />
        </div>
      </div>
    </main>
  )
}
