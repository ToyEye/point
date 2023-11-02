import React from "react";
import Link from "next/link";

const LinkLikeBtn = ({ path, classNames = "", text, label }) => {
  return (
    <Link
      href={path}
      className={`mx-auto block py-[10px]  text-center text-light  px-5 rounded-md bg-bgBtn hover:bg-bgBtnHover focus:bg-bgBtnHover transition ${classNames}`}
      aria-label={label}
    >
      {text}
    </Link>
  );
};

export default LinkLikeBtn;
