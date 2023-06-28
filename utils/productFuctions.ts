import { DocumentData } from "firebase/firestore";

interface Product {
    id: string;
    data: DocumentData;
    };
  
  

export const  filterByGender = (products:Product[] | undefined, gender:string) =>{
    return products?.filter((product) => product.data.gender === gender);
  }