import { Product } from "@/lib/definitions";
import React, { Suspense } from "react";
import ProductCard from "./ProductCard";

interface TopProductsListProps {
  products: Product[];
}

const TopProductsList: React.FC<TopProductsListProps> = ({ products }) => {
  const items = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 p-4 place-content-center gap-4">
      <Suspense fallback={<p> Loading...</p>}>{items}</Suspense>
    </div>
  );
};

export default TopProductsList;
