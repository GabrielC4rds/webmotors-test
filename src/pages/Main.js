import React from 'react';
import Header from "../components/Header";
import Table from "../components/Table"
import styled from "styled-components";

const Content = styled.div`
  width: 933px;
  height: 312px;
  padding: 20px 10px;
  justify-content: center;
  align-items: center;
  background: #f3f5f8;
  @media (max-width: 768px) {
    width: 100%;
    height: 570px;
  }
`;

function Main() {
  return (
    <Content>
      <Header/>
      <Table/>
    </Content>
  );
}

export default Main;