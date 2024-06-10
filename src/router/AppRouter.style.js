import React from "react";
import styled, { css } from "styled-components";

export const StyledNav = styled.nav`
  width: 216px;
  height: 100vh;
  background-color: rgb(247, 247, 248);
  padding-top: 90px;
`;
export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 216px;
  height: 48px;
  align-items: center;
  font-size: 16px;
  color: #222325;
  padding: 12px;
  background-color: ${(props) =>
    props.active
      ? "rgb(212, 214, 216)"
      : "rgb(247, 247, 248)"};
  &:hover {
    background-color: rgb(
      212,
      214,
      216
    ); /* hover 시 배경색 */
  }
`;
