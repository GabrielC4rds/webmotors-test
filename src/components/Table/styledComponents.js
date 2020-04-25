import styled, { css } from "styled-components";
import { Checkbox } from 'antd';

export const Content = styled.div`
  width: 61vw;
  height: 190px;
  background: #fff;
  box-shadow: 1px 1px 0 0 #e0e0e0;
  padding: 20px 30px;
  border-radius: 2px;
  @media (max-width: 768px) {
    width: 100%;
    height: 400px;
}
`;

export const Top = styled.div`
  width: 23%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 65%;
    height: 10%;

}
`;

export const Tdiv = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.label`
  color: grey;
`;

export const Mid = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 70%;
    padding-top: 20px;
    padding-bottom: 10px;
  }
`;

export const Desktop = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Mobile = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const HalfMid = styled.div`
  width: 48%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SelectDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 63px;

  }
`;

export const SelectBig1 = styled.div`
  border: solid gray 0.5px;
  width: 100%;
  height: 4.5vh;
  border-radius: 3px;
  display: flex;
  padding-left: 10px; 
  align-items: center;
  select{
    height: 100%;
    width: 5vw;
    border-color: #fff;
    :focus{
      outline: none;
      background: transparent;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SelectBig = styled.div`
  border: solid gray 0.5px;
  width: 100%;
  height: 4.5vh;
  border-radius: 3px;
  display: flex;
  padding-left: 10px; 
  align-items: center;
  select{
    height: 100%;
    width: 5vw;
    border-color: #fff;
    :focus{
      outline: none;
      background: transparent;
    }
  }
  @media (max-width: 768px) {
    height: 5vh;
  }
`;

export const SelectSmall = styled.div`
  border: solid gray 0.5px;
  width: 45%;
  height: 4.5vh;
  border-radius: 3px;
  display: flex;
  padding-left: 10px; 
  align-items: center;
  select{
    border-color: #fff;
    :focus{
      outline: none;
      background: transparent;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 5vh;
  }
  
`;

export const Bottom = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    height: 20%;
  }
`;

export const SalesDiv = styled.div`
  width: 37%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SalesButton = styled.div`
  width: 70%;
  height: 75%;
  background: #f3123c;
  border-radius: 5px;
  font-weight: bold;
  font-size: 17px;
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover{
    background: #c80f31;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 60%;
    label{
      font-size: 15px;
    }
  }
`;

export const AdvancedSearch = styled.div`
  width: 16%;
  font-weight: bold;
  color: #f3123c;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const CleanSearch = styled.label`
  cursor: pointer;
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const CustomCheckbox = styled(Checkbox)`
  ${
  css`
      & .ant-checkbox-checked .ant-checkbox-inner{
        background-color: #f3123c;
        color: #f3123c;
        border-color: #f3123c;
        
      }
    `}
`;