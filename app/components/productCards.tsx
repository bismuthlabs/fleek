import React from "react";
import productImage from "../assets/images/productcard.png";
import Image, { StaticImageData } from "next/image";

interface ProductCard1Props {
  name: string;
  price: number;
  discount: number;
  image: string | StaticImageData;
}

export const ProductCard1: React.FC<ProductCard1Props> = (props) => {
  return (
    <div className="product-card">
      {/* <div className="product-card_img"> */}
      <Image src={props.image || productImage} alt="" />
      {/* </div> */}
      <p>{props.name}</p>
      <div className="price">
        <span
          style={{
            fontSize: "1.05rem",
            fontWeight: "800",
            marginRight: "13px",
          }}
        >
          {`GHS${props.price}`}
        </span>
        <span style={{ fontSize: "0.8rem", textDecoration: "line-through" }}>
          {`GHS${props.discount}`}
        </span>
      </div>
    </div>
  );
};
