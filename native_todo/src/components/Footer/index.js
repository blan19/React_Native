import React from "react";
import styled, { css } from "@emotion/native";
import EnIcon from "react-native-vector-icons/Entypo";
import MaIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterEnIcon name="home" />
      <FooterMaIcon name="account" />
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 100px;
  background: black;
`;

const FooterEnIcon = styled(EnIcon)`
  color: white;
  font-weight: bold;
  font-size: 30px;
`;

const FooterMaIcon = styled(MaIcon)`
  color: white;
  font-weight: bold;
  font-size: 30px;
`;
