"use client";
import React, { useEffect, useState } from "react";
import { PaginatedItems } from "./pagination";
import {
  getAllProducts,
  getProductsByField,
} from "@/app/firebase/firestore/getData";

import { usePathname } from "next/navigation";
import { PostCardSkeleton } from "@/app/components/PostCardSkeleton";
import { availableCollection, availableCollectionProp } from "./data";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import NotFoundPage from "@/app/components/notFoundPage";

const page = () => {
  const [parsedItem, setParsedItem] = useState([]); //this holds parsed data from the firestore response
  const pathname = usePathname()?.split("/")[2]; //gets the current dynamic pathname from url
  const [showLoading, setShowLoading] = useState(true); //this state places a product skeleton when loading data from firestore
  const array = Array.from({ length: 5 }, (_, i) => i + 1); //this array is iterated to display the productcard skeleton
  const [collectionData, setCollectionData] = useState<availableCollectionProp>(
    availableCollection[0]
  ); //this state holds the collection data like heading, description, etc

  useEffect(() => {
    availableCollection.map((currentCollection) => {
      if (pathname.toLowerCase() === currentCollection.name) {
        setCollectionData({ ...currentCollection, available: true });
      } else {
      }
    });
  }, [pathname]);

  useEffect(() => {
    /*this function gets collection based on gender field */

    const getCollection = async (filter: string) => {
      const items = await getProductsByField("gender", filter);
      const parsedItem = JSON.parse(JSON.stringify(items));
      setParsedItem(parsedItem);
    };

    console.log(collectionData.data.filterName);
    getCollection(collectionData.data.filterName);
    setShowLoading(false);
  }, [collectionData.data.filterName]);

  //looping over the collection in the ./data.ts file ---this is make sure the collection is an approved one before rendering data
  //loop through the available collection,
  //if any matches the collection from the user url, then we render ui collection
  // if there isn't a match, we render a Page Not Found UI

  return (
    <div>
      {showLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center w-full">
          {array.map(() => (
            <PostCardSkeleton />
          ))}
        </div>
      ) : collectionData?.available ? (
        <div className="flex flex-col item-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide leading-tight text-center mt-3 mb-4">
            {collectionData?.name}
          </h1>
          <div>
            <PaginatedItems products={parsedItem} itemsPerPage={5} />
          </div>
        </div>
      ) : (
        <NotFoundPage />
      )}
    </div>
  );
};

export default page;
