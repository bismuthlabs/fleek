"use client";
import React, { useEffect, useRef, useState } from "react";
import { herosection } from "../dummyData";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type heroSectionProps = {
  id: number;
  heading: string;
  tag: string;
  img: string | StaticImageData;
  btnName: string;
  btnLink: string;
};
const HeroSection = () => {
  const [index, setIndex] = useState<number>(1); //currnent index to be visible

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null); // this and the function below clears timeout from thread
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const delay = 2500;

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((index + 1) % herosection.length),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <header className="hero-section">
      {herosection.map((item) => (
        <Item index={index} items={item} />
      ))}
    </header>
  );
};

export default HeroSection;

const Item = ({ items, index }: { items: heroSectionProps; index: number }) => {
  return (
    <>
      {index === items.id && (
        <div className="hero-image">
          <Image src={items.img} alt="" />
          <div className="hero-tag ">
            <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-6xl lg:text-7xl dark:text-white">
              {items.heading}
            </h1>
            <p className="text-lg ">{items.tag}</p>
            <Link href={items.btnLink}>
              <button
                type="button"
                className="text-black  text-lg  md:text-1xl bg-white hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-500 px-4 py-2 "
              >
                {items.btnName}
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
