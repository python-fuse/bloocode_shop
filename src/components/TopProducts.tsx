"use client";

import { Product } from "@/lib/definitions";
import fetchProducts from "@/lib/fetchProducts";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import TopProductsList from "./TopProductsList";
import Filter from "./Filter";

const TopProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredItems, setFilteredItems] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchProducts();
      setProducts(response.products);
      setFilteredItems(response.products); // Initially show all products
    };
    fetchData();
  }, []);

  const handleFilter = (category: string) => {
    if (category === "none") {
      setFilteredItems(products);
    } else {
      setFilteredItems(
        products.filter((product: Product) => product.category === category)
      );
    }
  };

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex justify-between p-4">
        <p className="text-3xl">Top Products</p>
        <Filter products={products} onFilter={handleFilter} />
        <Link
          href="#"
          className="flex gap-x-2 text-2xl items-center text-secondary hover:text-primary duration-200"
        >
          See all <FaArrowRight />
        </Link>
      </div>
      <TopProductsList products={filteredItems} />
    </div>
  );
};

export default TopProducts;
