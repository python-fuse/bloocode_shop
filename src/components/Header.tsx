import Link from "next/link";
import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  // The header  and Nav bar

  return (
    <nav className="flex justify-between items-center p-5 border-b-2">
      <Link href="/">
        <h2 className="text-2xl lg:text-4xl text-secondary">BlooShop</h2>
      </Link>

      <div className="flex gap-x-4">
        <Link href="#">
          <FaUser
            size={30}
            className="text-primary hover:text-secondary duration-300"
          />
        </Link>

        <Link href="#">
          <FaShoppingCart
            size={30}
            className="text-primary hover:text-secondary duration-300"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
