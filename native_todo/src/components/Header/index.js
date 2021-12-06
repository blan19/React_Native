import React from "react";
import styled, { css } from "@emotion/native";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>My Todo</HeaderText>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.View`
  width: 100%;
  height: 100px;
  justify-content: flex-end;
  align-items: center;
  background: black;
`;

const HeaderText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 15px;
`;
