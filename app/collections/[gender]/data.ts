export interface availableCollectionProp {
    name: string,
    available?: boolean,
    data: {
        filterName: string,
        heading: string,
    }
}
export const availableCollection:availableCollectionProp[]= [
    {name:"all", data:{filterName:"", heading:"All Collection"}},
    {name:"men",  data:{filterName:"m", heading:"Mens Collection"}}, 
    {name:"women", data:{filterName:"f", heading:"Womens Collection"}},

]