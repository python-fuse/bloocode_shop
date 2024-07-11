"use client";
import { Product } from "@/lib/definitions";
import Image from "next/image";
import { FaCartPlus, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      className="flex  flex-col justify-between gap-y-2 p-4 border-[3px] border-link rounded-xl hover:shadow-xl duration-300"
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
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

      <div className="flex justify-between">
        <p className="font-bold text-sm w-3/4 text-ellipsis">{product.title}</p>
        <p className="font-bold text-sm">${product.price}</p>
      </div>

      {/* <p>{product.category}</p> */}

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
  );
};

export default ProductCard;
