import React from "react";
import { LinkStyled } from "../reusable";

export const ListLinkItem = ({ item }) => {
  return (
    <li>
      <LinkStyled className="navLink" href={item.path}>
        {item.name}
      </LinkStyled>
    </li>
  );
};
