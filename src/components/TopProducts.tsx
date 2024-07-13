"use client";

import { Product } from "@/lib/definitions";
import fetchProducts from "@/lib/fetchProducts";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import TopProductsList from "./TopProductsList";
import Filter from "./Filter";

// All the filter and sort logic defined here, also rendering the top 30 products

const TopProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredItems, setFilteredItems] = useState<Product[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("none");
  const [sortOption, setSortOption] = useState<string>("none");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProducts();
        setProducts(response.products);
        setFilteredItems(response.products);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let filteredProducts: Product[] = [...products];

    if (selectedFilter !== "none") {
      filteredProducts = products.filter(
        (product) => product.category === selectedFilter
      );
    }

    if (sortOption === "price-asc") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating-asc") {
      filteredProducts.sort((a, b) => a.rating - b.rating);
    } else if (sortOption === "rating-desc") {
      filteredProducts.sort((a, b) => b.rating - a.rating);
    }

    setFilteredItems(filteredProducts);
  }, [products, selectedFilter, sortOption]);

  const handleFilter = (category: string) => {
    setSelectedFilter(category);
  };

  const handleSort = (option: string) => {
    setSortOption(option);
  };

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex justify-between p-4">
        <p className="text-lg lg:text-2xl">Top Products</p>
        <Filter
          products={products}
          onFilter={handleFilter}
          onSort={handleSort}
        />
        <Link
          href="#"
          className="flex gap-x-2 text-lg lg:text-2xl items-center text-secondary hover:text-primary duration-200"
        >
          <p className="hidden lg:block md:block">See all</p> <FaArrowRight />
        </Link>
      </div>

      <TopProductsList products={filteredItems} />
    </div>
  );
};

export default TopProducts;
