import React from "react";
import productImage from "../assets/images/productcard.png";
import { StaticImageData } from "next/image";
import Image from "../components/Image";
import { DocumentData } from "firebase/firestore";

interface ProductCard1Props {
  name: string;
  price: number;
  discount: number;
  image: string | StaticImageData;
}

interface ProductDataType {
  image: string;
  name: string;
  originalPrice: number;
  reducedPrice: number;
  views: number;
}
interface ProductCardProps {
  data: DocumentData;
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

export const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <div className="flex flex-col border border-black">
      <Image src={data.image} ar="16/14" className={"border border-red-400 w-40 md:w-56"} />
      <p className="ml-2 mt-2 text-sm md:text-base">{data.name}</p>
      <div className="ml-2 mt-3  flex items-center">
        <span className="mr-3 font-extrabold">{`GH₵ ${data.reducedPrice}`}</span>
        <span className="line-through text-xs ">{`GH₵ ${data.originalPrice}`}</span>
      </div>
    </div>
  );
};
