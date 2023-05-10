import dbConnect from "@/lib/mongodb";
import Dog from "@/models/Dog";

export default async function DogList() {
    await dbConnect();
    const dogs = await Dog.find({});

    const items = [];

    for (const dog of dogs) {
        items.push(
        <div key={dog._id}>
            Name: {dog.name}, Breed: {dog.breed}
        </div>
        )
    }
    
    return(items)
}