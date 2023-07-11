import app from "../config";
import { getFirestore, doc, getDoc, collection, getDocs, query, orderBy, limit, where, startAt, endAt, startAfter, getCountFromServer, DocumentData, WhereFilterOp, QuerySnapshot } from "firebase/firestore";

const db = getFirestore(app);

/*The functions here fetch all documnet in the product collection.
The data collected is plain and not sorted or filtered
The idea it to get all data and wherever sorting or filtering is required, it is done with client side code
*/

export const getAllProducts = async () => {
  let documentsData;
  const collectionRef = collection(db, "products"); // Specify the collection from which you want to fetch documents

  /* Fetch all documents in the collection*/
  try {
    const querySnapshot = await getDocs(collectionRef);

    documentsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching documents: ", error);
  }
  return documentsData;
}

/*Each product object has an id and the id of a product can be passed 
into this function as a parameter and this function will get all the various attribute of 
the product object
 */
export const getProduct = async (id: string) => {
  let docRef = doc(db, "products", id);

  try {
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const documentData = docSnapshot.data();
      return documentData;
    } else {
      console.log("Document does not exist");
      return null;
    }
  } catch (error) {
    console.error("Error getting document:", error);
    return null;
  }
};




/*This function gets products from firestore. 
The lim parameter limits the number of data it should get from firestore
This is to reduce work load on clientside */
export const getDocumentsSortedByDateAdded = async (lim: number) => {
  const collectionRef = collection(db, 'products');
  const q = query(collectionRef, orderBy('dateAdded', 'desc'), limit(lim));
  const querySnapshot = await getDocs(q);

  const sortedDocuments: any = [];

  querySnapshot.forEach((doc) => {
    sortedDocuments.push({ id: doc.id, data: doc.data() });
  });

  return sortedDocuments;
}



/*This function is a search query that accepts the search term and searches the product collection by title */

export const searchProduct = async (searchQuery: string) => {
  const collectionRef = collection(db, 'products');

  // const q = query(collectionRef, where('name', '>=', searchQuery), limit(4));
  const q = query(
    collectionRef,
    orderBy('name'),
    startAt(searchQuery),
    endAt(searchQuery + '\uf8ff'),
    limit(4)
  );
  const snapshot = await getDocs(q);

  const documents = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));

  return documents;
};


//get the number of product in a collection where gender is passed by parameter`
export const getNumber = async (value: string) => {
  const collectionRef = collection(db, 'product');
  const q = query(collectionRef, where('gender', '==', value));

  try {
    const querySnapshot = await getDocs(q);
    const count = querySnapshot.size;
    console.log('Number of documents:', count);
    return count;
  } catch (error) {
    console.error('Error getting documents:', error);
    throw error;
  }
};


//this function accepts two arguments, fieldName and fieldValue. The function returns product documents from the collection which matches the 
//field name and value passed
export const getProductsByField = async (fieldName: string, fieldValue: string) => {
  const productsRef = collection(db, "products");
  const q = query(productsRef, where(fieldName, "==", fieldValue));

  try {
    const querySnapshot = await getDocs(q);
    const products: DocumentData = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    return products;
  } catch (error) {
    console.error("Error getting products:", error);
  }
};


export interface Filter {
  field: string;
  value: any;
}

//this function accepts an array of filters and returns products that matches the filters
//array of filters should look like this:  [ { field: "category",  value: "shoes" },{ field: "gender", operator: "==", value: "female" }]

export const fetchDataWithFilters = async (filters: Filter[]): Promise<any[]> => {
  const collectionRef = collection(db, "products");

  let q = query(collectionRef);
  filters.forEach((filter) => {
    const { field, value } = filter;
    q = query(q, where(field, "==", value));
  });

  try {
    const querySnapshot: QuerySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => doc.data());
    console.log(data)
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};


export const fetchDataWithMultipleFilters = async (filters: Filter[]): Promise<any[]> => {
  const collectionRef = collection(db, "products");

  let q = query(collectionRef);
  filters.forEach((filter) => {
    const { field, value } = filter;
    q = query(q, where(field, "==", value));
  });

  try {
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => {
      return (
        {
          id: doc.id,
          data: doc.data(),
        }
      )
    });
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
