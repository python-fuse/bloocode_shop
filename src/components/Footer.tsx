import React from "react";
import { FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row lg:justify-between border-t-2 border-link px-2 lg:px-10 md:px-10 py-2">
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-y-2 w-max">
          <h2 className="text-xl lg:text-2xl font-bold">BlooShop</h2>
          <p className="text-xs lg:text-sm text-footlink">
            BlooShop is an online <br /> store that focus on delivering products{" "}
            <br />
            as fast as possible.
          </p>
        </div>

        <div className="flex flex-col gap-y-2">
          <h2 className="text-xl lg:text-2xl font-bold">Get Help</h2>
          <div className="links flex flex-col gap-y-2 text-footlink">
            <a
              href="#"
              className="text-xs hover:text-link duration-300 lg:text-sm"
            >
              Order Status
            </a>
            <a
              href="#"
              className="text-xs hover:text-link duration-300 lg:text-sm"
            >
              Delivery
            </a>
            <a
              href="#"
              className="text-xs hover:text-link duration-300 lg:text-sm"
            >
              Payment Options
            </a>
            <a
              href="#"
              className="text-xs  hover:text-link duration-300 lg:text-sm"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <h2 className="text-xl lg:text-2xl font-bold">Support</h2>
          <div className="links flex flex-col gap-y-2 text-footlink">
            <a href="#" className="text-xs lg:text-sm">
              FAQ
            </a>
            <a href="#" className="text-xs lg:text-sm">
              My Account
            </a>
            <a href="#" className="text-xs lg:text-sm">
              Track Order
            </a>
            <div className="right flex space-x-2 lg:items-end pb-2 items-start">
              <FaInstagram className="text-link" size={30} />
              <FaTwitter className="text-link" size={30} />
              <FaEnvelope className="text-link" size={30} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
