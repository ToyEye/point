import React from "react";
import Link from "next/link";

const Card = ({ card: { name, price, description } }) => {
  return (
    <li className=" bg-slate-300  max-w-[300px] rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 p-5 border h-[262px] flex flex-col border-bgBtn ">
      <h4 className="py-2 text-dark font-bold">{name}</h4>
      <p className="text-base leading-7  font-semibold space-y-4 text-dark">
        {price}
      </p>
      <p className="text-sm leading-7 text-dark space-y-4">{description}</p>
      <div className=" flex justify-center mt-auto">
        <Link
          href="/contact"
          className="flex items-center justify-center w-36 h-10 font-semibold rounded-md bg-bgBtn text-light hover:scale-90 duration-500"
        >
          Go to form
        </Link>
      </div>
    </li>
  );
};

export default Card;
