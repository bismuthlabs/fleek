import { getFirestore, collection, addDoc } from "firebase/firestore";
import firebase_app from "../config";


interface DataToSend{
  title: string | undefined,
  description: string | undefined,
  img_url: string | null,
}

// Obtain Firestore instance

const db = getFirestore(firebase_app);

/*This fuction adds a new product to the database. When in use, await image full upload which returns the url of the image 
before adding data */
export default async function addData(data:DataToSend) {
  let result = null;
  let error = null;
  const collectionRef = collection(db, "products");

  try {
    const result = await addDoc(collectionRef, data);
    console.log("Document added with ID: ", result.id);
  } catch (e) {
    error = e;
  }
  return { result, error };
}
