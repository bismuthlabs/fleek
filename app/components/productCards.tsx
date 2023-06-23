import React from "react";
import productImage from "../assets/images/productcard.png";
import { StaticImageData } from "next/image";
import Image from "../components/Image";

interface ProductCard1Props {
  name: string;
  price: number;
  discount: number;
  image: string | StaticImageData;
}

export const ProductCard1: React.FC<ProductCard1Props> = (props) => {
  return (
    <div className="flex flex-col">
      <Image src={props.image} ar="16/14" className={"w-40 md:w-56"} />
      <p className="ml-2 mt-2 text-sm md:text-base">{props.name}</p>
      <div className="ml-2 mt-3  flex items-center">
        <span className="mr-3 font-extrabold">{`GH₵ ${props.price}`}</span>
        <span className="line-through text-xs ">{`GH₵ ${props.discount}`}</span>
      </div>
    </div>
  );
};
