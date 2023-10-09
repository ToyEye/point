import styled from "styled-components";
import Link from "next/link";

export const LinkStyled = styled(Link)`
  display: block;

  &.navLink {
    padding-top: 10px;
    padding-bottom: 10px;

    font-weight: 500;
    font-size: 18px;

    color: ${({ theme }) => theme.linkColor};

    transition: color 350ms cubic-bezier(0.445, 0.05, 0.55, 0.95);

    &:is(:focus, :hover) {
      color: ${({ theme }) => theme.linkHoverColor};
    }
  }
`;
