import { doc, getFirestore, updateDoc } from "firebase/firestore";
import app from "../config";

const db = getFirestore(app);


export const updateData = async (id:string, updatedData:any) => {
let docRef = doc(db, "products", id);

try {
    await updateDoc(docRef, updatedData);
    console.log('Document field updated successfully!');
    return true;
  } catch (error) {
    console.error('Error updating document field:', error);
    return false;
  }
    
}

export const updateViews = async (id:string, currentView:number) => {
    currentView = currentView + 1;
    let data = {views: currentView};
    try{
        await updateData(id, data);
    }
    catch(e){
        console.error(e)
    }
}