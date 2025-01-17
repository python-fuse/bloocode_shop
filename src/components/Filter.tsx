"use client";

import React from "react";
import { Product } from "@/lib/definitions";

// The filter and sort Dropdowns

// The props definition for the Filter Component,taking in the products, a function to sort and another to filter
interface FilterProps {
  products: Product[];
  onFilter: (category: string) => void;
  onSort: (option: string) => void;
}

const Filter: React.FC<FilterProps> = ({ products, onFilter, onSort }) => {
  const allCategories = products.map((product) => product.category);
  const categories = Array.from(new Set(allCategories));

  // Only unique categories
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilter(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSort(e.target.value);
  };

  return (
    <div className="flex-col lg:space-x-2 md:space-x-2 md:flex-row lg:flex-row p-2">
      <select
        className="md:p-2 rounded-md bg-primary text-white"
        onChange={handleFilterChange}
      >
        <option value="none">Select a category</option>
        {/* Mapped through all the fetched categories and returned an option for it */}
        {categories.map((cat, idx) => (
          <option key={idx} value={cat}>
            {cat.toUpperCase()}
          </option>
        ))}
      </select>

      <select
        className="md:p-2 rounded-md bg-primary text-white"
        onChange={handleSortChange}
      >
        <option value="none">Sort by</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating-asc">Rating: Low to High</option>
        <option value="rating-desc">Rating: High to Low</option>
      </select>
    </div>
  );
};

export default Filter;
