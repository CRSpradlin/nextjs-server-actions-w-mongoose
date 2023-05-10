import dbConnect from "@/lib/mongodb";
import Dog from "@/models/Dog";
import DogList from "./dogs";
import { Suspense } from "react";
import { revalidatePath } from "next/cache";

export default async function Home() {

  async function formAction(data: FormData) {
    "use server";

    await dbConnect();
    console.log(`Entry for ${data.get('name')} has been created!`);
    await Dog.create({ name: data.get('name'), breed: data.get('breed')});

    revalidatePath('/');
  }

  const dogList = await DogList() 
  
  return (
    <main className="flex flex-col min-h-screen bg-violet-700 text-white text-xl items-center text-center">
      <div className="m-auto">
        <span className="text-3xl p-5">Dog Form</span>
        <form className="flex flex-col" action={formAction}>
          <div>
            <label htmlFor="name">Name: </label>
            <input name="name" type="text" className="m-2 p-2 rounded-xl text-violet-800"/> 
          </div>
          <div>
            <label htmlFor="breed">Breed: </label> 
            <input name="breed" type="text" className="m-2 p-2 rounded-xl text-violet-800"/>
          </div>
          <input type="submit" className="m-2 p-2 rounded-xl bg-violet-500 hover:bg-violet-600"/>
        </form>
        <br />
        <span className="text-3xl">Submited Dogs</span>
        <div>
          {dogList}
        </div>
      </div>
    </main>
  )
}
