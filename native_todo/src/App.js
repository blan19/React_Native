import React from "react";
import styled from "@emotion/native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Todos from "./components/Todos";

export default function App() {
  return (
    <Container>
      <Header />
      <Todos />
      <Footer />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
