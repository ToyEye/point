import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;

    padding-left: 15px;
    padding-right: 15px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
