"use client";

import { useState } from "react";
import { Product } from "@/lib/definitions";
import Image from "next/image";
import { FaCartPlus, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

// The product card component with all the animations and fip card effect

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <motion.div
      className={`relative cursor-pointer min-h-[328.8px] flex flex-col justify-between gap-y-2 p-4 border-[3px] border-link rounded-xl hover:shadow-xl duration-300 ${
        flipped ? "rotate-y-180" : ""
      }`}
      onClick={handleFlip}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "backInOut" }}
      style={{ perspective: "1000px", backfaceVisibility: "hidden" }}
    >
      <motion.div
        className={` w-full h-full min-h-[328.8px] backface-hidden flex flex-col justify-between ${
          flipped ? "hidden" : ""
        }`}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "backInOut" }}
        style={{ perspective: "1000px", backfaceVisibility: "hidden" }}
      >
        <Image
          width={100}
          height={100}
          src={product.thumbnail}
          alt={product.title}
          className="w-full rounded-xl"
          loading="lazy"
        />

        <div className="flex space-x-2">
          {product.tags.map((tag) => (
            <p
              key={tag}
              className="text-xs p-1 rounded-lg flex items-center border-2 border-extra "
            >
              {tag}
            </p>
          ))}
        </div>

        <div className="flex h-full  justify-between">
          <p className="font-bold text-sm w-3/4 text-ellipsis">
            {product.title}
          </p>
          <p className="font-bold text-sm">${product.price}</p>
        </div>

        <div className="flex justify-between">
          <p>{product.availabilityStatus}</p>
          <p className="flex items-baseline gap-x-1">
            <FaStar className="text-extra" />{" "}
            {product.rating.toString().slice(0, 3)}
          </p>
        </div>
        <button className="p-2 flex items-center gap-x-2 bg-secondary rounded place-content-center hover:bg-primary duration-300">
          <p className=""> Add to cart</p>
          <FaCartPlus className="text-white" />
        </button>
      </motion.div>

      <motion.div
        className={` w-full h-full flex flex-col space-y-3 ${
          !flipped ? "hidden" : ""
        }`}
        initial={{ rotateY: 180 }}
        animate={{ rotateY: flipped ? 0 : 180 }}
        transition={{ duration: 0.6, ease: "backInOut" }}
        style={{ perspective: "1000px", backfaceVisibility: "hidden" }}
      >
        <p className="font-bold text-lg">{product.title}</p>
        <p className="text-sm">{product.description}</p>
        <p className="text-sm">Category: {product.category}</p>
        <p className="text-sm">
          Minimum order quantity: {product.minimumOrderQuantity}
        </p>
        <p className="text-sm">
          Dimensions: {product.dimensions.width} x {product.dimensions.height} x
          {product.dimensions.depth}
        </p>
        <p className="text-sm">Brand: {product.brand}</p>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;
