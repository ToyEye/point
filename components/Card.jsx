import React from "react";
import Link from "next/link";

const Card = ({ card: { name, price, description } }) => {
  return (
    <li className=" bg-gray-700 max-w-[300px] rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 p-5 border h-[262px] flex flex-col">
      <h4 className="py-2 text-white font-bold">{name}</h4>
      <p className="text-base leading-7 text-white font-semibold space-y-4">
        {price}
      </p>
      <p className="text-sm leading-7 text-slate-300 space-y-4">
        {description}
      </p>
      <div className=" flex justify-center mt-auto">
        <Link
          href="/contact"
          className="flex items-center justify-center w-36 h-10 font-semibold rounded-md bg-indigo-100 hover:scale-90 duration-500"
        >
          Go to form
        </Link>
      </div>
    </li>
  );
};

export default Card;
