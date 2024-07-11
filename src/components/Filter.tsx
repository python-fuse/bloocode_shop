"use client";

import React from "react";
import { Product } from "@/lib/definitions";

interface FilterProps {
  products: Product[];
  onFilter: (category: string) => void;
}

const Filter: React.FC<FilterProps> = ({ products, onFilter }) => {
  const allCategories = products.map((product: Product) => product.category);
  const categories = Array.from(new Set(allCategories));

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilter(e.target.value);
  };

  return (
    <div className="w-1/3 flex p-2">
      <select
        className="p-2 rounded-md bg-primary text-white"
        onChange={handleFilterChange}
      >
        <option value="none">Select a category</option>
        {categories.map((cat: string, idx: number) => (
          <option key={idx} value={cat}>
            {cat.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
