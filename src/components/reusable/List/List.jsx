"use client";

import { ListStyled } from "./List.styled";

export const List = ({ list, className, Component }) => {
  return (
    <ListStyled className={className}>
      {list?.map((item) => (
        <Component key={item.name} item={item} />
      ))}
    </ListStyled>
  );
};
