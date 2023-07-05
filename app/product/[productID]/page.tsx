"use client";
// import Image from "@/app/components/Image";
import React, { Suspense, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getProduct } from "@/app/firebase/firestore/getData";
import path from "path";
import { DocumentData } from "firebase/firestore";
import Palette from "./palette";
import Image from "next/image";
import Review from "./review";
import { Image as TxImage } from "../../components/Image";
import { updateViews } from "@/app/firebase/firestore/updateData";

const page = () => {
  const pathname = usePathname()?.split("/")[2];
  const [product, setProduct] = useState<DocumentData | null>({
    name: "",
    // image: "",
    originalPrice: "",
    reducedPrice: "",
    description: "",
    reviews: [],
  });

  interface Color {
    name: string;
    value: string;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProduct(pathname);
        console.log(data);
        setProduct(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [pathname]);

  useEffect(() => {
    product?.views ? updateViews(pathname, product?.views) : "none";
  }, [product?.views]);

  return (
    <div className="flex flex-col w-11/12 md:w-9/12 lg:w-4/6 m-auto gap-4">
      <section className="flex flex-col lg:flex-row gap-8 container mt-3  md:mt-14">
        {/* <section className="grid grid-cols-2 m-auto w-10/12"> */}
        {/* <Image className={"w-full"} src={product?.image} ar={"15/18"} /> */}
        {/* <div
            style={{
              aspectRatio: "2/3",
              width: "153.6px",
              // height: "auto",
              overflow: "hidden",
              flex: "1",
            }}
          >
            <Image
              src={product?.image}
              alt={product?.image}
              width={256}
              height={384}
            />
          </div> */}
        {/* <div className="overflow-hidden relative h-80 md:h-full md:overflow-auto md:relative md:80 "> */}
        <TxImage
          src={product?.image}
          className={
            "w-full h-34 absolute md:h-full md:static bottom-0 md:flex-1"
          }
          ar={"2/3"}
        />
        {/* </div> */}
        <div className="md:flex-1">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <h1 className="text-3xl">{product?.name}</h1>
              <div className=" flex items-center gap-2 mt-2">
                <span className=" text-2xl font-extrabold">{`GH₵ ${product?.reducedPrice}`}</span>
                <span className="line-through text-base ">{`GH₵ ${product?.originalPrice}`}</span>
              </div>
            </div>
            {/*Color and size*/}
            <div>
              <div className="flex items-center">
                <label className="block font-medium" htmlFor="selectField">
                  Size
                </label>
                <select
                  id="selectField"
                  className="p-2 bg-white focus:outline-none "
                >
                  <option value="option1">40</option>
                  <option value="option2">36</option>
                  <option value="option3">38</option>
                </select>
              </div>
              <div className="container  mt-3 mb-3">
                <Palette />
              </div>
            </div>
          </div>

          {/* <h2>Description</h2> */}
          <div className="my-2">
            <hr />
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus ex, a quae explicabo cupiditate quidem saepe
              perspiciatis placeat possimus eligendi! Sint, dolores modi.
            </p>
            <hr />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <button className="bg-white text-black p-2 border-black border-2">
              Add to bag
            </button>
            <button className="bg-black text-white p-2 border-2">
              Buy now
            </button>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold ">Reviews</h2>
        <div className=" flex flex-col gap-3 ">
          <Review
            profileImage=""
            author="Manu Mike"
            rating={5}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ex, a quae explicabo cupiditate quidem saepe perspiciatis placeat possimus eligendi! Sint, dolores modi."
          />
          <Review
            profileImage=""
            author="Manu Mike"
            rating={3}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ex, a quae explicabo cupiditate quidem saepe perspiciatis placeat possimus eligendi! Sint, dolores modi."
          />
          <Review
            profileImage=""
            author="Manu Mike"
            rating={2.5}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ex, a quae explicabo cupiditate quidem saepe perspiciatis placeat possimus eligendi! Sint, dolores modi."
          />
        </div>
      </section>
    </div>
  );
};

export default page;
