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
export const HeroSection = () => {
  const [index, setIndex] = useState<number>(1); //currnent index to be visible
  const [isMobile, setIsMobile] = useState(false);
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

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <header className="hero-section">
      {isMobile ? (
        <div className="hero-section_mobile ">
          {herosection.map((item, index) => {
            return (
              <>
                <ImageWithOverlay
                  key={index}
                  index={index}
                  isMobile={isMobile}
                  items={item}
                />
              </>
            );
          })}
        </div>
      ) : (
        herosection.map((item) => {
          return (
            <>
              {index === item.id && (
                <ImageWithOverlay
                  key={item.id}
                  isMobile={isMobile}
                  index={index}
                  items={item}
                />
              )}
            </>
          );
        })
      )}
    </header>
  );
};

export const ImageWithOverlay = ({
  items,
  index,
  isMobile,
}: {
  items: heroSectionProps;
  index: number;
  isMobile: boolean;
}) => {
  return (
    <>
      <div className="hero-image">
        <Image src={items.img} alt="" />
        <div className="hero-tag ">
          <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight  md:text-6xl lg:text-7xl text-white">
            {items.heading}
          </h1>
          {!isMobile && (
            <>
              <p className="text-lg ">{items.tag}</p>
              <Link href={items.btnLink}>
                <button
                  type="button"
                  className="text-black  text-lg  md:text-1xl bg-white hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-500 px-4 py-2 "
                >
                  {items.btnName}
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};
