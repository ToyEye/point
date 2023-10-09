"use client";

import { HeaderStyled } from "./Header.styled";
import { Container, List } from "../reusable";

import { ListLinkItem } from "../ListLinkItem/ListLinkItem";

const nav = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
];

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <nav>
          <List list={nav} Component={ListLinkItem} className="headerList" />
        </nav>
      </Container>
    </HeaderStyled>
  );
};
