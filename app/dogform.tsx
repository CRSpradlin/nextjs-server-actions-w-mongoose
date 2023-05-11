import { revalidatePath } from "next/cache";

import dbConnect from "@/lib/mongodb";
import Dog from "@/models/Dog";

export default function DogForm() {

    // Server Action
    const formAction = async (data: FormData) => {
        "use server";
    
        await dbConnect();
        console.log(`Entry for ${data.get('name')} has been created!`);
        await Dog.create({ name: data.get('name'), breed: data.get('breed')});
    
        revalidatePath('/');
    }

    return(  
        <>
        <span className="text-3xl p-5">Dog Form</span><form className="flex flex-col" action={formAction}>
            <div>
                <label htmlFor="name">Name: </label>
                <input name="name" defaultValue={''}  type="text" className="m-2 p-2 rounded-xl text-violet-800" />
            </div>
            <div>
                <label htmlFor="breed">Breed: </label>
                <input name="breed" defaultValue={''} type="text" className="m-2 p-2 rounded-xl text-violet-800" />
            </div>
            <input type="submit" className="m-2 p-2 rounded-xl bg-violet-500 hover:bg-violet-600" />
        </form>
        </>
    )
  }