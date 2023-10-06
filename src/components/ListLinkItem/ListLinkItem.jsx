import React from "react";
import Link from "next/link";

export const ListLinkItem = ({ item }) => {
  return (
    <li>
      <Link href={item.path}>{item.name}</Link>
    </li>
  );
};
