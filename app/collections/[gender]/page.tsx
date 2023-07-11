"use client";
import React, { useEffect, useState } from "react";
import { PaginatedItems } from "./pagination";
import { fetchDataWithMultipleFilters } from "@/app/firebase/firestore/getData";

import { usePathname } from "next/navigation";
import { PostCardSkeleton } from "@/app/components/PostCardSkeleton";
import {
  CollectionProduct,
  availableCollection,
  availableCollectionProp,
} from "./data";
import NotFoundPage from "@/app/components/notFoundPage";
import SidebarNav from "./sidebar";
import NoProductSkeleton from "@/app/components/noProductSkeleton";

const page = () => {
  const [parsedItem, setParsedItem] = useState<CollectionProduct[]>([]); //this holds parsed data from the firestore response//this is what is being rendered in the grid
  const pathname = usePathname()?.split("/")[2]; //gets the current dynamic pathname from url
  const [showLoading, setShowLoading] = useState(true); //this state places a product skeleton when loading data from firestore
  const array = Array.from({ length: 5 }, (_, i) => i + 1); //this array is iterated to display the productcard skeleton
  const [collectionData, setCollectionData] = useState<availableCollectionProp>(
    availableCollection[0]
  ); //this state holds the collection data like heading, description, etc
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const getCollection = async (filter: string) => {
    const items = await fetchDataWithMultipleFilters([
      { field: "gender", value: filter },
    ]);
    const parsedItem = JSON.parse(JSON.stringify(items));
    setParsedItem(parsedItem);
  };

  const handleFilterClick = async (cat: string) => {
    setShowLoading(true);
    if (cat === "all") {
      getCollection(collectionData.data.filterName);
      setShowLoading(false);
      handleCloseSidebar();
      return;
    }
    try {
      const items = await fetchDataWithMultipleFilters([
        { field: "gender", value: collectionData.data.filterName },
        { field: "category", value: cat },
      ]);
      const parsedItem = JSON.parse(JSON.stringify(items));
      setParsedItem(parsedItem);
    } catch (error) {
      console.error(error);
    }
    setShowLoading(false);
    handleCloseSidebar();
    return;
  };

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

    getCollection(collectionData.data.filterName);
    setShowLoading(false);
  }, [collectionData.data.filterName]);

  //looping over the collection in the ./data.ts file ---this is make sure the collection is an approved one before rendering data
  //loop through the available collection,
  //if any matches the collection from the user url, then we render ui collection
  // if there isn't a match, we render a Page Not Found UI

  return (
    <div>
      <div className="flex flex-row items-center">
        <select
          className="w-full p-2 border border-gray-300 border-t-0 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
          aria-label="Sort"
        >
          <option value="price">Price</option>
          <option value="rating">Rating</option>
          <option value="popularity">Popularity</option>
        </select>
        <button
          className="w-full px-4 py-2 text-white bg-black  hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
          onClick={handleToggleSidebar}
        >
          Filter
        </button>
      </div>

      <SidebarNav
        handleCloseSidebar={handleCloseSidebar}
        handleToggleSidebar={handleToggleSidebar}
        isSidebarOpen={isSidebarOpen}
        items={collectionData?.data?.categories}
        handleFilterClick={handleFilterClick}
      />
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
      {parsedItem.length === 0 && <NoProductSkeleton />}
    </div>
  );
};

export default page;
