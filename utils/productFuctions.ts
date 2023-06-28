import { DocumentData } from "firebase/firestore";

interface Product {
    id: string;
    data: DocumentData;
    };
  
  

export const  filterByGender = (products:Product[] | undefined, gender:string) =>{
    return products?.filter((product) => product.data.gender === gender);
  }



  interface Item {
    id: string;
    data: {
      image: string;
      gender: string;
      dateAdded: {
        seconds: number;
        nanoseconds: number;
      };
      reducedPrice: number;
      name: string;
      views: number;
      originalPrice: number;
    };
  }
  
  export const  filterItemsBySubtext = (items: Item[], subtext: string): Item[] =>{
    return items.filter((item) => item.data.name.toLowerCase().includes(subtext.toLowerCase()));
  }
  
  // Usage example
  const items: Item[] = [
    // Array items here
  ];
  
  const filteredItems = filterItemsBySubtext(items, "Leather");
  console.log(filteredItems);
  
  
  
  