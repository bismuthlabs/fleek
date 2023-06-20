"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "./components/heroSection";
import { ProductCard1 } from "./components/productCards";
import { catMen, catWomen } from "./dummyData";

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
      <section className="flex flex-col content-center items-center overflow-hidden">
        <h1>Trending</h1>
        <div className="category-select">
          <span
            className={category == "women" ? "active" : ""}
            onClick={() => {
              console.log("clicked");
              setCategory("women");
              setCurrentCategory(catWomen);
            }}
          >
            Women
          </span>
          <span
            className={category == "men" ? "active" : ""}
            onClick={() => {
              console.log("clicked");
              setCategory("men");
              setCurrentCategory(catMen);
            }}
          >
            Men
          </span>
        </div>
        <div className="category-slideshow">
          <div className="category-slideshow_content">
            {currentCategory.map((item) => (
              <ProductCard1
                name={item.name}
                price={item.price}
                discount={item.discount}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;
