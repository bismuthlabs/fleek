"use client";
import React, { useEffect, useState } from "react";
import { HeroSection } from "./components/heroSection";
import { ProductCard, ProductCard1 } from "./components/productCards";
import {
  catMen,
  catWomen,
  faqs,
  newArrivalsa,
  dummyTrending,
} from "./dummyData";
import FAQ from "./components/FAQ";
import contactus from "./assets/images/contactus.jpg";
import Image from "next/image";
import Link from "next/link";
import {
  getAllProducts,
  getDocumentsSortedByDateAdded,
} from "./firebase/firestore/getData";
import { DocumentData } from "firebase/firestore";
import { filterByGender } from "@/utils/productFuctions";

interface Category {
  name: string;
  price: number;
  discount: number;
  image: string;
}

interface ProductType {
  image: string;
  name: string;
  originalPrice: number;
  reducedPrice: number;
  views: number;
}
interface ProductsType {
  id: number | string;
  data: DocumentData;
}

const Home = () => {
  const [trending, setTrending] = useState<ProductsType[] | undefined>(
    dummyTrending
  );
  const [trendingCat, setTrendingCat] = useState("f");
  const [newArrivals, setNewArrivals] = useState<ProductsType[]>(dummyTrending);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setTrending(dummyTrending); //It takes time to fetch the data so this is just to show the skeleton loader
        const data = await getAllProducts();
        if (data?.length === 0) return; //network issues usually results to an empty data being sent over the client

        if (trendingCat == "f") {
          setTrending(filterByGender(data, "f")?.slice(0, 8));
        }

        if (trendingCat === "m") {
          setTrending(filterByGender(data, "m")?.slice(0, 8));
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchProductData();
  }, [trendingCat]);

  useEffect(() => {
    const getSortedProducts = async () => {
      const data = await getDocumentsSortedByDateAdded(4);
      setNewArrivals(data);
    };
    getSortedProducts();
  }, []);

  return (
    <main>
      <HeroSection />
      <section className="flex flex-col content-center items-center overflow-hidden mt-12 md:mt-16 lg:mt-20">
        <h2 className="text-base  tracking-wide  md:text-lg lg:text-2xl text-black  font-semibold mb-6 md:mb-8 lg:mb-10 ">
          TRENDING
        </h2>
        <div className="category-select mb-6 md:mb-12 lg:mb-12">
          <span
            className={
              trendingCat == "f"
                ? "active text-lg md:text-xl lg:text-2xl"
                : "text-lg md:text-xl lg:text-2xl"
            }
            onClick={() => {
              setTrendingCat("f");
            }}
          >
            Women
          </span>
          <span
            className={
              trendingCat == "m"
                ? "active text-lg md:text-xl lg:text-2xl"
                : "text-lg md:text-xl lg:text-2xl"
            }
            onClick={() => {
              setTrendingCat("m");
            }}
          >
            Men
          </span>
        </div>
        <div className="category-slideshow ">
          {trending?.map((item) => (
            <ProductCard key={item.id} data={item.data} />
          ))}
        </div>
      </section>

      <section className="new-arrivals_sec flex flex-col items-center mt-12 md:mt-18 lg:mt-24 pt-4">
        <h2 className="text-base  tracking-wide  md:text-lg lg:text-2xl text-black  font-semibold mb-6 md:mb-8 lg:mb-10 ">
          NEW ARRIVALS
        </h2>
        <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 w-full  ">
          {newArrivals.map((item) => (
            <ProductCard key={`new_${item.id}`} data={item.data} />
          ))}
        </div>
        <button className="text-white  text-lg  md:text-xl bg-black hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-500 px-5 py-2 mt-8">
          See all
        </button>
      </section>
      {/*Contact us Section */}
      <section className="contact-us_sec mt-20">
        <div
          className="hero-image"
          style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden" }}
        >
          <Image src={contactus} alt="" />
          <div className="hero-tag ">
            <>
              <p className="text-lg ">
                We cherish our customers. <br /> Chat with us right away
              </p>
              <Link href="/#">
                <button
                  type="button"
                  className="text-white text-bold text-lg  md:text-1xl bg-black hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-500 px-4 py-2 "
                >
                  Message us
                </button>
              </Link>
            </>
          </div>
        </div>
      </section>
      {/*FAQ section */}
      <section className="faqs_sec my-20 flex flex-col items-center content-center">
        <h2 className="">FAQ</h2>
        <FAQ faqs={faqs} />
      </section>
    </main>
  );
};
export default Home;
