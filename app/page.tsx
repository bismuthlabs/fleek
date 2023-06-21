"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "./components/heroSection";
import { ProductCard1 } from "./components/productCards";
import { catMen, catWomen, faqs, newArrivals } from "./dummyData";
import FAQ from "./components/FAQ";
import contactus from "./assets/images/contactus.jpg";
import Image from "next/image";
import Link from "next/link";
interface Category {
  name: string;
  price: number;
  discount: number;
  image: string;
}

const Home = () => {
  const [category, setCategory] = useState<string>("women");
  const [currentCategory, setCurrentCategory] = useState<Category[]>(catWomen);

  return (
    <main>
      <HeroSection />
      <section className="flex flex-col content-center items-center overflow-hidden mt-8 md:mt-14 lg:mt-20">
        <h1 className="text-base  tracking-wide text-gray-900 md:text-lg lg:text-2xl dark:text-black">
          TRENDING
        </h1>
        <div className="category-select mb-14">
          <span
            className={
              category == "women"
                ? "active text-lg md:text-xl lg:text-2xl"
                : "text-lg md:text-xl lg:text-2xl"
            }
            onClick={() => {
              setCategory("women");
              setCurrentCategory(catWomen);
            }}
          >
            Women
          </span>
          <span
            className={
              category == "men"
                ? "active text-lg md:text-xl lg:text-2xl"
                : "text-lg md:text-xl lg:text-2xl"
            }
            onClick={() => {
              setCategory("men");
              setCurrentCategory(catMen);
            }}
          >
            Men
          </span>
        </div>
        <div className="category-slideshow ">
          {currentCategory.map((item) => (
            <ProductCard1
              name={item.name}
              price={item.price}
              discount={item.discount}
              image={item.image}
            />
          ))}
        </div>
      </section>
      <section className="new-arrivals_sec flex flex-col items-center mt-24">
        <h2 className="mb-4 text-base  tracking-wide text-gray-900 md:text-lg lg:text-2xl dark:text-black">
          NEW ARRIVALS
        </h2>
        <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 w-full">
          {newArrivals.map((item) => (
            <ProductCard1
              name={item.name}
              price={item.price}
              discount={item.discount}
              image={item.image}
            />
          ))}
        </div>
        <button className="text-white  text-lg  md:text-1xl bg-black hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-500 px-5 py-2 mt-8">
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
      <section className="faqs_sec mt-20">
        <FAQ faqs={faqs} />
      </section>
    </main>
  );
};
export default Home;
