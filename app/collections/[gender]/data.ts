export interface availableCollectionProp {
    name: string,
    available?: boolean,
    data: {
        filterName: string,
        heading: string,
        categories?: string[]
    }
    
}

export const availableCollection:availableCollectionProp[]= [
    {name:"all", data:{filterName:"", heading:"All Collection"}},
    {name:"men",  data:{filterName:"m", heading:"Mens Collection", categories:["All","Loafers", "Crocs", "Sandals", "Sneakers"]}}, 
    {name:"women", data:{filterName:"f", heading:"Womens Collection", categories:["All","Heels", "Slipper Heels", "Crocs", "Flats", "Sandals"]}},

]


export type CollectionProduct = {
    id: string;
    views: number;
    name: string;
    category: string;
    originalPrice: number;
    gender: string;
    dateAdded: {
      seconds: number;
      nanoseconds: number;
    };
    reducedPrice: number;
    image: string;
  };